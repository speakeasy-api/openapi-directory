# mailboxes

## Overview

Manage your mailboxes.

### Available Operations

* [changeMailboxPassword](#changemailboxpassword) - Change password for mailbox
* [configureMailboxAutoForward](#configuremailboxautoforward) - Configure auto-forward for mailbox
* [configureMailboxAutoReply](#configuremailboxautoreply) - Configure auto-reply for mailbox
* [createMailbox](#createmailbox) - Create a new mailbox.
* [deleteMailbox](#deletemailbox) - Delete a mailbox
* [getMailbox](#getmailbox) - Get a specific mailbox
* [getMailboxes](#getmailboxes) - Gets your mailboxes.

## changeMailboxPassword

Change password for mailbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangeMailboxPasswordRequest;
import org.openapis.openapi.models.operations.ChangeMailboxPasswordResponse;
import org.openapis.openapi.models.shared.UpdateMailboxPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangeMailboxPasswordRequest req = new ChangeMailboxPasswordRequest("perferendis", "amet") {{
                updateMailboxPasswordRequest = new UpdateMailboxPasswordRequest() {{
                    password = "optio";
                }};;
            }};            

            ChangeMailboxPasswordResponse res = sdk.mailboxes.changeMailboxPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureMailboxAutoForward

Configure auto-forward for mailbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureMailboxAutoForwardRequest;
import org.openapis.openapi.models.operations.ConfigureMailboxAutoForwardResponse;
import org.openapis.openapi.models.shared.AutoForward;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureMailboxAutoForwardRequest req = new ConfigureMailboxAutoForwardRequest("accusamus", "ad") {{
                autoForward = new AutoForward() {{
                    copyToMyself = false;
                    emailAddresses = new String[]{{
                        add("suscipit"),
                        add("deserunt"),
                        add("provident"),
                        add("minima"),
                    }};
                    enabled = false;
                }};;
            }};            

            ConfigureMailboxAutoForwardResponse res = sdk.mailboxes.configureMailboxAutoForward(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureMailboxAutoReply

Configure auto-reply for mailbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureMailboxAutoReplyRequest;
import org.openapis.openapi.models.operations.ConfigureMailboxAutoReplyResponse;
import org.openapis.openapi.models.shared.AutoReply;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigureMailboxAutoReplyRequest req = new ConfigureMailboxAutoReplyRequest("repellendus", "totam") {{
                autoReply = new AutoReply() {{
                    enabled = false;
                    message = "similique";
                    subject = "alias";
                }};;
            }};            

            ConfigureMailboxAutoReplyResponse res = sdk.mailboxes.configureMailboxAutoReply(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMailbox

Create a new mailbox.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMailboxResponse;
import org.openapis.openapi.models.shared.CreateMailboxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateMailboxRequest req = new CreateMailboxRequest() {{
                accountId = 872651;
                emailAddress = "quaerat";
                password = "tempora";
            }};            

            CreateMailboxResponse res = sdk.mailboxes.createMailbox(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMailbox

Delete a mailbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMailboxRequest;
import org.openapis.openapi.models.operations.DeleteMailboxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMailboxRequest req = new DeleteMailboxRequest("vel", "quod");            

            DeleteMailboxResponse res = sdk.mailboxes.deleteMailbox(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMailbox

Get a specific mailbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMailboxRequest;
import org.openapis.openapi.models.operations.GetMailboxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMailboxRequest req = new GetMailboxRequest("officiis", "qui");            

            GetMailboxResponse res = sdk.mailboxes.getMailbox(req);

            if (res.mailboxDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMailboxes

Currently only supports getting the mailboxes filtered by domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMailboxesRequest;
import org.openapis.openapi.models.operations.GetMailboxesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMailboxesRequest req = new GetMailboxesRequest() {{
                domainName = "dolorum";
            }};            

            GetMailboxesResponse res = sdk.mailboxes.getMailboxes(req);

            if (res.mailboxes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
