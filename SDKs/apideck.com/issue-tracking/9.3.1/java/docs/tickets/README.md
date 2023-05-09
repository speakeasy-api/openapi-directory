# tickets

### Available Operations

* [collectionTicketsAdd](#collectionticketsadd) - Create Ticket
* [collectionTicketsAll](#collectionticketsall) - List Tickets
* [collectionTicketsDelete](#collectionticketsdelete) - Delete Ticket
* [collectionTicketsOne](#collectionticketsone) - Get Ticket
* [collectionTicketsUpdate](#collectionticketsupdate) - Update Ticket

## collectionTicketsAdd

Create Ticket

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketsAddRequest;
import org.openapis.openapi.models.operations.CollectionTicketsAddResponse;
import org.openapis.openapi.models.operations.CollectionTicketsAddSecurity;
import org.openapis.openapi.models.shared.AssigneeInput;
import org.openapis.openapi.models.shared.CollectionTagInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TicketInput;
import org.openapis.openapi.models.shared.TicketPriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketsAddRequest req = new CollectionTicketsAddRequest(                new TicketInput() {{
                                assignees = new org.openapis.openapi.models.shared.AssigneeInput[]{{
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                }};
                                description = "I am facing issues with my internet connection";
                                dueDate = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                parentId = "12345";
                                priority = TicketPriorityEnum.HIGH;
                                status = "open";
                                subject = "Technical Support Request";
                                tags = new org.openapis.openapi.models.shared.CollectionTagInput[]{{
                                    add(new CollectionTagInput("12345") {{
                                        id = "12345";
                                    }}),
                                    add(new CollectionTagInput("12345") {{
                                        id = "12345";
                                    }}),
                                }};
                                type = "Technical";
                            }};, "apideck-io", "ipsum", "excepturi") {{
                raw = false;
                xApideckServiceId = "aspernatur";
            }};            

            CollectionTicketsAddResponse res = sdk.tickets.collectionTicketsAdd(req, new CollectionTicketsAddSecurity("perferendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createTicketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketsAll

List Tickets

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketsAllRequest;
import org.openapis.openapi.models.operations.CollectionTicketsAllResponse;
import org.openapis.openapi.models.operations.CollectionTicketsAllSecurity;
import org.openapis.openapi.models.shared.IssuesFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;
import org.openapis.openapi.models.shared.TicketsSort;
import org.openapis.openapi.models.shared.TicketsSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketsAllRequest req = new CollectionTicketsAllRequest("apideck-io", "ad", "natus") {{
                cursor = "sed";
                fields = "iste";
                filter = new IssuesFilter() {{
                    assigneeId = "2332bd9c2eaaa5dcfa14721c";
                    since = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                    status = new String[]{{
                        add("natus"),
                    }};
                }};;
                limit = 386489L;
                raw = false;
                sort = new TicketsSort() {{
                    by = TicketsSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "saepe";
            }};            

            CollectionTicketsAllResponse res = sdk.tickets.collectionTicketsAll(req, new CollectionTicketsAllSecurity("fuga") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTicketsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketsDelete

Delete Ticket

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketsDeleteRequest;
import org.openapis.openapi.models.operations.CollectionTicketsDeleteResponse;
import org.openapis.openapi.models.operations.CollectionTicketsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketsDeleteRequest req = new CollectionTicketsDeleteRequest("apideck-io", "in", "corporis", "iste") {{
                raw = false;
                xApideckServiceId = "iure";
            }};            

            CollectionTicketsDeleteResponse res = sdk.tickets.collectionTicketsDelete(req, new CollectionTicketsDeleteSecurity("saepe") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteTicketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketsOne

Get Ticket

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketsOneRequest;
import org.openapis.openapi.models.operations.CollectionTicketsOneResponse;
import org.openapis.openapi.models.operations.CollectionTicketsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketsOneRequest req = new CollectionTicketsOneRequest("apideck-io", "quidem", "architecto", "ipsa") {{
                fields = "reiciendis";
                raw = false;
                xApideckServiceId = "est";
            }};            

            CollectionTicketsOneResponse res = sdk.tickets.collectionTicketsOne(req, new CollectionTicketsOneSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTicketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketsUpdate

Update Ticket

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketsUpdateRequest;
import org.openapis.openapi.models.operations.CollectionTicketsUpdateResponse;
import org.openapis.openapi.models.operations.CollectionTicketsUpdateSecurity;
import org.openapis.openapi.models.shared.AssigneeInput;
import org.openapis.openapi.models.shared.CollectionTagInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TicketInput;
import org.openapis.openapi.models.shared.TicketPriorityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketsUpdateRequest req = new CollectionTicketsUpdateRequest(                new TicketInput() {{
                                assignees = new org.openapis.openapi.models.shared.AssigneeInput[]{{
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                    add(new AssigneeInput("12345") {{
                                        id = "12345";
                                    }}),
                                }};
                                description = "I am facing issues with my internet connection";
                                dueDate = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                parentId = "12345";
                                priority = TicketPriorityEnum.HIGH;
                                status = "open";
                                subject = "Technical Support Request";
                                tags = new org.openapis.openapi.models.shared.CollectionTagInput[]{{
                                    add(new CollectionTagInput("12345") {{
                                        id = "12345";
                                    }}),
                                }};
                                type = "Technical";
                            }};, "apideck-io", "dolorem", "corporis", "explicabo") {{
                raw = false;
                xApideckServiceId = "nobis";
            }};            

            CollectionTicketsUpdateResponse res = sdk.tickets.collectionTicketsUpdate(req, new CollectionTicketsUpdateSecurity("enim") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateTicketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
