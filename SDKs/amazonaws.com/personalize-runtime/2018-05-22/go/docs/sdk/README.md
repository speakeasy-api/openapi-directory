# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-runtime/>
### Available Operations

* [GetPersonalizedRanking](#getpersonalizedranking) - <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
* [GetRecommendations](#getrecommendations) - <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

## GetPersonalizedRanking

<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPersonalizedRanking(ctx, operations.GetPersonalizedRankingRequest{
        RequestBody: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "quis",
            Context: map[string]string{
                "deserunt": "perferendis",
            },
            FilterArn: sdk.String("ipsam"),
            FilterValues: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            InputList: []string{
                "esse",
                "totam",
                "porro",
                "dolorum",
            },
            UserID: "dicta",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonalizedRankingResponse != nil {
        // handle response
    }
}
```

## GetRecommendations

<p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRecommendations(ctx, operations.GetRecommendationsRequest{
        RequestBody: operations.GetRecommendationsRequestBody{
            CampaignArn: sdk.String("totam"),
            Context: map[string]string{
                "commodi": "molestiae",
            },
            FilterArn: sdk.String("modi"),
            FilterValues: map[string]string{
                "impedit": "cum",
            },
            ItemID: sdk.String("esse"),
            NumResults: sdk.Int64(216550),
            Promotions: []shared.Promotion{
                shared.Promotion{
                    FilterArn: sdk.String("aspernatur"),
                    FilterValues: map[string]string{
                        "ad": "natus",
                    },
                    Name: sdk.String("Sheryl Fadel"),
                    PercentPromotedItems: sdk.Int64(943749),
                },
                shared.Promotion{
                    FilterArn: sdk.String("saepe"),
                    FilterValues: map[string]string{
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                    Name: sdk.String("Brenda Wisozk"),
                    PercentPromotedItems: sdk.Int64(670638),
                },
                shared.Promotion{
                    FilterArn: sdk.String("dolores"),
                    FilterValues: map[string]string{
                        "corporis": "explicabo",
                    },
                    Name: sdk.String("Ronnie Mohr"),
                    PercentPromotedItems: sdk.Int64(570197),
                },
            },
            RecommenderArn: sdk.String("accusantium"),
            UserID: sdk.String("iure"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecommendationsResponse != nil {
        // handle response
    }
}
```
