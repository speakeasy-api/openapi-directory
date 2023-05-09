# categories

## Overview

Categorisation

### Available Operations

* [~~getAccountCategory~~](#getaccountcategory) - Get suggested and/or confirmed category for a specific account :warning: **Deprecated**
* [~~listAccountsCategories~~](#listaccountscategories) - List suggested and confirmed account categories :warning: **Deprecated**
* [~~listAvailableAccountCategories~~](#listavailableaccountcategories) - List account categories :warning: **Deprecated**
* [~~updateAccountCategory~~](#updateaccountcategory) - Patch account categories :warning: **Deprecated**
* [~~updateAccountsCategories~~](#updateaccountscategories) - Confirm categories for accounts :warning: **Deprecated**

## ~~getAccountCategory~~

Get category for specific nominal account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountCategoryRequest;
import org.openapis.openapi.models.operations.GetAccountCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountCategoryRequest req = new GetAccountCategoryRequest("quibusdam", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetAccountCategoryResponse res = sdk.categories.getAccountCategory(req);

            if (res.categorisedAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listAccountsCategories~~

Lists suggested and confirmed chart of account categories for the given company and data connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountsCategoriesRequest;
import org.openapis.openapi.models.operations.ListAccountsCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountsCategoriesRequest req = new ListAccountsCategoriesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "nulla";
            }};            

            ListAccountsCategoriesResponse res = sdk.categories.listAccountsCategories(req);

            if (res.categorisedAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listAvailableAccountCategories~~

Lists available account categories Codat's categorisation engine can provide. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableAccountCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAvailableAccountCategoriesResponse res = sdk.categories.listAvailableAccountCategories();

            if (res.categories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateAccountCategory~~

Update category for a specific nominal account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountCategoryRequest;
import org.openapis.openapi.models.operations.UpdateAccountCategoryResponse;
import org.openapis.openapi.models.shared.AccountCategory;
import org.openapis.openapi.models.shared.ConfirmCategory;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccountCategoryRequest req = new UpdateAccountCategoryRequest("vel", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                confirmCategory = new ConfirmCategory(                new AccountCategory() {{
                                    detailType = "error";
                                    subtype = "deserunt";
                                    type = "suscipit";
                                }};);;
            }};            

            UpdateAccountCategoryResponse res = sdk.categories.updateAccountCategory(req);

            if (res.categorisedAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~updateAccountsCategories~~

Comfirms the categories for all or a batch of accounts for a specific connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountsCategoriesRequest;
import org.openapis.openapi.models.operations.UpdateAccountsCategoriesResponse;
import org.openapis.openapi.models.shared.AccountCategory;
import org.openapis.openapi.models.shared.ConfirmCategories;
import org.openapis.openapi.models.shared.ConfirmCategoriesCategories;
import org.openapis.openapi.models.shared.ConfirmCategoriesCategoriesAccountRef;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccountsCategoriesRequest req = new UpdateAccountsCategoriesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                confirmCategories = new ConfirmCategories() {{
                    categories = new org.openapis.openapi.models.shared.ConfirmCategoriesCategories[]{{
                        add(new ConfirmCategoriesCategories() {{
                            accountRef = new ConfirmCategoriesCategoriesAccountRef("totam") {{
                                id = "e0f467cc-8796-4ed1-91a0-5dfc2ddf7cc7";
                            }};
                            confirmed = new AccountCategory() {{
                                detailType = "porro";
                                subtype = "dolorum";
                                type = "dicta";
                            }};
                        }}),
                        add(new ConfirmCategoriesCategories() {{
                            accountRef = new ConfirmCategoriesCategoriesAccountRef("corporis") {{
                                id = "ba928fc8-1674-42cb-b392-05929396fea7";
                            }};
                            confirmed = new AccountCategory() {{
                                detailType = "iste";
                                subtype = "iure";
                                type = "saepe";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateAccountsCategoriesResponse res = sdk.categories.updateAccountsCategories(req);

            if (res.categorisedAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
