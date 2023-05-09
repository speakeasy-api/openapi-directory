# Person

### Available Operations

* [GetPeople](#getpeople) - Get a list of people
* [GetPeopleID](#getpeopleid) - Get a specific person

## GetPeople

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


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
    res, err := s.Person.GetPeople(ctx, operations.GetPeopleRequest{
        Ids: []string{
            "d4f9efc1-b451-42c1-8326-48dc2f615199",
            "ebfd0e9f-e6c6-432c-a3ae-d0117996312f",
            "de047717-78ff-461d-8174-76360a15db6a",
        },
        PageNumber: sdk.Int64(381397),
        PageSize: sdk.Int64(399161),
        Q: sdk.String("perferendis"),
        Sort: []GetPeopleSortEnum{
            operations.GetPeopleSortEnumFirstName,
            operations.GetPeopleSortEnumLastName,
        },
    }, operations.GetPeopleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPeople200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetPeopleID

Each series, season, and episode has a Credits section where you may add people and roles.
This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.


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
    res, err := s.Person.GetPeopleID(ctx, operations.GetPeopleIDRequest{
        ID: "a1adeaab-5851-4d6c-a45b-08b61891baa0",
    }, operations.GetPeopleIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPeopleID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
