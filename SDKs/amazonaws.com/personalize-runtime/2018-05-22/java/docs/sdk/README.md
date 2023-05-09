# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/personalize-runtime/>
### Available Operations

* [getPersonalizedRanking](#getpersonalizedranking) - <p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>
* [getRecommendations](#getrecommendations) - <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

## getPersonalizedRanking

<p>Re-ranks a list of recommended items for the given user. The first item in the list is deemed the most likely item to be of interest to the user.</p> <note> <p>The solution backing the campaign must have been created using a recipe of type PERSONALIZED_RANKING.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequest;
import org.openapis.openapi.models.operations.GetPersonalizedRankingRequestBody;
import org.openapis.openapi.models.operations.GetPersonalizedRankingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonalizedRankingRequest req = new GetPersonalizedRankingRequest(                new GetPersonalizedRankingRequestBody("veritatis",                 new String[]{{
                                                add("perferendis"),
                                                add("ipsam"),
                                                add("repellendus"),
                                            }}, "sapiente") {{
                                context = new java.util.HashMap<String, String>() {{
                                    put("odit", "at");
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                }};
                                filterArn = "totam";
                                filterValues = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                }};
                            }};) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetPersonalizedRankingResponse res = sdk.sdk.getPersonalizedRanking(req);

            if (res.getPersonalizedRankingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecommendations

<p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:</p> <ul> <li> <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p> </li> <li> <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p> </li> </ul> <note> <p>Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.</p> </note> <p> For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendationsRequest;
import org.openapis.openapi.models.operations.GetRecommendationsRequestBody;
import org.openapis.openapi.models.operations.GetRecommendationsResponse;
import org.openapis.openapi.models.shared.Promotion;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecommendationsRequest req = new GetRecommendationsRequest(                new GetRecommendationsRequestBody() {{
                                campaignArn = "cum";
                                context = new java.util.HashMap<String, String>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }};
                                filterArn = "ad";
                                filterValues = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                                itemId = "saepe";
                                numResults = 681820L;
                                promotions = new org.openapis.openapi.models.shared.Promotion[]{{
                                    add(new Promotion() {{
                                        filterArn = "corporis";
                                        filterValues = new java.util.HashMap<String, String>() {{
                                            put("iure", "saepe");
                                            put("quidem", "architecto");
                                            put("ipsa", "reiciendis");
                                        }};
                                        name = "Shaun Osinski";
                                        percentPromotedItems = 358152L;
                                    }}),
                                    add(new Promotion() {{
                                        filterArn = "explicabo";
                                        filterValues = new java.util.HashMap<String, String>() {{
                                            put("enim", "omnis");
                                            put("nemo", "minima");
                                            put("excepturi", "accusantium");
                                            put("iure", "culpa");
                                        }};
                                        name = "Darrin Brakus";
                                        percentPromotedItems = 635059L;
                                    }}),
                                }};
                                recommenderArn = "consequuntur";
                                userId = "repellat";
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            GetRecommendationsResponse res = sdk.sdk.getRecommendations(req);

            if (res.getRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
