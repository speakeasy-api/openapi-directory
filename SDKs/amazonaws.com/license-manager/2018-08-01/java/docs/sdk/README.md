# SDK

## Overview

License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager/>
### Available Operations

* [acceptGrant](#acceptgrant) - Accepts the specified grant.
* [checkInLicense](#checkinlicense) - Checks in the specified license. Check in a license when it is no longer in use.
* [checkoutBorrowLicense](#checkoutborrowlicense) - Checks out the specified license for offline use.
* [checkoutLicense](#checkoutlicense) - <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
* [createGrant](#creategrant) - Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createGrantVersion](#creategrantversion) - Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createLicense](#createlicense) - Creates a license.
* [createLicenseConfiguration](#createlicenseconfiguration) - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* [createLicenseConversionTaskForResource](#createlicenseconversiontaskforresource) - Creates a new license conversion task.
* [createLicenseManagerReportGenerator](#createlicensemanagerreportgenerator) - Creates a report generator.
* [createLicenseVersion](#createlicenseversion) - Creates a new version of the specified license.
* [createToken](#createtoken) - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* [deleteGrant](#deletegrant) - Deletes the specified grant.
* [deleteLicense](#deletelicense) - Deletes the specified license.
* [deleteLicenseConfiguration](#deletelicenseconfiguration) - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* [deleteLicenseManagerReportGenerator](#deletelicensemanagerreportgenerator) - <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
* [deleteToken](#deletetoken) - Deletes the specified token. Must be called in the license home Region.
* [extendLicenseConsumption](#extendlicenseconsumption) - Extends the expiration date for license consumption.
* [getAccessToken](#getaccesstoken) - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* [getGrant](#getgrant) - Gets detailed information about the specified grant.
* [getLicense](#getlicense) - Gets detailed information about the specified license.
* [getLicenseConfiguration](#getlicenseconfiguration) - Gets detailed information about the specified license configuration.
* [getLicenseConversionTask](#getlicenseconversiontask) - Gets information about the specified license type conversion task.
* [getLicenseManagerReportGenerator](#getlicensemanagerreportgenerator) - Gets information about the specified report generator.
* [getLicenseUsage](#getlicenseusage) - Gets detailed information about the usage of the specified license.
* [getServiceSettings](#getservicesettings) - Gets the License Manager settings for the current Region.
* [listAssociationsForLicenseConfiguration](#listassociationsforlicenseconfiguration) - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* [listDistributedGrants](#listdistributedgrants) - Lists the grants distributed for the specified license.
* [listFailuresForLicenseConfigurationOperations](#listfailuresforlicenseconfigurationoperations) - Lists the license configuration operations that failed.
* [listLicenseConfigurations](#listlicenseconfigurations) - Lists the license configurations for your account.
* [listLicenseConversionTasks](#listlicenseconversiontasks) - Lists the license type conversion tasks for your account.
* [listLicenseManagerReportGenerators](#listlicensemanagerreportgenerators) - Lists the report generators for your account.
* [listLicenseSpecificationsForResource](#listlicensespecificationsforresource) - Describes the license configurations for the specified resource.
* [listLicenseVersions](#listlicenseversions) - Lists all versions of the specified license.
* [listLicenses](#listlicenses) - Lists the licenses for your account.
* [listReceivedGrants](#listreceivedgrants) - Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.
* [listReceivedGrantsForOrganization](#listreceivedgrantsfororganization) - Lists the grants received for all accounts in the organization.
* [listReceivedLicenses](#listreceivedlicenses) - Lists received licenses.
* [listReceivedLicensesForOrganization](#listreceivedlicensesfororganization) - Lists the licenses received for all accounts in the organization.
* [listResourceInventory](#listresourceinventory) - Lists resources managed using Systems Manager inventory.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified license configuration.
* [listTokens](#listtokens) - Lists your tokens.
* [listUsageForLicenseConfiguration](#listusageforlicenseconfiguration) - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* [rejectGrant](#rejectgrant) - Rejects the specified grant.
* [tagResource](#tagresource) - Adds the specified tags to the specified license configuration.
* [untagResource](#untagresource) - Removes the specified tags from the specified license configuration.
* [updateLicenseConfiguration](#updatelicenseconfiguration) - Modifies the attributes of an existing license configuration.
* [updateLicenseManagerReportGenerator](#updatelicensemanagerreportgenerator) - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
* [updateLicenseSpecificationsForResource](#updatelicensespecificationsforresource) - <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* [updateServiceSettings](#updateservicesettings) - Updates License Manager settings for the current Region.

## acceptGrant

Accepts the specified grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptGrantRequest;
import org.openapis.openapi.models.operations.AcceptGrantResponse;
import org.openapis.openapi.models.operations.AcceptGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptGrantRequest req = new AcceptGrantRequest(                new AcceptGrantRequest("deserunt");, AcceptGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_ACCEPT_GRANT) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AcceptGrantResponse res = sdk.sdk.acceptGrant(req);

            if (res.acceptGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkInLicense

Checks in the specified license. Check in a license when it is no longer in use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckInLicenseRequest;
import org.openapis.openapi.models.operations.CheckInLicenseResponse;
import org.openapis.openapi.models.operations.CheckInLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.CheckInLicenseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckInLicenseRequest req = new CheckInLicenseRequest(                new CheckInLicenseRequest("molestiae") {{
                                beneficiary = "minus";
                            }};, CheckInLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_CHECK_IN_LICENSE) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            CheckInLicenseResponse res = sdk.sdk.checkInLicense(req);

            if (res.checkInLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkoutBorrowLicense

Checks out the specified license for offline use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckoutBorrowLicenseRequest;
import org.openapis.openapi.models.operations.CheckoutBorrowLicenseResponse;
import org.openapis.openapi.models.operations.CheckoutBorrowLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.CheckoutBorrowLicenseRequest;
import org.openapis.openapi.models.shared.DigitalSignatureMethodEnum;
import org.openapis.openapi.models.shared.EntitlementData;
import org.openapis.openapi.models.shared.EntitlementDataUnitEnum;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckoutBorrowLicenseRequest req = new CheckoutBorrowLicenseRequest(                new CheckoutBorrowLicenseRequest("quis", DigitalSignatureMethodEnum.JWT_PS384,                 new org.openapis.openapi.models.shared.EntitlementData[]{{
                                                add(new EntitlementData("at", EntitlementDataUnitEnum.MEGABITS_SECOND) {{
                                                    name = "Christopher Hills";
                                                    unit = EntitlementDataUnitEnum.BITS_SECOND;
                                                    value = "odit";
                                                }}),
                                            }}, "maiores") {{
                                checkoutMetadata = new org.openapis.openapi.models.shared.Metadata[]{{
                                    add(new Metadata() {{
                                        name = "Forrest Koepp";
                                        value = "dolorum";
                                    }}),
                                    add(new Metadata() {{
                                        name = "Antoinette Nikolaus";
                                        value = "deleniti";
                                    }}),
                                }};
                                nodeId = "hic";
                            }};, CheckoutBorrowLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_CHECKOUT_BORROW_LICENSE) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CheckoutBorrowLicenseResponse res = sdk.sdk.checkoutBorrowLicense(req);

            if (res.checkoutBorrowLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkoutLicense

<p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckoutLicenseRequest;
import org.openapis.openapi.models.operations.CheckoutLicenseResponse;
import org.openapis.openapi.models.operations.CheckoutLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.CheckoutLicenseRequest;
import org.openapis.openapi.models.shared.CheckoutTypeEnum;
import org.openapis.openapi.models.shared.EntitlementData;
import org.openapis.openapi.models.shared.EntitlementDataUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckoutLicenseRequest req = new CheckoutLicenseRequest(                new CheckoutLicenseRequest(CheckoutTypeEnum.PERPETUAL, "esse",                 new org.openapis.openapi.models.shared.EntitlementData[]{{
                                                add(new EntitlementData("dolor", EntitlementDataUnitEnum.BYTES_SECOND) {{
                                                    name = "Brandon Auer";
                                                    unit = EntitlementDataUnitEnum.MILLISECONDS;
                                                    value = "iste";
                                                }}),
                                            }}, "laboriosam", "hic") {{
                                beneficiary = "saepe";
                                nodeId = "fuga";
                            }};, CheckoutLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_CHECKOUT_LICENSE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "iste";
                xAmzDate = "iure";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "architecto";
            }};            

            CheckoutLicenseResponse res = sdk.sdk.checkoutLicense(req);

            if (res.checkoutLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGrant

Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGrantRequest;
import org.openapis.openapi.models.operations.CreateGrantResponse;
import org.openapis.openapi.models.operations.CreateGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllowedOperationEnum;
import org.openapis.openapi.models.shared.CreateGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGrantRequest req = new CreateGrantRequest(                new CreateGrantRequest(                new org.openapis.openapi.models.shared.AllowedOperationEnum[]{{
                                                add(AllowedOperationEnum.EXTEND_CONSUMPTION_LICENSE),
                                                add(AllowedOperationEnum.EXTEND_CONSUMPTION_LICENSE),
                                                add(AllowedOperationEnum.EXTEND_CONSUMPTION_LICENSE),
                                                add(AllowedOperationEnum.CHECKOUT_LICENSE),
                                            }}, "dolorem", "corporis", "explicabo", "nobis",                 new String[]{{
                                                add("omnis"),
                                                add("nemo"),
                                            }});, CreateGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_GRANT) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            CreateGrantResponse res = sdk.sdk.createGrant(req);

            if (res.createGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGrantVersion

Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGrantVersionRequest;
import org.openapis.openapi.models.operations.CreateGrantVersionResponse;
import org.openapis.openapi.models.operations.CreateGrantVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActivationOverrideBehaviorEnum;
import org.openapis.openapi.models.shared.AllowedOperationEnum;
import org.openapis.openapi.models.shared.CreateGrantVersionRequest;
import org.openapis.openapi.models.shared.GrantStatusEnum;
import org.openapis.openapi.models.shared.Options;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGrantVersionRequest req = new CreateGrantVersionRequest(                new CreateGrantVersionRequest("mollitia", "dolorem") {{
                                allowedOperations = new org.openapis.openapi.models.shared.AllowedOperationEnum[]{{
                                    add(AllowedOperationEnum.CHECKOUT_LICENSE),
                                    add(AllowedOperationEnum.CREATE_TOKEN),
                                    add(AllowedOperationEnum.EXTEND_CONSUMPTION_LICENSE),
                                }};
                                grantName = "occaecati";
                                options = new Options() {{
                                    activationOverrideBehavior = ActivationOverrideBehaviorEnum.DISTRIBUTED_GRANTS_ONLY;
                                }};;
                                sourceVersion = "commodi";
                                status = GrantStatusEnum.FAILED_WORKFLOW;
                                statusReason = "molestiae";
                            }};, CreateGrantVersionXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_GRANT_VERSION) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            CreateGrantVersionResponse res = sdk.sdk.createGrantVersion(req);

            if (res.createGrantVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLicense

Creates a license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseRequest;
import org.openapis.openapi.models.operations.CreateLicenseResponse;
import org.openapis.openapi.models.operations.CreateLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.BorrowConfiguration;
import org.openapis.openapi.models.shared.ConsumptionConfiguration;
import org.openapis.openapi.models.shared.CreateLicenseRequest;
import org.openapis.openapi.models.shared.DatetimeRange;
import org.openapis.openapi.models.shared.Entitlement;
import org.openapis.openapi.models.shared.EntitlementUnitEnum;
import org.openapis.openapi.models.shared.Issuer;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.ProvisionalConfiguration;
import org.openapis.openapi.models.shared.RenewTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLicenseRequest req = new CreateLicenseRequest(                new CreateLicenseRequest("odit", "quo",                 new ConsumptionConfiguration() {{
                                                borrowConfiguration = new BorrowConfiguration(false, 196582L);;
                                                provisionalConfiguration = new ProvisionalConfiguration(949572L);;
                                                renewType = RenewTypeEnum.WEEKLY;
                                            }};,                 new org.openapis.openapi.models.shared.Entitlement[]{{
                                                add(new Entitlement("voluptatibus", EntitlementUnitEnum.MEGABITS_SECOND) {{
                                                    allowCheckIn = false;
                                                    maxCount = 820994L;
                                                    name = "Joyce Mueller";
                                                    overage = false;
                                                    unit = EntitlementUnitEnum.SECONDS;
                                                    value = "reiciendis";
                                                }}),
                                                add(new Entitlement("doloremque", EntitlementUnitEnum.KILOBITS) {{
                                                    allowCheckIn = false;
                                                    maxCount = 468651L;
                                                    name = "Jan Bednar";
                                                    overage = false;
                                                    unit = EntitlementUnitEnum.GIGABYTES_SECOND;
                                                    value = "perferendis";
                                                }}),
                                                add(new Entitlement("enim", EntitlementUnitEnum.MEGABITS_SECOND) {{
                                                    allowCheckIn = false;
                                                    maxCount = 282807L;
                                                    name = "Willie Hessel";
                                                    overage = false;
                                                    unit = EntitlementUnitEnum.MICROSECONDS;
                                                    value = "harum";
                                                }}),
                                            }}, "commodi",                 new Issuer("repudiandae") {{
                                                signKey = "quae";
                                            }};, "ipsum", "quidem", "molestias",                 new DatetimeRange("excepturi") {{
                                                end = "pariatur";
                                            }};) {{
                                licenseMetadata = new org.openapis.openapi.models.shared.Metadata[]{{
                                    add(new Metadata() {{
                                        name = "Dr. Jordan Von";
                                        value = "veritatis";
                                    }}),
                                    add(new Metadata() {{
                                        name = "Miss Randall Hamill";
                                        value = "explicabo";
                                    }}),
                                }};
                            }};, CreateLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_LICENSE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            CreateLicenseResponse res = sdk.sdk.createLicense(req);

            if (res.createLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLicenseConfiguration

<p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.CreateLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.CreateLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLicenseConfigurationRequest;
import org.openapis.openapi.models.shared.LicenseCountingTypeEnum;
import org.openapis.openapi.models.shared.ProductInformation;
import org.openapis.openapi.models.shared.ProductInformationFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLicenseConfigurationRequest req = new CreateLicenseConfigurationRequest(                new CreateLicenseConfigurationRequest(LicenseCountingTypeEnum.CORE, "perferendis") {{
                                description = "magni";
                                disassociateWhenNotFound = false;
                                licenseCount = 828940L;
                                licenseCountHardLimit = false;
                                licenseRules = new String[]{{
                                    add("alias"),
                                    add("fugit"),
                                }};
                                productInformationList = new org.openapis.openapi.models.shared.ProductInformation[]{{
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("accusamus", "non") {{
                                                            productInformationFilterComparator = "cumque";
                                                            productInformationFilterName = "facere";
                                                            productInformationFilterValue = new String[]{{
                                                                add("aliquid"),
                                                                add("laborum"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("id", "blanditiis") {{
                                                            productInformationFilterComparator = "occaecati";
                                                            productInformationFilterName = "enim";
                                                            productInformationFilterValue = new String[]{{
                                                                add("delectus"),
                                                                add("quidem"),
                                                                add("provident"),
                                                                add("nam"),
                                                            }};
                                                        }}),
                                                    }}, "deleniti") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("non", "eligendi") {{
                                                productInformationFilterComparator = "tempora";
                                                productInformationFilterName = "facilis";
                                                productInformationFilterValue = new String[]{{
                                                    add("labore"),
                                                    add("delectus"),
                                                    add("eum"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("dolor", "debitis") {{
                                                productInformationFilterComparator = "sint";
                                                productInformationFilterName = "aliquid";
                                                productInformationFilterValue = new String[]{{
                                                    add("necessitatibus"),
                                                    add("sint"),
                                                    add("officia"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("maiores", "rerum") {{
                                                productInformationFilterComparator = "a";
                                                productInformationFilterName = "dolorum";
                                                productInformationFilterValue = new String[]{{
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "dicta";
                                    }}),
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("odit", "nemo") {{
                                                            productInformationFilterComparator = "mollitia";
                                                            productInformationFilterName = "ad";
                                                            productInformationFilterValue = new String[]{{
                                                                add("dolor"),
                                                                add("necessitatibus"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("facilis", "in") {{
                                                            productInformationFilterComparator = "quasi";
                                                            productInformationFilterName = "iure";
                                                            productInformationFilterValue = new String[]{{
                                                                add("debitis"),
                                                                add("eius"),
                                                                add("maxime"),
                                                                add("deleniti"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("quibusdam", "sed") {{
                                                            productInformationFilterComparator = "architecto";
                                                            productInformationFilterName = "architecto";
                                                            productInformationFilterValue = new String[]{{
                                                                add("ullam"),
                                                                add("expedita"),
                                                                add("nihil"),
                                                                add("repellat"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("praesentium", "natus") {{
                                                            productInformationFilterComparator = "saepe";
                                                            productInformationFilterName = "pariatur";
                                                            productInformationFilterValue = new String[]{{
                                                                add("consequuntur"),
                                                            }};
                                                        }}),
                                                    }}, "magni") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("omnis", "molestiae") {{
                                                productInformationFilterComparator = "amet";
                                                productInformationFilterName = "deserunt";
                                                productInformationFilterValue = new String[]{{
                                                    add("vel"),
                                                    add("natus"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("labore", "labore") {{
                                                productInformationFilterComparator = "perferendis";
                                                productInformationFilterName = "nihil";
                                                productInformationFilterValue = new String[]{{
                                                    add("distinctio"),
                                                    add("id"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("architecto", "magnam") {{
                                                productInformationFilterComparator = "suscipit";
                                                productInformationFilterName = "natus";
                                                productInformationFilterValue = new String[]{{
                                                    add("eum"),
                                                    add("vero"),
                                                    add("aspernatur"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("sint", "accusantium") {{
                                                productInformationFilterComparator = "et";
                                                productInformationFilterName = "excepturi";
                                                productInformationFilterValue = new String[]{{
                                                    add("provident"),
                                                    add("quos"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "mollitia";
                                    }}),
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("eaque", "pariatur") {{
                                                            productInformationFilterComparator = "quidem";
                                                            productInformationFilterName = "ipsam";
                                                            productInformationFilterValue = new String[]{{
                                                                add("autem"),
                                                                add("nam"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("amet", "aut") {{
                                                            productInformationFilterComparator = "nemo";
                                                            productInformationFilterName = "voluptatibus";
                                                            productInformationFilterValue = new String[]{{
                                                                add("fugiat"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("totam", "dignissimos") {{
                                                            productInformationFilterComparator = "cumque";
                                                            productInformationFilterName = "corporis";
                                                            productInformationFilterValue = new String[]{{
                                                                add("libero"),
                                                                add("nobis"),
                                                                add("dolores"),
                                                                add("quis"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("perferendis", "dolores") {{
                                                            productInformationFilterComparator = "eaque";
                                                            productInformationFilterName = "quis";
                                                            productInformationFilterValue = new String[]{{
                                                                add("eos"),
                                                            }};
                                                        }}),
                                                    }}, "minus") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("ea", "accusantium") {{
                                                productInformationFilterComparator = "quo";
                                                productInformationFilterName = "illum";
                                                productInformationFilterValue = new String[]{{
                                                    add("maxime"),
                                                    add("ea"),
                                                    add("excepturi"),
                                                    add("odit"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "ab";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "dolor";
                                        value = "vero";
                                    }}),
                                    add(new Tag() {{
                                        key = "nostrum";
                                        value = "hic";
                                    }}),
                                }};
                            }};, CreateLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateLicenseConfigurationResponse res = sdk.sdk.createLicenseConfiguration(req);

            if (res.createLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLicenseConversionTaskForResource

Creates a new license conversion task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseConversionTaskForResourceRequest;
import org.openapis.openapi.models.operations.CreateLicenseConversionTaskForResourceResponse;
import org.openapis.openapi.models.operations.CreateLicenseConversionTaskForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLicenseConversionTaskForResourceRequest;
import org.openapis.openapi.models.shared.LicenseConversionContext;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLicenseConversionTaskForResourceRequest req = new CreateLicenseConversionTaskForResourceRequest(                new CreateLicenseConversionTaskForResourceRequest(                new LicenseConversionContext() {{
                                                usageOperation = "error";
                                            }};, "eaque",                 new LicenseConversionContext() {{
                                                usageOperation = "occaecati";
                                            }};);, CreateLicenseConversionTaskForResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_LICENSE_CONVERSION_TASK_FOR_RESOURCE) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateLicenseConversionTaskForResourceResponse res = sdk.sdk.createLicenseConversionTaskForResource(req);

            if (res.createLicenseConversionTaskForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLicenseManagerReportGenerator

Creates a report generator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.operations.CreateLicenseManagerReportGeneratorResponse;
import org.openapis.openapi.models.operations.CreateLicenseManagerReportGeneratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.shared.ReportContext;
import org.openapis.openapi.models.shared.ReportFrequency;
import org.openapis.openapi.models.shared.ReportFrequencyTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLicenseManagerReportGeneratorRequest req = new CreateLicenseManagerReportGeneratorRequest(                new CreateLicenseManagerReportGeneratorRequest("pariatur",                 new ReportContext(                new String[]{{
                                                                add("nobis"),
                                                                add("libero"),
                                                                add("delectus"),
                                                            }});,                 new ReportFrequency() {{
                                                period = ReportFrequencyTypeEnum.DAY;
                                                value = 554242L;
                                            }};, "aliquid",                 new org.openapis.openapi.models.shared.ReportTypeEnum[]{{
                                                add(ReportTypeEnum.LICENSE_CONFIGURATION_SUMMARY_REPORT),
                                            }}) {{
                                description = "dolor";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "ipsum";
                                        value = "hic";
                                    }}),
                                }};
                            }};, CreateLicenseManagerReportGeneratorXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_LICENSE_MANAGER_REPORT_GENERATOR) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateLicenseManagerReportGeneratorResponse res = sdk.sdk.createLicenseManagerReportGenerator(req);

            if (res.createLicenseManagerReportGeneratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLicenseVersion

Creates a new version of the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseVersionRequest;
import org.openapis.openapi.models.operations.CreateLicenseVersionResponse;
import org.openapis.openapi.models.operations.CreateLicenseVersionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BorrowConfiguration;
import org.openapis.openapi.models.shared.ConsumptionConfiguration;
import org.openapis.openapi.models.shared.CreateLicenseVersionRequest;
import org.openapis.openapi.models.shared.DatetimeRange;
import org.openapis.openapi.models.shared.Entitlement;
import org.openapis.openapi.models.shared.EntitlementUnitEnum;
import org.openapis.openapi.models.shared.Issuer;
import org.openapis.openapi.models.shared.LicenseStatusEnum;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.ProvisionalConfiguration;
import org.openapis.openapi.models.shared.RenewTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLicenseVersionRequest req = new CreateLicenseVersionRequest(                new CreateLicenseVersionRequest("veritatis",                 new ConsumptionConfiguration() {{
                                                borrowConfiguration = new BorrowConfiguration(false, 58029L);;
                                                provisionalConfiguration = new ProvisionalConfiguration(56418L);;
                                                renewType = RenewTypeEnum.WEEKLY;
                                            }};,                 new org.openapis.openapi.models.shared.Entitlement[]{{
                                                add(new Entitlement("sit", EntitlementUnitEnum.MEGABITS_SECOND) {{
                                                    allowCheckIn = false;
                                                    maxCount = 311796L;
                                                    name = "Rickey Wolf";
                                                    overage = false;
                                                    unit = EntitlementUnitEnum.MILLISECONDS;
                                                    value = "atque";
                                                }}),
                                                add(new Entitlement("necessitatibus", EntitlementUnitEnum.GIGABYTES_SECOND) {{
                                                    allowCheckIn = false;
                                                    maxCount = 67249L;
                                                    name = "Omar Kris";
                                                    overage = false;
                                                    unit = EntitlementUnitEnum.TERABITS;
                                                    value = "omnis";
                                                }}),
                                            }}, "asperiores",                 new Issuer("nihil") {{
                                                signKey = "ipsum";
                                            }};, "voluptate", "id", "saepe", LicenseStatusEnum.PENDING_AVAILABLE,                 new DatetimeRange("aspernatur") {{
                                                end = "perferendis";
                                            }};) {{
                                licenseMetadata = new org.openapis.openapi.models.shared.Metadata[]{{
                                    add(new Metadata() {{
                                        name = "Tomas Hammes";
                                        value = "deserunt";
                                    }}),
                                }};
                                sourceVersion = "provident";
                            }};, CreateLicenseVersionXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_LICENSE_VERSION) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            CreateLicenseVersionResponse res = sdk.sdk.createLicenseVersion(req);

            if (res.createLicenseVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createToken

<p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.operations.CreateTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTokenRequest req = new CreateTokenRequest(                new CreateTokenRequest("vel", "quod") {{
                                expirationInDays = 885338L;
                                roleArns = new String[]{{
                                    add("dolorum"),
                                }};
                                tokenProperties = new String[]{{
                                    add("esse"),
                                    add("harum"),
                                    add("iusto"),
                                    add("ipsum"),
                                }};
                            }};, CreateTokenXAmzTargetEnum.AWS_LICENSE_MANAGER_CREATE_TOKEN) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            CreateTokenResponse res = sdk.sdk.createToken(req);

            if (res.createTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGrant

Deletes the specified grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGrantRequest;
import org.openapis.openapi.models.operations.DeleteGrantResponse;
import org.openapis.openapi.models.operations.DeleteGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGrantRequest req = new DeleteGrantRequest(                new DeleteGrantRequest("sapiente", "totam") {{
                                statusReason = "nihil";
                            }};, DeleteGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_DELETE_GRANT) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            DeleteGrantResponse res = sdk.sdk.deleteGrant(req);

            if (res.deleteGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLicense

Deletes the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseRequest;
import org.openapis.openapi.models.operations.DeleteLicenseResponse;
import org.openapis.openapi.models.operations.DeleteLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLicenseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLicenseRequest req = new DeleteLicenseRequest(                new DeleteLicenseRequest("quam", "ipsum");, DeleteLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_DELETE_LICENSE) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "qui";
                xAmzCredential = "cupiditate";
                xAmzDate = "maxime";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteLicenseResponse res = sdk.sdk.deleteLicense(req);

            if (res.deleteLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLicenseConfiguration

<p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLicenseConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLicenseConfigurationRequest req = new DeleteLicenseConfigurationRequest(                new DeleteLicenseConfigurationRequest("totam");, DeleteLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_DELETE_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            DeleteLicenseConfigurationResponse res = sdk.sdk.deleteLicenseConfiguration(req);

            if (res.deleteLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLicenseManagerReportGenerator

<p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.operations.DeleteLicenseManagerReportGeneratorResponse;
import org.openapis.openapi.models.operations.DeleteLicenseManagerReportGeneratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLicenseManagerReportGeneratorRequest req = new DeleteLicenseManagerReportGeneratorRequest(                new DeleteLicenseManagerReportGeneratorRequest("temporibus");, DeleteLicenseManagerReportGeneratorXAmzTargetEnum.AWS_LICENSE_MANAGER_DELETE_LICENSE_MANAGER_REPORT_GENERATOR) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "neque";
                xAmzCredential = "fugit";
                xAmzDate = "magni";
                xAmzSecurityToken = "odio";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "ullam";
            }};            

            DeleteLicenseManagerReportGeneratorResponse res = sdk.sdk.deleteLicenseManagerReportGenerator(req);

            if (res.deleteLicenseManagerReportGeneratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteToken

Deletes the specified token. Must be called in the license home Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTokenRequest;
import org.openapis.openapi.models.operations.DeleteTokenResponse;
import org.openapis.openapi.models.operations.DeleteTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTokenRequest req = new DeleteTokenRequest(                new DeleteTokenRequest("hic");, DeleteTokenXAmzTargetEnum.AWS_LICENSE_MANAGER_DELETE_TOKEN) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "soluta";
                xAmzDate = "nobis";
                xAmzSecurityToken = "et";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ipsum";
            }};            

            DeleteTokenResponse res = sdk.sdk.deleteToken(req);

            if (res.deleteTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## extendLicenseConsumption

Extends the expiration date for license consumption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtendLicenseConsumptionRequest;
import org.openapis.openapi.models.operations.ExtendLicenseConsumptionResponse;
import org.openapis.openapi.models.operations.ExtendLicenseConsumptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExtendLicenseConsumptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExtendLicenseConsumptionRequest req = new ExtendLicenseConsumptionRequest(                new ExtendLicenseConsumptionRequest("nobis") {{
                                dryRun = false;
                            }};, ExtendLicenseConsumptionXAmzTargetEnum.AWS_LICENSE_MANAGER_EXTEND_LICENSE_CONSUMPTION) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            ExtendLicenseConsumptionResponse res = sdk.sdk.extendLicenseConsumption(req);

            if (res.extendLicenseConsumptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccessToken

Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokenRequest;
import org.openapis.openapi.models.operations.GetAccessTokenResponse;
import org.openapis.openapi.models.operations.GetAccessTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAccessTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccessTokenRequest req = new GetAccessTokenRequest(                new GetAccessTokenRequest("adipisci") {{
                                tokenProperties = new String[]{{
                                    add("architecto"),
                                    add("quae"),
                                    add("aut"),
                                }};
                            }};, GetAccessTokenXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_ACCESS_TOKEN) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetAccessTokenResponse res = sdk.sdk.getAccessToken(req);

            if (res.getAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGrant

Gets detailed information about the specified grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGrantRequest;
import org.openapis.openapi.models.operations.GetGrantResponse;
import org.openapis.openapi.models.operations.GetGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGrantRequest req = new GetGrantRequest(                new GetGrantRequest("facilis") {{
                                version = "cupiditate";
                            }};, GetGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_GRANT) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            GetGrantResponse res = sdk.sdk.getGrant(req);

            if (res.getGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicense

Gets detailed information about the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseRequest;
import org.openapis.openapi.models.operations.GetLicenseResponse;
import org.openapis.openapi.models.operations.GetLicenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLicenseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLicenseRequest req = new GetLicenseRequest(                new GetLicenseRequest("omnis") {{
                                version = "quis";
                            }};, GetLicenseXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_LICENSE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GetLicenseResponse res = sdk.sdk.getLicense(req);

            if (res.getLicenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicenseConfiguration

Gets detailed information about the specified license configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.GetLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.GetLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLicenseConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLicenseConfigurationRequest req = new GetLicenseConfigurationRequest(                new GetLicenseConfigurationRequest("distinctio");, GetLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            GetLicenseConfigurationResponse res = sdk.sdk.getLicenseConfiguration(req);

            if (res.getLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicenseConversionTask

Gets information about the specified license type conversion task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseConversionTaskRequest;
import org.openapis.openapi.models.operations.GetLicenseConversionTaskResponse;
import org.openapis.openapi.models.operations.GetLicenseConversionTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLicenseConversionTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLicenseConversionTaskRequest req = new GetLicenseConversionTaskRequest(                new GetLicenseConversionTaskRequest("illum");, GetLicenseConversionTaskXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_LICENSE_CONVERSION_TASK) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
            }};            

            GetLicenseConversionTaskResponse res = sdk.sdk.getLicenseConversionTask(req);

            if (res.getLicenseConversionTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicenseManagerReportGenerator

Gets information about the specified report generator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.operations.GetLicenseManagerReportGeneratorResponse;
import org.openapis.openapi.models.operations.GetLicenseManagerReportGeneratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLicenseManagerReportGeneratorRequest req = new GetLicenseManagerReportGeneratorRequest(                new GetLicenseManagerReportGeneratorRequest("porro");, GetLicenseManagerReportGeneratorXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_LICENSE_MANAGER_REPORT_GENERATOR) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
            }};            

            GetLicenseManagerReportGeneratorResponse res = sdk.sdk.getLicenseManagerReportGenerator(req);

            if (res.getLicenseManagerReportGeneratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicenseUsage

Gets detailed information about the usage of the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseUsageRequest;
import org.openapis.openapi.models.operations.GetLicenseUsageResponse;
import org.openapis.openapi.models.operations.GetLicenseUsageXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLicenseUsageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLicenseUsageRequest req = new GetLicenseUsageRequest(                new GetLicenseUsageRequest("ipsam");, GetLicenseUsageXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_LICENSE_USAGE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "vel";
                xAmzDate = "possimus";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "ex";
            }};            

            GetLicenseUsageResponse res = sdk.sdk.getLicenseUsage(req);

            if (res.getLicenseUsageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceSettings

Gets the License Manager settings for the current Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceSettingsRequest;
import org.openapis.openapi.models.operations.GetServiceSettingsResponse;
import org.openapis.openapi.models.operations.GetServiceSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceSettingsRequest req = new GetServiceSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("dolor", "maiores");
                            }}, GetServiceSettingsXAmzTargetEnum.AWS_LICENSE_MANAGER_GET_SERVICE_SETTINGS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "nulla";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetServiceSettingsResponse res = sdk.sdk.getServiceSettings(req);

            if (res.getServiceSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssociationsForLicenseConfiguration

<p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssociationsForLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.ListAssociationsForLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.ListAssociationsForLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAssociationsForLicenseConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssociationsForLicenseConfigurationRequest req = new ListAssociationsForLicenseConfigurationRequest(                new ListAssociationsForLicenseConfigurationRequest("saepe") {{
                                maxResults = 411372L;
                                nextToken = "impedit";
                            }};, ListAssociationsForLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            ListAssociationsForLicenseConfigurationResponse res = sdk.sdk.listAssociationsForLicenseConfiguration(req);

            if (res.listAssociationsForLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDistributedGrants

Lists the grants distributed for the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDistributedGrantsRequest;
import org.openapis.openapi.models.operations.ListDistributedGrantsResponse;
import org.openapis.openapi.models.operations.ListDistributedGrantsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListDistributedGrantsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDistributedGrantsRequest req = new ListDistributedGrantsRequest(                new ListDistributedGrantsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Cathy Becker";
                                        values = new String[]{{
                                            add("aut"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Myron Haag";
                                        values = new String[]{{
                                            add("non"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Sonya Osinski";
                                        values = new String[]{{
                                            add("autem"),
                                            add("nobis"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Mack Stoltenberg";
                                        values = new String[]{{
                                            add("tempora"),
                                        }};
                                    }}),
                                }};
                                grantArns = new String[]{{
                                    add("explicabo"),
                                    add("provident"),
                                }};
                                maxResults = 55374L;
                                nextToken = "molestiae";
                            }};, ListDistributedGrantsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_DISTRIBUTED_GRANTS) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            ListDistributedGrantsResponse res = sdk.sdk.listDistributedGrants(req);

            if (res.listDistributedGrantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFailuresForLicenseConfigurationOperations

Lists the license configuration operations that failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFailuresForLicenseConfigurationOperationsRequest;
import org.openapis.openapi.models.operations.ListFailuresForLicenseConfigurationOperationsResponse;
import org.openapis.openapi.models.operations.ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFailuresForLicenseConfigurationOperationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFailuresForLicenseConfigurationOperationsRequest req = new ListFailuresForLicenseConfigurationOperationsRequest(                new ListFailuresForLicenseConfigurationOperationsRequest("quidem") {{
                                maxResults = 852635L;
                                nextToken = "ut";
                            }};, ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            ListFailuresForLicenseConfigurationOperationsResponse res = sdk.sdk.listFailuresForLicenseConfigurationOperations(req);

            if (res.listFailuresForLicenseConfigurationOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseConfigurations

Lists the license configurations for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseConfigurationsRequest;
import org.openapis.openapi.models.operations.ListLicenseConfigurationsResponse;
import org.openapis.openapi.models.operations.ListLicenseConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListLicenseConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicenseConfigurationsRequest req = new ListLicenseConfigurationsRequest(                new ListLicenseConfigurationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Luis Satterfield";
                                        values = new String[]{{
                                            add("eius"),
                                            add("eos"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Shelly Altenwerth";
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("sequi"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Miss Claude Walsh";
                                        values = new String[]{{
                                            add("inventore"),
                                            add("nihil"),
                                        }};
                                    }}),
                                }};
                                licenseConfigurationArns = new String[]{{
                                    add("accusamus"),
                                    add("aliquam"),
                                    add("odio"),
                                }};
                                maxResults = 577543L;
                                nextToken = "commodi";
                            }};, ListLicenseConfigurationsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSE_CONFIGURATIONS) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "deserunt";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "eum";
            }};            

            ListLicenseConfigurationsResponse res = sdk.sdk.listLicenseConfigurations(req);

            if (res.listLicenseConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseConversionTasks

Lists the license type conversion tasks for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseConversionTasksRequest;
import org.openapis.openapi.models.operations.ListLicenseConversionTasksResponse;
import org.openapis.openapi.models.operations.ListLicenseConversionTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListLicenseConversionTasksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicenseConversionTasksRequest req = new ListLicenseConversionTasksRequest(                new ListLicenseConversionTasksRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Cassandra Considine";
                                        values = new String[]{{
                                            add("atque"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Sue Corkery";
                                        values = new String[]{{
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Ms. Marion Little";
                                        values = new String[]{{
                                            add("veritatis"),
                                            add("esse"),
                                            add("quod"),
                                            add("nam"),
                                        }};
                                    }}),
                                }};
                                maxResults = 877131L;
                                nextToken = "aliquid";
                            }};, ListLicenseConversionTasksXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSE_CONVERSION_TASKS) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "vel";
                xAmzDate = "harum";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListLicenseConversionTasksResponse res = sdk.sdk.listLicenseConversionTasks(req);

            if (res.listLicenseConversionTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseManagerReportGenerators

Lists the report generators for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseManagerReportGeneratorsRequest;
import org.openapis.openapi.models.operations.ListLicenseManagerReportGeneratorsResponse;
import org.openapis.openapi.models.operations.ListLicenseManagerReportGeneratorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListLicenseManagerReportGeneratorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicenseManagerReportGeneratorsRequest req = new ListLicenseManagerReportGeneratorsRequest(                new ListLicenseManagerReportGeneratorsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Mark Nicolas";
                                        values = new String[]{{
                                            add("consequuntur"),
                                            add("consequatur"),
                                            add("minus"),
                                            add("quaerat"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Glenn Koch";
                                        values = new String[]{{
                                            add("nulla"),
                                            add("quas"),
                                            add("esse"),
                                            add("quasi"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Jeremiah Mayer";
                                        values = new String[]{{
                                            add("eveniet"),
                                        }};
                                    }}),
                                }};
                                maxResults = 992430L;
                                nextToken = "facere";
                            }};, ListLicenseManagerReportGeneratorsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSE_MANAGER_REPORT_GENERATORS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "quasi";
                xAmzDate = "similique";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListLicenseManagerReportGeneratorsResponse res = sdk.sdk.listLicenseManagerReportGenerators(req);

            if (res.listLicenseManagerReportGeneratorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseSpecificationsForResource

Describes the license configurations for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseSpecificationsForResourceRequest;
import org.openapis.openapi.models.operations.ListLicenseSpecificationsForResourceResponse;
import org.openapis.openapi.models.operations.ListLicenseSpecificationsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLicenseSpecificationsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicenseSpecificationsForResourceRequest req = new ListLicenseSpecificationsForResourceRequest(                new ListLicenseSpecificationsForResourceRequest("earum") {{
                                maxResults = 424032L;
                                nextToken = "in";
                            }};, ListLicenseSpecificationsForResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSE_SPECIFICATIONS_FOR_RESOURCE) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "libero";
                xAmzCredential = "illum";
                xAmzDate = "soluta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListLicenseSpecificationsForResourceResponse res = sdk.sdk.listLicenseSpecificationsForResource(req);

            if (res.listLicenseSpecificationsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseVersions

Lists all versions of the specified license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseVersionsRequest;
import org.openapis.openapi.models.operations.ListLicenseVersionsResponse;
import org.openapis.openapi.models.operations.ListLicenseVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLicenseVersionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicenseVersionsRequest req = new ListLicenseVersionsRequest(                new ListLicenseVersionsRequest("ullam") {{
                                maxResults = 443879L;
                                nextToken = "ullam";
                            }};, ListLicenseVersionsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSE_VERSIONS) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
            }};            

            ListLicenseVersionsResponse res = sdk.sdk.listLicenseVersions(req);

            if (res.listLicenseVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenses

Lists the licenses for your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicensesRequest;
import org.openapis.openapi.models.operations.ListLicensesResponse;
import org.openapis.openapi.models.operations.ListLicensesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListLicensesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLicensesRequest req = new ListLicensesRequest(                new ListLicensesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Dr. Belinda West III";
                                        values = new String[]{{
                                            add("minima"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Edith Ferry";
                                        values = new String[]{{
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Marsha Keebler IV";
                                        values = new String[]{{
                                            add("voluptatem"),
                                            add("dolor"),
                                        }};
                                    }}),
                                }};
                                licenseArns = new String[]{{
                                    add("numquam"),
                                    add("impedit"),
                                    add("explicabo"),
                                }};
                                maxResults = 376226L;
                                nextToken = "aut";
                            }};, ListLicensesXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_LICENSES) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "maiores";
                xAmzDate = "natus";
                xAmzSecurityToken = "velit";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListLicensesResponse res = sdk.sdk.listLicenses(req);

            if (res.listLicensesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReceivedGrants

Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReceivedGrantsRequest;
import org.openapis.openapi.models.operations.ListReceivedGrantsResponse;
import org.openapis.openapi.models.operations.ListReceivedGrantsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListReceivedGrantsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReceivedGrantsRequest req = new ListReceivedGrantsRequest(                new ListReceivedGrantsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Bertha Cruickshank";
                                        values = new String[]{{
                                            add("dignissimos"),
                                            add("officia"),
                                            add("asperiores"),
                                            add("nemo"),
                                        }};
                                    }}),
                                }};
                                grantArns = new String[]{{
                                    add("quaerat"),
                                }};
                                maxResults = 783235L;
                                nextToken = "quod";
                            }};, ListReceivedGrantsXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_RECEIVED_GRANTS) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "ab";
                xAmzCredential = "adipisci";
                xAmzDate = "fuga";
                xAmzSecurityToken = "id";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "velit";
            }};            

            ListReceivedGrantsResponse res = sdk.sdk.listReceivedGrants(req);

            if (res.listReceivedGrantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReceivedGrantsForOrganization

Lists the grants received for all accounts in the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReceivedGrantsForOrganizationRequest;
import org.openapis.openapi.models.operations.ListReceivedGrantsForOrganizationResponse;
import org.openapis.openapi.models.operations.ListReceivedGrantsForOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListReceivedGrantsForOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReceivedGrantsForOrganizationRequest req = new ListReceivedGrantsForOrganizationRequest(                new ListReceivedGrantsForOrganizationRequest("est") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Nicolas Kassulke";
                                        values = new String[]{{
                                            add("labore"),
                                            add("possimus"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Felipe Johns";
                                        values = new String[]{{
                                            add("assumenda"),
                                            add("nemo"),
                                            add("recusandae"),
                                            add("aliquid"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Karla Feest";
                                        values = new String[]{{
                                            add("facere"),
                                            add("numquam"),
                                            add("doloribus"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Rickey Ullrich";
                                        values = new String[]{{
                                            add("asperiores"),
                                        }};
                                    }}),
                                }};
                                maxResults = 241545L;
                                nextToken = "non";
                            }};, ListReceivedGrantsForOrganizationXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_RECEIVED_GRANTS_FOR_ORGANIZATION) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
            }};            

            ListReceivedGrantsForOrganizationResponse res = sdk.sdk.listReceivedGrantsForOrganization(req);

            if (res.listReceivedGrantsForOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReceivedLicenses

Lists received licenses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReceivedLicensesRequest;
import org.openapis.openapi.models.operations.ListReceivedLicensesResponse;
import org.openapis.openapi.models.operations.ListReceivedLicensesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListReceivedLicensesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReceivedLicensesRequest req = new ListReceivedLicensesRequest(                new ListReceivedLicensesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Dr. Silvia Renner";
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Melanie Hane";
                                        values = new String[]{{
                                            add("minus"),
                                        }};
                                    }}),
                                }};
                                licenseArns = new String[]{{
                                    add("blanditiis"),
                                }};
                                maxResults = 449292L;
                                nextToken = "dolore";
                            }};, ListReceivedLicensesXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_RECEIVED_LICENSES) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "temporibus";
                xAmzDate = "ullam";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "blanditiis";
            }};            

            ListReceivedLicensesResponse res = sdk.sdk.listReceivedLicenses(req);

            if (res.listReceivedLicensesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReceivedLicensesForOrganization

Lists the licenses received for all accounts in the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReceivedLicensesForOrganizationRequest;
import org.openapis.openapi.models.operations.ListReceivedLicensesForOrganizationResponse;
import org.openapis.openapi.models.operations.ListReceivedLicensesForOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListReceivedLicensesForOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReceivedLicensesForOrganizationRequest req = new ListReceivedLicensesForOrganizationRequest(                new ListReceivedLicensesForOrganizationRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Molly Lowe";
                                        values = new String[]{{
                                            add("exercitationem"),
                                            add("nobis"),
                                            add("sit"),
                                            add("rerum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Faith Cole";
                                        values = new String[]{{
                                            add("expedita"),
                                            add("ab"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Micheal Osinski";
                                        values = new String[]{{
                                            add("quidem"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Geneva Bradtke";
                                        values = new String[]{{
                                            add("illo"),
                                            add("reiciendis"),
                                            add("perferendis"),
                                            add("corrupti"),
                                        }};
                                    }}),
                                }};
                                maxResults = 979574L;
                                nextToken = "incidunt";
                            }};, ListReceivedLicensesForOrganizationXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_RECEIVED_LICENSES_FOR_ORGANIZATION) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "provident";
                xAmzCredential = "eius";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListReceivedLicensesForOrganizationResponse res = sdk.sdk.listReceivedLicensesForOrganization(req);

            if (res.listReceivedLicensesForOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceInventory

Lists resources managed using Systems Manager inventory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceInventoryRequest;
import org.openapis.openapi.models.operations.ListResourceInventoryResponse;
import org.openapis.openapi.models.operations.ListResourceInventoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.InventoryFilter;
import org.openapis.openapi.models.shared.InventoryFilterConditionEnum;
import org.openapis.openapi.models.shared.ListResourceInventoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceInventoryRequest req = new ListResourceInventoryRequest(                new ListResourceInventoryRequest() {{
                                filters = new org.openapis.openapi.models.shared.InventoryFilter[]{{
                                    add(new InventoryFilter(InventoryFilterConditionEnum.BEGINS_WITH, "facilis") {{
                                        condition = InventoryFilterConditionEnum.NOT_EQUALS;
                                        name = "Allison Wisozk I";
                                        value = "officiis";
                                    }}),
                                    add(new InventoryFilter(InventoryFilterConditionEnum.NOT_EQUALS, "minima") {{
                                        condition = InventoryFilterConditionEnum.NOT_EQUALS;
                                        name = "Brittany Tremblay DDS";
                                        value = "error";
                                    }}),
                                    add(new InventoryFilter(InventoryFilterConditionEnum.NOT_EQUALS, "officiis") {{
                                        condition = InventoryFilterConditionEnum.CONTAINS;
                                        name = "Dr. Jody Cummings";
                                        value = "veniam";
                                    }}),
                                    add(new InventoryFilter(InventoryFilterConditionEnum.BEGINS_WITH, "error") {{
                                        condition = InventoryFilterConditionEnum.EQUALS;
                                        name = "Jorge Langosh";
                                        value = "dolorum";
                                    }}),
                                }};
                                maxResults = 944708L;
                                nextToken = "expedita";
                            }};, ListResourceInventoryXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_RESOURCE_INVENTORY) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "neque";
                xAmzCredential = "dolorum";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "corrupti";
            }};            

            ListResourceInventoryResponse res = sdk.sdk.listResourceInventory(req);

            if (res.listResourceInventoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified license configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("tempora");, ListTagsForResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "ut";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "expedita";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTokens

Lists your tokens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTokensRequest;
import org.openapis.openapi.models.operations.ListTokensResponse;
import org.openapis.openapi.models.operations.ListTokensXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListTokensRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTokensRequest req = new ListTokensRequest(                new ListTokensRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Brittany Bailey";
                                        values = new String[]{{
                                            add("corporis"),
                                            add("et"),
                                            add("blanditiis"),
                                            add("ex"),
                                        }};
                                    }}),
                                }};
                                maxResults = 153627L;
                                nextToken = "sit";
                                tokenIds = new String[]{{
                                    add("nostrum"),
                                    add("saepe"),
                                }};
                            }};, ListTokensXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_TOKENS) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "incidunt";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "dicta";
            }};            

            ListTokensResponse res = sdk.sdk.listTokens(req);

            if (res.listTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageForLicenseConfiguration

Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageForLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.ListUsageForLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.ListUsageForLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListUsageForLicenseConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsageForLicenseConfigurationRequest req = new ListUsageForLicenseConfigurationRequest(                new ListUsageForLicenseConfigurationRequest("occaecati") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Alberto Osinski";
                                        values = new String[]{{
                                            add("alias"),
                                            add("amet"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Karl Miller";
                                        values = new String[]{{
                                            add("delectus"),
                                            add("voluptates"),
                                            add("perferendis"),
                                            add("est"),
                                        }};
                                    }}),
                                }};
                                maxResults = 696483L;
                                nextToken = "reprehenderit";
                            }};, ListUsageForLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_LIST_USAGE_FOR_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "praesentium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListUsageForLicenseConfigurationResponse res = sdk.sdk.listUsageForLicenseConfiguration(req);

            if (res.listUsageForLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectGrant

Rejects the specified grant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectGrantRequest;
import org.openapis.openapi.models.operations.RejectGrantResponse;
import org.openapis.openapi.models.operations.RejectGrantXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectGrantRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectGrantRequest req = new RejectGrantRequest(                new RejectGrantRequest("quasi");, RejectGrantXAmzTargetEnum.AWS_LICENSE_MANAGER_REJECT_GRANT) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "asperiores";
                xAmzDate = "totam";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "maxime";
            }};            

            RejectGrantResponse res = sdk.sdk.rejectGrant(req);

            if (res.rejectGrantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tags to the specified license configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("esse",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "assumenda";
                                                    value = "ea";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_TAG_RESOURCE) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "error";
                xAmzCredential = "officiis";
                xAmzDate = "officiis";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minima";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified license configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("ex",                 new String[]{{
                                                add("corrupti"),
                                                add("at"),
                                                add("error"),
                                                add("blanditiis"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "atque";
                xAmzDate = "atque";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "dolorum";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLicenseConfiguration

Modifies the attributes of an existing license configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLicenseConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateLicenseConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.LicenseConfigurationStatusEnum;
import org.openapis.openapi.models.shared.ProductInformation;
import org.openapis.openapi.models.shared.ProductInformationFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLicenseConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLicenseConfigurationRequest req = new UpdateLicenseConfigurationRequest(                new UpdateLicenseConfigurationRequest("labore") {{
                                description = "reiciendis";
                                disassociateWhenNotFound = false;
                                licenseConfigurationStatus = LicenseConfigurationStatusEnum.AVAILABLE;
                                licenseCount = 919783L;
                                licenseCountHardLimit = false;
                                licenseRules = new String[]{{
                                    add("accusantium"),
                                }};
                                name = "Bonnie Halvorson";
                                productInformationList = new org.openapis.openapi.models.shared.ProductInformation[]{{
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("eveniet", "qui") {{
                                                            productInformationFilterComparator = "ipsa";
                                                            productInformationFilterName = "totam";
                                                            productInformationFilterValue = new String[]{{
                                                                add("molestiae"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("rem", "aliquam") {{
                                                            productInformationFilterComparator = "cum";
                                                            productInformationFilterName = "iure";
                                                            productInformationFilterValue = new String[]{{
                                                                add("ratione"),
                                                                add("laborum"),
                                                                add("distinctio"),
                                                                add("voluptatum"),
                                                            }};
                                                        }}),
                                                    }}, "ad") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("officiis", "perspiciatis") {{
                                                productInformationFilterComparator = "magnam";
                                                productInformationFilterName = "saepe";
                                                productInformationFilterValue = new String[]{{
                                                    add("occaecati"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("quis", "reprehenderit") {{
                                                productInformationFilterComparator = "in";
                                                productInformationFilterName = "adipisci";
                                                productInformationFilterValue = new String[]{{
                                                    add("occaecati"),
                                                    add("consequuntur"),
                                                    add("fugit"),
                                                    add("id"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("non", "vero") {{
                                                productInformationFilterComparator = "error";
                                                productInformationFilterName = "illo";
                                                productInformationFilterValue = new String[]{{
                                                    add("quidem"),
                                                    add("eveniet"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "doloremque";
                                    }}),
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("quasi", "animi") {{
                                                            productInformationFilterComparator = "reiciendis";
                                                            productInformationFilterName = "provident";
                                                            productInformationFilterValue = new String[]{{
                                                                add("ullam"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("aliquid", "accusantium") {{
                                                            productInformationFilterComparator = "nostrum";
                                                            productInformationFilterName = "mollitia";
                                                            productInformationFilterValue = new String[]{{
                                                                add("possimus"),
                                                                add("animi"),
                                                                add("ex"),
                                                            }};
                                                        }}),
                                                    }}, "repellat") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("alias", "maiores") {{
                                                productInformationFilterComparator = "alias";
                                                productInformationFilterName = "corporis";
                                                productInformationFilterValue = new String[]{{
                                                    add("nihil"),
                                                    add("mollitia"),
                                                    add("voluptas"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("nesciunt", "quae") {{
                                                productInformationFilterComparator = "reiciendis";
                                                productInformationFilterName = "dolores";
                                                productInformationFilterValue = new String[]{{
                                                    add("minima"),
                                                    add("dolore"),
                                                    add("dolorum"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("ut", "culpa") {{
                                                productInformationFilterComparator = "recusandae";
                                                productInformationFilterName = "omnis";
                                                productInformationFilterValue = new String[]{{
                                                    add("molestiae"),
                                                    add("ex"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("esse", "provident") {{
                                                productInformationFilterComparator = "adipisci";
                                                productInformationFilterName = "debitis";
                                                productInformationFilterValue = new String[]{{
                                                    add("eum"),
                                                    add("nemo"),
                                                    add("recusandae"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "quis";
                                    }}),
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("maiores", "debitis") {{
                                                            productInformationFilterComparator = "earum";
                                                            productInformationFilterName = "soluta";
                                                            productInformationFilterValue = new String[]{{
                                                                add("illum"),
                                                                add("eaque"),
                                                                add("earum"),
                                                                add("perspiciatis"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("cumque", "fuga") {{
                                                            productInformationFilterComparator = "aliquid";
                                                            productInformationFilterName = "porro";
                                                            productInformationFilterValue = new String[]{{
                                                                add("dolorem"),
                                                                add("fugit"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("ducimus", "natus") {{
                                                            productInformationFilterComparator = "ratione";
                                                            productInformationFilterName = "animi";
                                                            productInformationFilterValue = new String[]{{
                                                                add("nulla"),
                                                                add("consequatur"),
                                                                add("quasi"),
                                                                add("et"),
                                                            }};
                                                        }}),
                                                    }}, "occaecati") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("placeat", "modi") {{
                                                productInformationFilterComparator = "ullam";
                                                productInformationFilterName = "in";
                                                productInformationFilterValue = new String[]{{
                                                    add("earum"),
                                                    add("officia"),
                                                    add("laborum"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("tempora", "quis") {{
                                                productInformationFilterComparator = "voluptatibus";
                                                productInformationFilterName = "molestias";
                                                productInformationFilterValue = new String[]{{
                                                    add("sapiente"),
                                                    add("cumque"),
                                                    add("vitae"),
                                                    add("rerum"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("eum", "eius") {{
                                                productInformationFilterComparator = "inventore";
                                                productInformationFilterName = "fugit";
                                                productInformationFilterValue = new String[]{{
                                                    add("quae"),
                                                    add("perferendis"),
                                                    add("velit"),
                                                    add("aspernatur"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("minima", "beatae") {{
                                                productInformationFilterComparator = "rem";
                                                productInformationFilterName = "at";
                                                productInformationFilterValue = new String[]{{
                                                    add("eos"),
                                                    add("sapiente"),
                                                    add("eum"),
                                                    add("dicta"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "cupiditate";
                                    }}),
                                    add(new ProductInformation(                new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                                        add(new ProductInformationFilter("doloremque", "dicta") {{
                                                            productInformationFilterComparator = "reiciendis";
                                                            productInformationFilterName = "vel";
                                                            productInformationFilterValue = new String[]{{
                                                                add("fugiat"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("aliquid", "ipsa") {{
                                                            productInformationFilterComparator = "odio";
                                                            productInformationFilterName = "tempora";
                                                            productInformationFilterValue = new String[]{{
                                                                add("ex"),
                                                                add("consectetur"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("aliquid", "officia") {{
                                                            productInformationFilterComparator = "laborum";
                                                            productInformationFilterName = "sunt";
                                                            productInformationFilterValue = new String[]{{
                                                                add("fugiat"),
                                                                add("expedita"),
                                                            }};
                                                        }}),
                                                        add(new ProductInformationFilter("voluptas", "iste") {{
                                                            productInformationFilterComparator = "suscipit";
                                                            productInformationFilterName = "aliquid";
                                                            productInformationFilterValue = new String[]{{
                                                                add("eum"),
                                                            }};
                                                        }}),
                                                    }}, "id") {{
                                        productInformationFilterList = new org.openapis.openapi.models.shared.ProductInformationFilter[]{{
                                            add(new ProductInformationFilter("nulla", "necessitatibus") {{
                                                productInformationFilterComparator = "adipisci";
                                                productInformationFilterName = "quasi";
                                                productInformationFilterValue = new String[]{{
                                                    add("doloribus"),
                                                }};
                                            }}),
                                            add(new ProductInformationFilter("iusto", "esse") {{
                                                productInformationFilterComparator = "ipsa";
                                                productInformationFilterName = "tempora";
                                                productInformationFilterValue = new String[]{{
                                                    add("molestiae"),
                                                    add("dicta"),
                                                }};
                                            }}),
                                        }};
                                        resourceType = "praesentium";
                                    }}),
                                }};
                            }};, UpdateLicenseConfigurationXAmzTargetEnum.AWS_LICENSE_MANAGER_UPDATE_LICENSE_CONFIGURATION) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "error";
                xAmzCredential = "possimus";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "libero";
            }};            

            UpdateLicenseConfigurationResponse res = sdk.sdk.updateLicenseConfiguration(req);

            if (res.updateLicenseConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLicenseManagerReportGenerator

<p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseManagerReportGeneratorRequest;
import org.openapis.openapi.models.operations.UpdateLicenseManagerReportGeneratorResponse;
import org.openapis.openapi.models.operations.UpdateLicenseManagerReportGeneratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReportContext;
import org.openapis.openapi.models.shared.ReportFrequency;
import org.openapis.openapi.models.shared.ReportFrequencyTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLicenseManagerReportGeneratorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLicenseManagerReportGeneratorRequest req = new UpdateLicenseManagerReportGeneratorRequest(                new UpdateLicenseManagerReportGeneratorRequest("deleniti", "enim",                 new ReportContext(                new String[]{{
                                                                add("repellendus"),
                                                            }});,                 new ReportFrequency() {{
                                                period = ReportFrequencyTypeEnum.WEEK;
                                                value = 775803L;
                                            }};, "ex",                 new org.openapis.openapi.models.shared.ReportTypeEnum[]{{
                                                add(ReportTypeEnum.LICENSE_CONFIGURATION_SUMMARY_REPORT),
                                                add(ReportTypeEnum.LICENSE_CONFIGURATION_USAGE_REPORT),
                                            }}) {{
                                description = "voluptatem";
                            }};, UpdateLicenseManagerReportGeneratorXAmzTargetEnum.AWS_LICENSE_MANAGER_UPDATE_LICENSE_MANAGER_REPORT_GENERATOR) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "cum";
                xAmzCredential = "aliquid";
                xAmzDate = "beatae";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "veritatis";
            }};            

            UpdateLicenseManagerReportGeneratorResponse res = sdk.sdk.updateLicenseManagerReportGenerator(req);

            if (res.updateLicenseManagerReportGeneratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLicenseSpecificationsForResource

<p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseSpecificationsForResourceRequest;
import org.openapis.openapi.models.operations.UpdateLicenseSpecificationsForResourceResponse;
import org.openapis.openapi.models.operations.UpdateLicenseSpecificationsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.LicenseSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLicenseSpecificationsForResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLicenseSpecificationsForResourceRequest req = new UpdateLicenseSpecificationsForResourceRequest(                new UpdateLicenseSpecificationsForResourceRequest("est") {{
                                addLicenseSpecifications = new org.openapis.openapi.models.shared.LicenseSpecification[]{{
                                    add(new LicenseSpecification("officiis") {{
                                        amiAssociationScope = "voluptatem";
                                        licenseConfigurationArn = "sapiente";
                                    }}),
                                    add(new LicenseSpecification("pariatur") {{
                                        amiAssociationScope = "architecto";
                                        licenseConfigurationArn = "fuga";
                                    }}),
                                    add(new LicenseSpecification("alias") {{
                                        amiAssociationScope = "debitis";
                                        licenseConfigurationArn = "voluptatem";
                                    }}),
                                }};
                                removeLicenseSpecifications = new org.openapis.openapi.models.shared.LicenseSpecification[]{{
                                    add(new LicenseSpecification("sapiente") {{
                                        amiAssociationScope = "earum";
                                        licenseConfigurationArn = "ex";
                                    }}),
                                    add(new LicenseSpecification("nemo") {{
                                        amiAssociationScope = "rem";
                                        licenseConfigurationArn = "minus";
                                    }}),
                                    add(new LicenseSpecification("ullam") {{
                                        amiAssociationScope = "asperiores";
                                        licenseConfigurationArn = "ratione";
                                    }}),
                                }};
                            }};, UpdateLicenseSpecificationsForResourceXAmzTargetEnum.AWS_LICENSE_MANAGER_UPDATE_LICENSE_SPECIFICATIONS_FOR_RESOURCE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "illum";
                xAmzCredential = "totam";
                xAmzDate = "impedit";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "ipsam";
            }};            

            UpdateLicenseSpecificationsForResourceResponse res = sdk.sdk.updateLicenseSpecificationsForResource(req);

            if (res.updateLicenseSpecificationsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceSettings

Updates License Manager settings for the current Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceSettingsRequest;
import org.openapis.openapi.models.operations.UpdateServiceSettingsResponse;
import org.openapis.openapi.models.operations.UpdateServiceSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.OrganizationConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServiceSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceSettingsRequest req = new UpdateServiceSettingsRequest(                new UpdateServiceSettingsRequest() {{
                                enableCrossAccountsDiscovery = false;
                                organizationConfiguration = new OrganizationConfiguration(false);;
                                s3BucketArn = "dolor";
                                snsTopicArn = "aliquam";
                            }};, UpdateServiceSettingsXAmzTargetEnum.AWS_LICENSE_MANAGER_UPDATE_SERVICE_SETTINGS) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "veritatis";
                xAmzDate = "tempora";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "architecto";
            }};            

            UpdateServiceSettingsResponse res = sdk.sdk.updateServiceSettings(req);

            if (res.updateServiceSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
