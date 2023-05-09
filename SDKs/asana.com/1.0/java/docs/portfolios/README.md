# portfolios

## Overview

A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.

### Available Operations

* [addCustomFieldSettingForPortfolio](#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [addItemForPortfolio](#additemforportfolio) - Add a portfolio item
* [addMembersForPortfolio](#addmembersforportfolio) - Add users to a portfolio
* [createPortfolio](#createportfolio) - Create a portfolio
* [deletePortfolio](#deleteportfolio) - Delete a portfolio
* [getItemsForPortfolio](#getitemsforportfolio) - Get portfolio items
* [getPortfolio](#getportfolio) - Get a portfolio
* [getPortfolios](#getportfolios) - Get multiple portfolios
* [removeCustomFieldSettingForPortfolio](#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [removeItemForPortfolio](#removeitemforportfolio) - Remove a portfolio item
* [removeMembersForPortfolio](#removemembersforportfolio) - Remove users from a portfolio
* [updatePortfolio](#updateportfolio) - Update a portfolio

## addCustomFieldSettingForPortfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForPortfolioRequest;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForPortfolioRequestBody;
import org.openapis.openapi.models.operations.AddCustomFieldSettingForPortfolioResponse;
import org.openapis.openapi.models.shared.AddCustomFieldSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddCustomFieldSettingForPortfolioRequest req = new AddCustomFieldSettingForPortfolioRequest(                new AddCustomFieldSettingForPortfolioRequestBody() {{
                                data = new AddCustomFieldSettingRequest("14916") {{
                                    insertAfter = "1331";
                                    insertBefore = "1331";
                                    isImportant = true;
                                }};;
                            }};, "architecto") {{
                optPretty = false;
            }};            

            AddCustomFieldSettingForPortfolioResponse res = sdk.portfolios.addCustomFieldSettingForPortfolio(req);

            if (res.addCustomFieldSettingForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addItemForPortfolio

Add an item to a portfolio.
Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddItemForPortfolioRequest;
import org.openapis.openapi.models.operations.AddItemForPortfolioRequestBody;
import org.openapis.openapi.models.operations.AddItemForPortfolioResponse;
import org.openapis.openapi.models.shared.PortfolioAddItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddItemForPortfolioRequest req = new AddItemForPortfolioRequest(                new AddItemForPortfolioRequestBody() {{
                                data = new PortfolioAddItemRequest("1331") {{
                                    insertAfter = "1331";
                                    insertBefore = "1331";
                                }};;
                            }};, "architecto") {{
                optFields = new String[]{{
                    add("ullam"),
                    add("expedita"),
                    add("nihil"),
                    add("repellat"),
                }};
                optPretty = false;
            }};            

            AddItemForPortfolioResponse res = sdk.portfolios.addItemForPortfolio(req);

            if (res.addItemForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addMembersForPortfolio

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMembersForPortfolioRequest;
import org.openapis.openapi.models.operations.AddMembersForPortfolioRequestBody;
import org.openapis.openapi.models.operations.AddMembersForPortfolioResponse;
import org.openapis.openapi.models.shared.AddMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddMembersForPortfolioRequest req = new AddMembersForPortfolioRequest(                new AddMembersForPortfolioRequestBody() {{
                                data = new AddMembersRequest("521621,621373");;
                            }};, "quibusdam") {{
                optFields = new String[]{{
                    add("saepe"),
                }};
                optPretty = false;
            }};            

            AddMembersForPortfolioResponse res = sdk.portfolios.addMembersForPortfolio(req);

            if (res.addMembersForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPortfolio

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortfolioRequest;
import org.openapis.openapi.models.operations.CreatePortfolioRequestBodyInput;
import org.openapis.openapi.models.operations.CreatePortfolioResponse;
import org.openapis.openapi.models.shared.PortfolioRequestColorEnum;
import org.openapis.openapi.models.shared.PortfolioRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreatePortfolioRequest req = new CreatePortfolioRequest(                new CreatePortfolioRequestBodyInput() {{
                                data = new PortfolioRequestInput() {{
                                    color = PortfolioRequestColorEnum.LIGHT_GREEN;
                                    name = "Bug Portfolio";
                                    public_ = false;
                                    workspace = "167589";
                                }};;
                            }};) {{
                optFields = new String[]{{
                    add("accusantium"),
                    add("consequuntur"),
                    add("praesentium"),
                    add("natus"),
                }};
                optPretty = false;
            }};            

            CreatePortfolioResponse res = sdk.portfolios.createPortfolio(req);

            if (res.createPortfolio201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePortfolio

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePortfolioRequest;
import org.openapis.openapi.models.operations.DeletePortfolioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeletePortfolioRequest req = new DeletePortfolioRequest("magni") {{
                optFields = new String[]{{
                    add("quo"),
                }};
                optPretty = false;
            }};            

            DeletePortfolioResponse res = sdk.portfolios.deletePortfolio(req);

            if (res.deletePortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemsForPortfolio

Get a list of the items in compact form in a portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsForPortfolioRequest;
import org.openapis.openapi.models.operations.GetItemsForPortfolioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetItemsForPortfolioRequest req = new GetItemsForPortfolioRequest("illum") {{
                limit = 864934L;
                offset = "maxime";
                optFields = new String[]{{
                    add("excepturi"),
                    add("odit"),
                }};
                optPretty = false;
            }};            

            GetItemsForPortfolioResponse res = sdk.portfolios.getItemsForPortfolio(req);

            if (res.getItemsForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolio

Returns the complete portfolio record for a single portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioRequest;
import org.openapis.openapi.models.operations.GetPortfolioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPortfolioRequest req = new GetPortfolioRequest("ea") {{
                optFields = new String[]{{
                    add("ab"),
                }};
                optPretty = false;
            }};            

            GetPortfolioResponse res = sdk.portfolios.getPortfolio(req);

            if (res.getPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfoliosRequest;
import org.openapis.openapi.models.operations.GetPortfoliosResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPortfoliosRequest req = new GetPortfoliosRequest("maiores", "quidem") {{
                limit = 373291L;
                offset = "voluptate";
                optFields = new String[]{{
                    add("nam"),
                    add("eaque"),
                }};
                optPretty = false;
            }};            

            GetPortfoliosResponse res = sdk.portfolios.getPortfolios(req);

            if (res.getPortfolios200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeCustomFieldSettingForPortfolio

Removes a custom field setting from a portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForPortfolioRequest;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForPortfolioRequestBody;
import org.openapis.openapi.models.operations.RemoveCustomFieldSettingForPortfolioResponse;
import org.openapis.openapi.models.shared.RemoveCustomFieldSettingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveCustomFieldSettingForPortfolioRequest req = new RemoveCustomFieldSettingForPortfolioRequest(                new RemoveCustomFieldSettingForPortfolioRequestBody() {{
                                data = new RemoveCustomFieldSettingRequest("14916");;
                            }};, "pariatur") {{
                optPretty = false;
            }};            

            RemoveCustomFieldSettingForPortfolioResponse res = sdk.portfolios.removeCustomFieldSettingForPortfolio(req);

            if (res.removeCustomFieldSettingForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeItemForPortfolio

Remove an item from a portfolio.
Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveItemForPortfolioRequest;
import org.openapis.openapi.models.operations.RemoveItemForPortfolioRequestBody;
import org.openapis.openapi.models.operations.RemoveItemForPortfolioResponse;
import org.openapis.openapi.models.shared.PortfolioRemoveItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveItemForPortfolioRequest req = new RemoveItemForPortfolioRequest(                new RemoveItemForPortfolioRequestBody() {{
                                data = new PortfolioRemoveItemRequest("1331");;
                            }};, "nemo") {{
                optFields = new String[]{{
                    add("perferendis"),
                    add("fugiat"),
                    add("amet"),
                    add("aut"),
                }};
                optPretty = false;
            }};            

            RemoveItemForPortfolioResponse res = sdk.portfolios.removeItemForPortfolio(req);

            if (res.removeItemForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeMembersForPortfolio

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveMembersForPortfolioRequest;
import org.openapis.openapi.models.operations.RemoveMembersForPortfolioRequestBody;
import org.openapis.openapi.models.operations.RemoveMembersForPortfolioResponse;
import org.openapis.openapi.models.shared.RemoveMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveMembersForPortfolioRequest req = new RemoveMembersForPortfolioRequest(                new RemoveMembersForPortfolioRequestBody() {{
                                data = new RemoveMembersRequest("521621,621373");;
                            }};, "cumque") {{
                optFields = new String[]{{
                    add("hic"),
                    add("libero"),
                }};
                optPretty = false;
            }};            

            RemoveMembersForPortfolioResponse res = sdk.portfolios.removeMembersForPortfolio(req);

            if (res.removeMembersForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortfolio

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortfolioRequest;
import org.openapis.openapi.models.operations.UpdatePortfolioRequestBodyInput;
import org.openapis.openapi.models.operations.UpdatePortfolioResponse;
import org.openapis.openapi.models.shared.PortfolioRequestColorEnum;
import org.openapis.openapi.models.shared.PortfolioRequestInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdatePortfolioRequest req = new UpdatePortfolioRequest(                new UpdatePortfolioRequestBodyInput() {{
                                data = new PortfolioRequestInput() {{
                                    color = PortfolioRequestColorEnum.LIGHT_GREEN;
                                    name = "Bug Portfolio";
                                    public_ = false;
                                    workspace = "167589";
                                }};;
                            }};, "nobis") {{
                optFields = new String[]{{
                    add("quis"),
                }};
                optPretty = false;
            }};            

            UpdatePortfolioResponse res = sdk.portfolios.updatePortfolio(req);

            if (res.updatePortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
