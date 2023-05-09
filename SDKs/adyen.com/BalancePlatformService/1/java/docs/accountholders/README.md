# accountHolders

### Available Operations

* [getAccountHoldersId](#getaccountholdersid) - Get an account holder
* [getAccountHoldersIdBalanceAccounts](#getaccountholdersidbalanceaccounts) - Get all balance accounts of an account holder
* [patchAccountHoldersId](#patchaccountholdersid) - Update an account holder
* [postAccountHolders](#postaccountholders) - Create an account holder

## getAccountHoldersId

Returns an account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountHoldersIdRequest;
import org.openapis.openapi.models.operations.GetAccountHoldersIdResponse;
import org.openapis.openapi.models.operations.GetAccountHoldersIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountHoldersIdRequest req = new GetAccountHoldersIdRequest("provident");            

            GetAccountHoldersIdResponse res = sdk.accountHolders.getAccountHoldersId(req, new GetAccountHoldersIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountHoldersIdBalanceAccounts

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountHoldersIdBalanceAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountHoldersIdBalanceAccountsResponse;
import org.openapis.openapi.models.operations.GetAccountHoldersIdBalanceAccountsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountHoldersIdBalanceAccountsRequest req = new GetAccountHoldersIdBalanceAccountsRequest("distinctio") {{
                limit = 844266;
                offset = 602763;
            }};            

            GetAccountHoldersIdBalanceAccountsResponse res = sdk.accountHolders.getAccountHoldersIdBalanceAccounts(req, new GetAccountHoldersIdBalanceAccountsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedBalanceAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAccountHoldersId

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAccountHoldersIdRequest;
import org.openapis.openapi.models.operations.PatchAccountHoldersIdResponse;
import org.openapis.openapi.models.operations.PatchAccountHoldersIdSecurity;
import org.openapis.openapi.models.shared.AccountHolderCapabilityInput;
import org.openapis.openapi.models.shared.AccountHolderCapabilityRequestedLevelEnum;
import org.openapis.openapi.models.shared.AccountHolderInput;
import org.openapis.openapi.models.shared.AccountHolderStatusEnum;
import org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput;
import org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityRequestedLevelEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ContactDetails;
import org.openapis.openapi.models.shared.JSONObject;
import org.openapis.openapi.models.shared.JSONPath;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.PhoneTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAccountHoldersIdRequest req = new PatchAccountHoldersIdRequest("nulla") {{
                accountHolderInput = new AccountHolderInput("corrupti") {{
                    balancePlatform = "illum";
                    capabilities = new java.util.HashMap<String, org.openapis.openapi.models.shared.AccountHolderCapabilityInput>() {{
                        put("error", new AccountHolderCapabilityInput() {{
                            allowedSettings = new JSONObject() {{
                                paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("iure"),
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("ipsa"),
                                            add("delectus"),
                                            add("tempora"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("minus"),
                                            add("placeat"),
                                        }};
                                    }}),
                                }};
                                rootPath = new JSONPath() {{
                                    content = new String[]{{
                                        add("iusto"),
                                        add("excepturi"),
                                        add("nisi"),
                                    }};
                                }};
                            }};
                            enabled = false;
                            requested = false;
                            requestedLevel = AccountHolderCapabilityRequestedLevelEnum.NOT_APPLICABLE;
                            requestedSettings = new JSONObject() {{
                                paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("ipsam"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("sapiente"),
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                        }};
                                    }}),
                                }};
                                rootPath = new JSONPath() {{
                                    content = new String[]{{
                                        add("maiores"),
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                    }};
                                }};
                            }};
                            transferInstruments = new org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput[]{{
                                add(new AccountSupportingEntityCapabilityInput() {{
                                    enabled = false;
                                    requested = false;
                                    requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.MEDIUM;
                                }}),
                                add(new AccountSupportingEntityCapabilityInput() {{
                                    enabled = false;
                                    requested = false;
                                    requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.NOT_APPLICABLE;
                                }}),
                            }};
                        }});
                        put("dolorum", new AccountHolderCapabilityInput() {{
                            allowedSettings = new JSONObject() {{
                                paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("officia"),
                                            add("occaecati"),
                                            add("fugit"),
                                        }};
                                    }}),
                                }};
                                rootPath = new JSONPath() {{
                                    content = new String[]{{
                                        add("hic"),
                                        add("optio"),
                                        add("totam"),
                                    }};
                                }};
                            }};
                            enabled = false;
                            requested = false;
                            requestedLevel = AccountHolderCapabilityRequestedLevelEnum.HIGH;
                            requestedSettings = new JSONObject() {{
                                paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("modi"),
                                            add("qui"),
                                        }};
                                    }}),
                                    add(new JSONPath() {{
                                        content = new String[]{{
                                            add("cum"),
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                    }}),
                                }};
                                rootPath = new JSONPath() {{
                                    content = new String[]{{
                                        add("perferendis"),
                                    }};
                                }};
                            }};
                            transferInstruments = new org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput[]{{
                                add(new AccountSupportingEntityCapabilityInput() {{
                                    enabled = false;
                                    requested = false;
                                    requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.MEDIUM;
                                }}),
                                add(new AccountSupportingEntityCapabilityInput() {{
                                    enabled = false;
                                    requested = false;
                                    requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.HIGH;
                                }}),
                            }};
                        }});
                    }};
                    contactDetails = new ContactDetails(                new Address("iste", "dolor", "natus", "laboriosam", "hic") {{
                                        stateOrProvince = "saepe";
                                    }};, "fuga",                 new Phone("in", PhoneTypeEnum.LANDLINE);) {{
                        webAddress = "iste";
                    }};;
                    description = "iure";
                    primaryBalanceAccount = "saepe";
                    reference = "quidem";
                    status = AccountHolderStatusEnum.ACTIVE;
                    timeZone = "ipsa";
                }};;
            }};            

            PatchAccountHoldersIdResponse res = sdk.accountHolders.patchAccountHoldersId(req, new PatchAccountHoldersIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountHolders

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountHoldersResponse;
import org.openapis.openapi.models.operations.PostAccountHoldersSecurity;
import org.openapis.openapi.models.shared.AccountHolderCapabilityInput;
import org.openapis.openapi.models.shared.AccountHolderCapabilityRequestedLevelEnum;
import org.openapis.openapi.models.shared.AccountHolderInfoInput;
import org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput;
import org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityRequestedLevelEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ContactDetails;
import org.openapis.openapi.models.shared.JSONObject;
import org.openapis.openapi.models.shared.JSONPath;
import org.openapis.openapi.models.shared.Phone;
import org.openapis.openapi.models.shared.PhoneTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccountHolderInfoInput req = new AccountHolderInfoInput("reiciendis") {{
                balancePlatform = "est";
                capabilities = new java.util.HashMap<String, org.openapis.openapi.models.shared.AccountHolderCapabilityInput>() {{
                    put("laborum", new AccountHolderCapabilityInput() {{
                        allowedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("corporis"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("nobis"),
                                }};
                            }};
                        }};
                        enabled = false;
                        requested = false;
                        requestedLevel = AccountHolderCapabilityRequestedLevelEnum.LOW;
                        requestedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("doloribus"),
                                        add("sapiente"),
                                        add("architecto"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("dolorem"),
                                    add("culpa"),
                                    add("consequuntur"),
                                }};
                            }};
                        }};
                        transferInstruments = new org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput[]{{
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.MEDIUM;
                            }}),
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.MEDIUM;
                            }}),
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.LOW;
                            }}),
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.LOW;
                            }}),
                        }};
                    }});
                    put("quam", new AccountHolderCapabilityInput() {{
                        allowedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("error"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("quis"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("laborum"),
                                }};
                            }};
                        }};
                        enabled = false;
                        requested = false;
                        requestedLevel = AccountHolderCapabilityRequestedLevelEnum.MEDIUM;
                        requestedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("quo"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("tenetur"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                            }};
                        }};
                        transferInstruments = new org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput[]{{
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.HIGH;
                            }}),
                        }};
                    }});
                    put("error", new AccountHolderCapabilityInput() {{
                        allowedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("quasi"),
                                        add("reiciendis"),
                                        add("voluptatibus"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("nihil"),
                                        add("praesentium"),
                                        add("voluptatibus"),
                                        add("ipsa"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("voluptate"),
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("reprehenderit"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                            }};
                        }};
                        enabled = false;
                        requested = false;
                        requestedLevel = AccountHolderCapabilityRequestedLevelEnum.LOW;
                        requestedSettings = new JSONObject() {{
                            paths = new org.openapis.openapi.models.shared.JSONPath[]{{
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("dicta"),
                                        add("harum"),
                                    }};
                                }}),
                                add(new JSONPath() {{
                                    content = new String[]{{
                                        add("accusamus"),
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                            rootPath = new JSONPath() {{
                                content = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                            }};
                        }};
                        transferInstruments = new org.openapis.openapi.models.shared.AccountSupportingEntityCapabilityInput[]{{
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.NOT_APPLICABLE;
                            }}),
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.LOW;
                            }}),
                            add(new AccountSupportingEntityCapabilityInput() {{
                                enabled = false;
                                requested = false;
                                requestedLevel = AccountSupportingEntityCapabilityRequestedLevelEnum.MEDIUM;
                            }}),
                        }};
                    }});
                }};
                contactDetails = new ContactDetails(                new Address("rem", "voluptates", "quasi", "repudiandae", "sint") {{
                                    stateOrProvince = "veritatis";
                                }};, "itaque",                 new Phone("incidunt", PhoneTypeEnum.LANDLINE);) {{
                    webAddress = "consequatur";
                }};;
                description = "est";
                reference = "quibusdam";
                timeZone = "explicabo";
            }};            

            PostAccountHoldersResponse res = sdk.accountHolders.postAccountHolders(req, new PostAccountHoldersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
