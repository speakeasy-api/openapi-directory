# newsFeed

### Available Operations

* [newsFeedCardAnalytics](#newsfeedcardanalytics) - News Feed Card Analytics
* [newsFeedCardsDetails](#newsfeedcardsdetails) - News Feed Cards Details
* [newsFeedCardsList](#newsfeedcardslist) - News Feed Cards List

## newsFeedCardAnalytics

This endpoint allows you to retrieve a daily series of engagement stats for a card over time.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "clicks" : (int) ,
            "impressions" : (int),
            "unique_clicks" : (int),
            "unique_impressions" : (int)
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardAnalyticsRequest;
import org.openapis.openapi.models.operations.NewsFeedCardAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardAnalyticsRequest req = new NewsFeedCardAnalyticsRequest() {{
                cardId = "{{card_identifier}}";
                endingAt = "2018-06-28T23:59:59-5:00";
                length = "14";
                unit = "day";
            }};            

            NewsFeedCardAnalyticsResponse res = sdk.newsFeed.newsFeedCardAnalytics(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsFeedCardsDetails

This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) The status of the export, returns 'success' when completed without errors,
    "created_at" : (string) Date created as ISO 8601 date,
    "updated_at" : (string) Date last updated as ISO 8601 date,
    "name" : (string) Card name,
    "publish_at" : (string) Date card was published as ISO 8601 date,
    "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
    "tags" : (array) Tag names associated with the card,
    "title" : (string) Title of the card,
    "image_url" : (string) Image URL used by this card,
    "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
    "description" : (string) Description text used by this card,
    "archived": (boolean) whether this Card is archived,
    "draft": (boolean) whether this Card is a draft,
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardsDetailsRequest;
import org.openapis.openapi.models.operations.NewsFeedCardsDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardsDetailsRequest req = new NewsFeedCardsDetailsRequest() {{
                cardId = "{{card_identifier}}";
            }};            

            NewsFeedCardsDetailsResponse res = sdk.newsFeed.newsFeedCardsDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newsFeedCardsList

This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "cards" : [
        {
            "id" : (string) Card API Identifier,
            "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
            "title" : (string) title of the card,
            "tags" : (array) tag names associated with the card
        },
        ...
    ]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsFeedCardsListRequest;
import org.openapis.openapi.models.operations.NewsFeedCardsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsFeedCardsListRequest req = new NewsFeedCardsListRequest() {{
                includeArchived = "true";
                page = "1";
                sortDirection = "desc";
            }};            

            NewsFeedCardsListResponse res = sdk.newsFeed.newsFeedCardsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
