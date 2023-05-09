# SDK

## Overview

Operations for Amazon Web Services Account Management

Amazon Web Services documentation
<https://docs.aws.amazon.com/account/>
### Available Operations

* [deleteAlternateContact](#deletealternatecontact) - <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [disableRegion](#disableregion) - Disables (opts-out) a particular Region for an account.
* [enableRegion](#enableregion) - Enables (opts-in) a particular Region for an account.
* [getAlternateContact](#getalternatecontact) - <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [getContactInformation](#getcontactinformation) - <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
* [getRegionOptStatus](#getregionoptstatus) - Retrieves the opt-in status of a particular Region.
* [listRegions](#listregions) - Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter. 
* [putAlternateContact](#putalternatecontact) - <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [putContactInformation](#putcontactinformation) - <p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

## deleteAlternateContact

<p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequest;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBody;
import org.openapis.openapi.models.operations.DeleteAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.DeleteAlternateContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAlternateContactRequest req = new DeleteAlternateContactRequest(                new DeleteAlternateContactRequestBody(DeleteAlternateContactRequestBodyAlternateContactTypeEnum.OPERATIONS) {{
                                accountId = "iure";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteAlternateContactResponse res = sdk.sdk.deleteAlternateContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableRegion

Disables (opts-out) a particular Region for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableRegionRequest;
import org.openapis.openapi.models.operations.DisableRegionRequestBody;
import org.openapis.openapi.models.operations.DisableRegionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableRegionRequest req = new DisableRegionRequest(                new DisableRegionRequestBody("placeat") {{
                                accountId = "voluptatum";
                            }};) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            DisableRegionResponse res = sdk.sdk.disableRegion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableRegion

Enables (opts-in) a particular Region for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableRegionRequest;
import org.openapis.openapi.models.operations.EnableRegionRequestBody;
import org.openapis.openapi.models.operations.EnableRegionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableRegionRequest req = new EnableRegionRequest(                new EnableRegionRequestBody("deserunt") {{
                                accountId = "perferendis";
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            EnableRegionResponse res = sdk.sdk.enableRegion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAlternateContact

<p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAlternateContactRequest;
import org.openapis.openapi.models.operations.GetAlternateContactRequestBody;
import org.openapis.openapi.models.operations.GetAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.GetAlternateContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAlternateContactRequest req = new GetAlternateContactRequest(                new GetAlternateContactRequestBody(GetAlternateContactRequestBodyAlternateContactTypeEnum.OPERATIONS) {{
                                accountId = "quod";
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            GetAlternateContactResponse res = sdk.sdk.getAlternateContact(req);

            if (res.getAlternateContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactInformation

<p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactInformationRequest;
import org.openapis.openapi.models.operations.GetContactInformationRequestBody;
import org.openapis.openapi.models.operations.GetContactInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactInformationRequest req = new GetContactInformationRequest(                new GetContactInformationRequestBody() {{
                                accountId = "occaecati";
                            }};) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            GetContactInformationResponse res = sdk.sdk.getContactInformation(req);

            if (res.getContactInformationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegionOptStatus

Retrieves the opt-in status of a particular Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegionOptStatusRequest;
import org.openapis.openapi.models.operations.GetRegionOptStatusRequestBody;
import org.openapis.openapi.models.operations.GetRegionOptStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRegionOptStatusRequest req = new GetRegionOptStatusRequest(                new GetRegionOptStatusRequestBody("modi") {{
                                accountId = "qui";
                            }};) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetRegionOptStatusResponse res = sdk.sdk.getRegionOptStatus(req);

            if (res.getRegionOptStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRegions

Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRegionsRequest;
import org.openapis.openapi.models.operations.ListRegionsRequestBody;
import org.openapis.openapi.models.operations.ListRegionsResponse;
import org.openapis.openapi.models.shared.RegionOptStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRegionsRequest req = new ListRegionsRequest(                new ListRegionsRequestBody() {{
                                accountId = "natus";
                                maxResults = 149675L;
                                nextToken = "iste";
                                regionOptStatusContains = new org.openapis.openapi.models.shared.RegionOptStatusEnum[]{{
                                    add(RegionOptStatusEnum.DISABLED),
                                }};
                            }};) {{
                maxResults = "laboriosam";
                nextToken = "hic";
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            ListRegionsResponse res = sdk.sdk.listRegions(req);

            if (res.listRegionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAlternateContact

<p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAlternateContactRequest;
import org.openapis.openapi.models.operations.PutAlternateContactRequestBody;
import org.openapis.openapi.models.operations.PutAlternateContactRequestBodyAlternateContactTypeEnum;
import org.openapis.openapi.models.operations.PutAlternateContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAlternateContactRequest req = new PutAlternateContactRequest(                new PutAlternateContactRequestBody(PutAlternateContactRequestBodyAlternateContactTypeEnum.BILLING, "ipsa", "reiciendis", "est", "mollitia") {{
                                accountId = "laborum";
                            }};) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            PutAlternateContactResponse res = sdk.sdk.putAlternateContact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putContactInformation

<p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutContactInformationRequest;
import org.openapis.openapi.models.operations.PutContactInformationRequestBody;
import org.openapis.openapi.models.operations.PutContactInformationRequestBodyContactInformation;
import org.openapis.openapi.models.operations.PutContactInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutContactInformationRequest req = new PutContactInformationRequest(                new PutContactInformationRequestBody(                new PutContactInformationRequestBodyContactInformation() {{
                                                addressLine1 = "minima";
                                                addressLine2 = "excepturi";
                                                addressLine3 = "accusantium";
                                                city = "iure";
                                                companyName = "culpa";
                                                countryCode = "doloribus";
                                                districtOrCounty = "sapiente";
                                                fullName = "architecto";
                                                phoneNumber = "mollitia";
                                                postalCode = "dolorem";
                                                stateOrRegion = "culpa";
                                                websiteUrl = "consequuntur";
                                            }};) {{
                                accountId = "repellat";
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "numquam";
                xAmzDate = "commodi";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "velit";
            }};            

            PutContactInformationResponse res = sdk.sdk.putContactInformation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
