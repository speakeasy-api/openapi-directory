# CompanyCredits

### Available Operations

* [CompanyCreditsSearchRead](#companycreditssearchread) - Return company credits search result
* [CompanyCreditsSearchallRead](#companycreditssearchallread) - Return company credits search result

## CompanyCreditsSearchRead

Return company credits search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search company credits for the movie
* You can use both Amharic or English charset/font to search

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanyCredits.CompanyCreditsSearchRead(ctx, operations.CompanyCreditsSearchReadRequest{
        MovieTitle: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompanyCreditsSearchallRead

Return company credits search result

### Response Class (Status 200)
__{param}__ argument can be
* company name
* movie title or
* company credit description (such as production, cinematography, etc)

For more details on how company credits are listed [see here][ref].
[ref]: https://etmdb.com/en/company-list/company_name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompanyCredits.CompanyCreditsSearchallRead(ctx, operations.CompanyCreditsSearchallReadRequest{
        Param: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
