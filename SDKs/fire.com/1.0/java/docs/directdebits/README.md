# directDebits

## Overview

The fire.com api allows businesses to automate direct debit payment actions on their fire.com business accounts.

You can retrieve details of your direct debit payments, direct debit mandates and also take actions on both your direct debit payments and mandates.


### Available Operations

* [activateMandate](#activatemandate) - Activate a direct debit mandate
* [cancelMandateByUuid](#cancelmandatebyuuid) - Cancel a direct debit mandate
* [getDirectDebitByUuid](#getdirectdebitbyuuid) - Get the details of a direct debit
* [getDirectDebitMandates](#getdirectdebitmandates) - List all direct debit mandates
* [getDirectDebitsForMandateUuid](#getdirectdebitsformandateuuid) - Get all DD payments associated with a direct debit mandate
* [getMandate](#getmandate) - Get direct debit mandate details
* [rejectDirectDebit](#rejectdirectdebit) - Reject a direct debit payment
* [updateMandateAlias](#updatemandatealias) - Update a direct debit mandate alias

## activateMandate

This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateMandateRequest;
import org.openapis.openapi.models.operations.ActivateMandateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            ActivateMandateRequest req = new ActivateMandateRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            ActivateMandateResponse res = sdk.directDebits.activateMandate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelMandateByUuid

This endpoint allows you to cancel a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelMandateByUuidRequest;
import org.openapis.openapi.models.operations.CancelMandateByUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CancelMandateByUuidRequest req = new CancelMandateByUuidRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            CancelMandateByUuidResponse res = sdk.directDebits.cancelMandateByUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDirectDebitByUuid

Retrieve all details of a single direct debit collection/payment, whether successful or not.
The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectDebitByUuidRequest;
import org.openapis.openapi.models.operations.GetDirectDebitByUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetDirectDebitByUuidRequest req = new GetDirectDebitByUuidRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            GetDirectDebitByUuidResponse res = sdk.directDebits.getDirectDebitByUuid(req);

            if (res.directDebit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDirectDebitMandates

The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectDebitMandatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetDirectDebitMandatesResponse res = sdk.directDebits.getDirectDebitMandates();

            if (res.mandates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDirectDebitsForMandateUuid

Retrieve all direct debit payments associated with a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectDebitsForMandateUuidRequest;
import org.openapis.openapi.models.operations.GetDirectDebitsForMandateUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetDirectDebitsForMandateUuidRequest req = new GetDirectDebitsForMandateUuidRequest("perferendis");            

            GetDirectDebitsForMandateUuidResponse res = sdk.directDebits.getDirectDebitsForMandateUuid(req);

            if (res.directDebits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMandate

Retrieve all details for a direct debit mandate.
The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMandateRequest;
import org.openapis.openapi.models.operations.GetMandateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetMandateRequest req = new GetMandateRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            GetMandateResponse res = sdk.directDebits.getMandate(req);

            if (res.mandate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectDirectDebit

This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectDirectDebitRequest;
import org.openapis.openapi.models.operations.RejectDirectDebitResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RejectDirectDebitRequest req = new RejectDirectDebitRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            RejectDirectDebitResponse res = sdk.directDebits.rejectDirectDebit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMandateAlias

Update Direct Debit Mandate Alias
The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMandateAliasRequest;
import org.openapis.openapi.models.operations.UpdateMandateAliasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            UpdateMandateAliasRequest req = new UpdateMandateAliasRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            UpdateMandateAliasResponse res = sdk.directDebits.updateMandateAlias(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
