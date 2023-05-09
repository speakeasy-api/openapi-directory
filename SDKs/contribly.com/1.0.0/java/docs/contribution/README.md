# contribution

## Overview

Submit, moderate and retrieve user contributions

### Available Operations

* [deleteContributionsId](#deletecontributionsid) - Delete this contribution
* [getContributionRefinementTypes](#getcontributionrefinementtypes) - List valid contribution refinement types
* [getContributionRefinements](#getcontributionrefinements) - List contribution refinement options
* [getContributions](#getcontributions) - List contributions
* [getContributionsId](#getcontributionsid) - Get a single contribution by id
* [getContributionsIdLikes](#getcontributionsidlikes) - List users who have liked this contributions
* [getExportsId](#getexportsid) - Get a single export job; poll to follow export progress.
* [postContributions](#postcontributions) - Create a new contribution
* [postContributionsIdFlag](#postcontributionsidflag) - Raise a flag against this contribution
* [postContributionsIdLike](#postcontributionsidlike) - Allows a user to mark a contribution as liked
* [postContributionsIdModerate](#postcontributionsidmoderate) - Perform a moderation action on this contribution
* [postExport](#postexport) - Export contributions.
* [postExportSummary](#postexportsummary) - Export contributions preflight summary.

## deleteContributionsId

Delete this contribution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContributionsIdRequest;
import org.openapis.openapi.models.operations.DeleteContributionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContributionsIdRequest req = new DeleteContributionsIdRequest("dolorum");            

            DeleteContributionsIdResponse res = sdk.contribution.deleteContributionsId(req);

            if (res.contribution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributionRefinementTypes

List valid contribution refinement types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributionRefinementTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributionRefinementTypesResponse res = sdk.contribution.getContributionRefinementTypes();

            if (res.getContributionRefinementTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributionRefinements

Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributionRefinementsRequest;
import org.openapis.openapi.models.operations.GetContributionRefinementsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributionRefinementsRequest req = new GetContributionRefinementsRequest() {{
                assignment = "in";
                country = "Jordan";
                createdAfter = OffsetDateTime.parse("2020-01-25T11:09:22.009Z");
                createdBefore = OffsetDateTime.parse("2022-10-08T04:08:32.252Z");
                geohash = "magnam";
                hasLocation = false;
                latLong = "cumque";
                mediaType = "facere";
                ownedBy = "ea";
                q = "aliquid";
                radius = 6754.39;
                refinementSize = 8811.04;
                refinements = "non";
                urlWords = "occaecati";
                user = "enim";
            }};            

            GetContributionRefinementsResponse res = sdk.contribution.getContributionRefinements(req);

            if (res.getContributionRefinements200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributions

Retrieve contributions.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributionsRequest;
import org.openapis.openapi.models.operations.GetContributionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributionsRequest req = new GetContributionsRequest() {{
                assignment = "accusamus";
                country = "Venezuela";
                createdAfter = OffsetDateTime.parse("2021-10-28T10:05:29.849Z");
                createdBefore = OffsetDateTime.parse("2021-09-06T10:36:33.442Z");
                createdDay = LocalDate.parse("2021-12-07");
                createdMonth = "sapiente";
                format = "amet";
                geohash = "deserunt";
                hasLocation = false;
                ids = "nisi";
                latLong = "vel";
                mediaType = "natus";
                ownedBy = "omnis";
                q = "molestiae";
                radius = 191.93;
                urlWords = "nihil";
                user = "magnam";
            }};            

            GetContributionsResponse res = sdk.contribution.getContributions(req);

            if (res.contributions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributionsId

Get a single contribution by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributionsIdRequest;
import org.openapis.openapi.models.operations.GetContributionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributionsIdRequest req = new GetContributionsIdRequest("distinctio");            

            GetContributionsIdResponse res = sdk.contribution.getContributionsId(req);

            if (res.contribution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributionsIdLikes

Returns a list of user ids of users who have liked this conribution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributionsIdLikesRequest;
import org.openapis.openapi.models.operations.GetContributionsIdLikesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributionsIdLikesRequest req = new GetContributionsIdLikesRequest("id");            

            GetContributionsIdLikesResponse res = sdk.contribution.getContributionsIdLikes(req);

            if (res.getContributionsIdLikes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportsId

Get a single export job; poll to follow export progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportsIdRequest;
import org.openapis.openapi.models.operations.GetExportsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExportsIdRequest req = new GetExportsIdRequest("labore");            

            GetExportsIdResponse res = sdk.contribution.getExportsId(req);

            if (res.export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContributions

Create a new contribution

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContributionsResponse;
import org.openapis.openapi.models.operations.PostContributionsSecurity;
import org.openapis.openapi.models.shared.Artifact;
import org.openapis.openapi.models.shared.Assignment;
import org.openapis.openapi.models.shared.Authority;
import org.openapis.openapi.models.shared.Client;
import org.openapis.openapi.models.shared.Contribution;
import org.openapis.openapi.models.shared.LatLong;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.MediaUsage;
import org.openapis.openapi.models.shared.ModerationAction;
import org.openapis.openapi.models.shared.ModerationHistoryItem;
import org.openapis.openapi.models.shared.ModerationState;
import org.openapis.openapi.models.shared.OsmId;
import org.openapis.openapi.models.shared.Place;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagSet;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.Via;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Contribution req = new Contribution() {{
                assignment = new Assignment() {{
                    allowsAnonymousContributions = false;
                    callToAction = "labore";
                    cover = new MediaUsage() {{
                        artifacts = new org.openapis.openapi.models.shared.Artifact[]{{
                            add(new Artifact() {{
                                contentLength = 6180.16;
                                contentType = "nobis";
                                height = 4287.69;
                                label = "vero";
                                url = "aspernatur";
                                width = 1028.63;
                            }}),
                            add(new Artifact() {{
                                contentLength = 2982.82;
                                contentType = "et";
                                height = 5699.65;
                                label = "ullam";
                                url = "provident";
                                width = 5518.16;
                            }}),
                        }};
                        id = "90afa563-e251-46fe-8c8b-711e5b7fd2ed";
                        media = new Media() {{
                            duration = 375.59;
                            id = "28921cdd-c692-4601-bb57-6b0d5f0d30c5";
                            place = new Place() {{
                                country = "United States of America";
                                geohash = "libero";
                                google = "nobis";
                                latLong = new LatLong() {{
                                    latitude = 1716.29;
                                    longitude = 3394.04;
                                }};;
                                name = "Lance Becker";
                                osm = new OsmId() {{
                                    osmId = 1794.9;
                                    osmType = "perferendis";
                                }};;
                            }};;
                            type = "dolores";
                        }};;
                    }};;
                    created = OffsetDateTime.parse("2021-08-11T12:30:29.509Z");
                    description = "dolor";
                    embargo = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                    ends = OffsetDateTime.parse("2020-03-20T18:01:24.992Z");
                    featured = false;
                    id = "9b90c289-09b3-4fe4-9a8d-9cbf48633323";
                    mediaRequired = false;
                    moderator = "hic";
                    name = "Felipe Klein";
                    open = false;
                    receiptMessage = "amet";
                    starts = OffsetDateTime.parse("2022-06-29T07:40:27.174Z");
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag("voluptas", "deserunt") {{
                            colour = "#0061a6";
                            id = "00674ebf-6928-40d1-ba77-a89ebf737ae4";
                            name = "Lisa Fay";
                            tagSet = new TagSet("sed", "vel") {{
                                id = "5e6a95d8-a0d4-446c-a2af-7a73cf3be453";
                                name = "Miss Jimmie Kozey";
                            }};
                            urlWords = "libero";
                        }}),
                    }};
                    urlWords = "quam";
                    webUrl = "ipsum";
                }};;
                attribution = "incidunt";
                body = "qui";
                created = OffsetDateTime.parse("2021-05-21T11:11:37.334Z");
                headline = "pariatur";
                id = "b1a8422b-b679-4d23-a271-5bf0cbb1e31b";
                mediaUsages = new org.openapis.openapi.models.shared.MediaUsage[]{{
                    add(new MediaUsage() {{
                        artifacts = new org.openapis.openapi.models.shared.Artifact[]{{
                            add(new Artifact() {{
                                contentLength = 5844.76;
                                contentType = "aperiam";
                                height = 9619.37;
                                label = "dolorem";
                                url = "dolore";
                                width = 2869.15;
                            }}),
                            add(new Artifact() {{
                                contentLength = 2408.29;
                                contentType = "dolorum";
                                height = 1002.94;
                                label = "quae";
                                url = "aut";
                                width = 5556.49;
                            }}),
                            add(new Artifact() {{
                                contentLength = 9295.3;
                                contentType = "consequatur";
                                height = 6699.17;
                                label = "repellendus";
                                url = "porro";
                                width = 9843.3;
                            }}),
                        }};
                        id = "4b921879-fce9-453f-b3ef-7fbc7abd74dd";
                        media = new Media() {{
                            duration = 1943.42;
                            id = "9c0f5d2c-ff7c-470a-8562-6d436813f16d";
                            place = new Place() {{
                                country = "Mayotte";
                                geohash = "voluptatibus";
                                google = "nostrum";
                                latLong = new LatLong() {{
                                    latitude = 9608.35;
                                    longitude = 7888.73;
                                }};
                                name = "Nathaniel Ryan";
                                osm = new OsmId() {{
                                    osmId = 3994.99;
                                    osmType = "inventore";
                                }};
                            }};
                            type = "magnam";
                        }};
                    }}),
                    add(new MediaUsage() {{
                        artifacts = new org.openapis.openapi.models.shared.Artifact[]{{
                            add(new Artifact() {{
                                contentLength = 7752.2;
                                contentType = "consectetur";
                                height = 9262.13;
                                label = "aspernatur";
                                url = "minima";
                                width = 534.27;
                            }}),
                            add(new Artifact() {{
                                contentLength = 9528.71;
                                contentType = "libero";
                                height = 139.48;
                                label = "aut";
                                url = "deleniti";
                                width = 7705.81;
                            }}),
                        }};
                        id = "42e141aa-c366-4c8d-96b1-442907474778";
                        media = new Media() {{
                            duration = 6832.82;
                            id = "7bd466d2-8c10-4ab3-8dca-4251904e523c";
                            place = new Place() {{
                                country = "Kiribati";
                                geohash = "recusandae";
                                google = "aperiam";
                                latLong = new LatLong() {{
                                    latitude = 7151.79;
                                    longitude = 7997.96;
                                }};
                                name = "Debra Kovacek";
                                osm = new OsmId() {{
                                    osmId = 3068.1;
                                    osmType = "odio";
                                }};
                            }};
                            type = "occaecati";
                        }};
                    }}),
                    add(new MediaUsage() {{
                        artifacts = new org.openapis.openapi.models.shared.Artifact[]{{
                            add(new Artifact() {{
                                contentLength = 9594.34;
                                contentType = "dolores";
                                height = 6455.7;
                                label = "molestiae";
                                url = "accusantium";
                                width = 7836.48;
                            }}),
                            add(new Artifact() {{
                                contentLength = 4304.02;
                                contentType = "quas";
                                height = 5100.17;
                                label = "consequuntur";
                                url = "deleniti";
                                width = 1438.29;
                            }}),
                        }};
                        id = "aa482562-f222-4e98-97ee-17cbe61e6b7b";
                        media = new Media() {{
                            duration = 5801.97;
                            id = "5bc0ab3c-20c4-4f37-89fd-871f99dd2efd";
                            place = new Place() {{
                                country = "Belgium";
                                geohash = "consequuntur";
                                google = "quasi";
                                latLong = new LatLong() {{
                                    latitude = 6288.99;
                                    longitude = 6336.08;
                                }};
                                name = "Mandy Berge";
                                osm = new OsmId() {{
                                    osmId = 4473.78;
                                    osmType = "eius";
                                }};
                            }};
                            type = "libero";
                        }};
                    }}),
                }};
                moderationHistory = new org.openapis.openapi.models.shared.ModerationHistoryItem[]{{
                    add(new ModerationHistoryItem(OffsetDateTime.parse("2022-04-26T11:54:02.741Z")) {{
                        action = new ModerationAction("nemo", "quae",                 new ModerationState("quaerat", "porro", false);) {{
                            id = "b04f1575-6082-4d68-aa19-f1d17051339d";
                            label = "accusantium";
                            resultingState = new ModerationState("officia", "asperiores", false) {{
                                id = "8086a184-0394-4c26-871f-93f5f0642dac";
                                label = "dignissimos";
                                public_ = false;
                            }};
                        }};
                        date = OffsetDateTime.parse("2022-02-19T04:53:13.708Z");
                        notes = "ab";
                    }}),
                    add(new ModerationHistoryItem(OffsetDateTime.parse("2020-06-26T02:06:35.498Z")) {{
                        action = new ModerationAction("adipisci", "minus",                 new ModerationState("dolores", "blanditiis", false);) {{
                            id = "a63aae8d-6786-44db-b675-fd5e60b375ed";
                            label = "numquam";
                            resultingState = new ModerationState("nobis", "dolorum", false) {{
                                id = "f6fbee41-f333-417f-a35b-60eb1ea42655";
                                label = "minima";
                                public_ = false;
                            }};
                        }};
                        date = OffsetDateTime.parse("2022-09-14T20:54:59.386Z");
                        notes = "aliquam";
                    }}),
                    add(new ModerationHistoryItem(OffsetDateTime.parse("2020-02-07T00:03:24.642Z")) {{
                        action = new ModerationAction("debitis", "rem",                 new ModerationState("sit", "nobis", false);) {{
                            id = "53b88f3a-8d8f-45c0-b2f2-fb7b194a276b";
                            label = "explicabo";
                            resultingState = new ModerationState("incidunt", "ipsam", false) {{
                                id = "6916fe1f-08f4-4294-a369-8f447f603e8b";
                                label = "quaerat";
                                public_ = false;
                            }};
                        }};
                        date = OffsetDateTime.parse("2022-05-02T12:56:56.327Z");
                        notes = "minima";
                    }}),
                    add(new ModerationHistoryItem(OffsetDateTime.parse("2021-03-27T07:55:22.584Z")) {{
                        action = new ModerationAction("tenetur", "laboriosam",                 new ModerationState("alias", "amet", false);) {{
                            id = "d20e457e-1858-4b6a-89fb-e3a5aa8e4824";
                            label = "fugiat";
                            resultingState = new ModerationState("laborum", "nam", false) {{
                                id = "0ab40750-88e5-4186-a065-e904f3b1194b";
                                label = "atque";
                                public_ = false;
                            }};
                        }};
                        date = OffsetDateTime.parse("2022-02-02T22:51:17.351Z");
                        notes = "unde";
                    }}),
                }};
                place = new Place() {{
                    country = "Spain";
                    geohash = "delectus";
                    google = "voluptates";
                    latLong = new LatLong() {{
                        latitude = 168.71;
                        longitude = 6672.85;
                    }};;
                    name = "Ron Schulist";
                    osm = new OsmId() {{
                        osmId = 6485.98;
                        osmType = "veniam";
                    }};;
                }};;
                urlWords = "voluptatem";
                via = new Via() {{
                    authority = new Authority() {{
                        client = new Client() {{
                            id = "ce187f86-bc17-43d6-89ee-e9526f8d986e";
                            name = "Dave Cartwright";
                        }};;
                        id = "d4f0e101-2563-4f94-a29e-973e922a57a1";
                        user = new User() {{
                            bio = "corporis";
                            displayName = "quidem";
                            id = "e3e06080-7e2b-46e3-ab88-45f0597a60ff";
                            registered = OffsetDateTime.parse("2022-05-03T16:31:59.395Z");
                            username = "Erin.Greenholt6";
                        }};;
                    }};;
                    ipAddress = "recusandae";
                    ipAddressPlace = new Place() {{
                        country = "Myanmar";
                        geohash = "quaerat";
                        google = "molestiae";
                        latLong = new LatLong() {{
                            latitude = 4032.18;
                            longitude = 2840;
                        }};;
                        name = "Jeff Toy";
                        osm = new OsmId() {{
                            osmId = 3679.27;
                            osmType = "recusandae";
                        }};;
                    }};;
                }};;
            }};            

            PostContributionsResponse res = sdk.contribution.postContributions(req, new PostContributionsSecurity("esse") {{
                oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contribution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContributionsIdFlag

Allows end users to bring potential issues with publicly visible content to the attention of moderators.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContributionsIdFlagRequest;
import org.openapis.openapi.models.operations.PostContributionsIdFlagResponse;
import org.openapis.openapi.models.shared.Flag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContributionsIdFlagRequest req = new PostContributionsIdFlagRequest(                new Flag() {{
                                date = OffsetDateTime.parse("2022-04-29T15:23:46.044Z");
                                email = "Walker35@yahoo.com";
                                id = "1a5a9da6-60ff-457b-baad-4f9efc1b4512";
                                notes = "cumque";
                                type = "quae";
                            }};, "perferendis");            

            PostContributionsIdFlagResponse res = sdk.contribution.postContributionsIdFlag(req);

            if (res.flag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContributionsIdLike

Allows a user to mark a contribution as liked

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContributionsIdLikeRequest;
import org.openapis.openapi.models.operations.PostContributionsIdLikeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContributionsIdLikeRequest req = new PostContributionsIdLikeRequest("velit");            

            PostContributionsIdLikeResponse res = sdk.contribution.postContributionsIdLike(req);

            if (res.postContributionsIdLike200ApplicationJSONNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContributionsIdModerate

Allows the contribution to approved of rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContributionsIdModerateRequest;
import org.openapis.openapi.models.operations.PostContributionsIdModerateResponse;
import org.openapis.openapi.models.shared.ModerationAction;
import org.openapis.openapi.models.shared.ModerationHistoryItemSubmission;
import org.openapis.openapi.models.shared.ModerationState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContributionsIdModerateRequest req = new PostContributionsIdModerateRequest(                new ModerationHistoryItemSubmission() {{
                                action = new ModerationAction("aspernatur", "eum",                 new ModerationState("eius", "rem", false););;
                                notes = "at";
                            }};, "impedit");            

            PostContributionsIdModerateResponse res = sdk.contribution.postContributionsIdModerate(req);

            if (res.postContributionsIdModerate200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExport

Begin an export job. Returns a export job which can be polled to follow the progress of an export.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExportRequest;
import org.openapis.openapi.models.operations.PostExportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExportRequest req = new PostExportRequest() {{
                assignment = "eos";
                combined = false;
                country = "Uzbekistan";
                createdAfter = OffsetDateTime.parse("2022-11-19T04:16:20.363Z");
                createdBefore = OffsetDateTime.parse("2022-11-22T22:38:36.599Z");
                format = "cupiditate";
                geohash = "provident";
                hasLocation = false;
                individual = false;
                json = false;
                latLong = "earum";
                mediaType = "soluta";
                ownedBy = "hic";
                q = "illum";
                radius = 525.08;
                tagged = false;
                urlWords = "earum";
                user = "perspiciatis";
            }};            

            PostExportResponse res = sdk.contribution.postExport(req);

            if (res.export != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExportSummary

Provide a preflight summary of an export request.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExportSummaryRequest;
import org.openapis.openapi.models.operations.PostExportSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExportSummaryRequest req = new PostExportSummaryRequest() {{
                assignment = "maiores";
                country = "Togo";
                createdAfter = OffsetDateTime.parse("2022-03-21T23:02:35.494Z");
                createdBefore = OffsetDateTime.parse("2022-10-15T18:57:46.028Z");
                geohash = "fugit";
                hasLocation = false;
                latLong = "cumque";
                mediaType = "fuga";
                ownedBy = "ratione";
                q = "animi";
                radius = 8987.6;
                urlWords = "nulla";
                user = "consequatur";
            }};            

            PostExportSummaryResponse res = sdk.contribution.postExportSummary(req);

            if (res.exportSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
