# site

## Overview

Operations about sites

### Available Operations

* [getSite](#getsite) - Show site settings
* [getSiteApiKeys](#getsiteapikeys) - List Api Keys
* [getSiteDnsRecords](#getsitednsrecords) - Show site DNS configuration.
* [getSiteIpAddresses](#getsiteipaddresses) - List IP Addresses associated with the current site
* [getSiteUsage](#getsiteusage) - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* [patchSite](#patchsite) - Update site settings.
* [postSiteApiKeys](#postsiteapikeys) - Create Api Key
* [postSiteTestWebhook](#postsitetestwebhook) - Test webhook.

## getSite

Show site settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteResponse res = sdk.site.getSite();

            if (res.siteEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSiteApiKeys

List Api Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteApiKeysRequest;
import org.openapis.openapi.models.operations.GetSiteApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteApiKeysRequest req = new GetSiteApiKeysRequest() {{
                cursor = "esse";
                filter = new java.util.HashMap<String, Object>() {{
                    put("quis", "eum");
                    put("reiciendis", "provident");
                    put("aspernatur", "ullam");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("animi", "nostrum");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("provident", "possimus");
                    put("animi", "ex");
                    put("aliquid", "accusantium");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("doloribus", "ullam");
                    put("in", "nam");
                    put("earum", "officia");
                    put("laborum", "placeat");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "molestias");
                    put("officiis", "sapiente");
                }};
                perPage = 764562;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("rerum", "tempora");
                }};
                userId = 335498;
            }};            

            GetSiteApiKeysResponse res = sdk.site.getSiteApiKeys(req);

            if (res.apiKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSiteDnsRecords

Show site DNS configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteDnsRecordsRequest;
import org.openapis.openapi.models.operations.GetSiteDnsRecordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteDnsRecordsRequest req = new GetSiteDnsRecordsRequest() {{
                cursor = "inventore";
                perPage = 147685;
            }};            

            GetSiteDnsRecordsResponse res = sdk.site.getSiteDnsRecords(req);

            if (res.dnsRecordEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSiteIpAddresses

List IP Addresses associated with the current site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteIpAddressesRequest;
import org.openapis.openapi.models.operations.GetSiteIpAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteIpAddressesRequest req = new GetSiteIpAddressesRequest() {{
                cursor = "cumque";
                perPage = 62636;
            }};            

            GetSiteIpAddressesResponse res = sdk.site.getSiteIpAddresses(req);

            if (res.ipAddressEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSiteUsage

Get the most recent usage snapshot (usage data for billing purposes) for a Site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteUsageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteUsageResponse res = sdk.site.getSiteUsage();

            if (res.usageSnapshotEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSite

Update site settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSiteRequestBody;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyBundleWatermarkAttachmentFile;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyIcon128File;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyIcon16File;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyIcon32File;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyIcon48File;
import org.openapis.openapi.models.operations.PatchSiteRequestBodyLogoFile;
import org.openapis.openapi.models.operations.PatchSiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchSiteRequestBody req = new PatchSiteRequestBody() {{
                activeSftpHostKeyId = 21688;
                allowBundleNames = false;
                allowed2faMethodBypassForFtpSftpDav = false;
                allowed2faMethodSms = false;
                allowed2faMethodTotp = false;
                allowed2faMethodU2f = false;
                allowed2faMethodWebauthn = false;
                allowed2faMethodYubi = false;
                allowedCountries = "velit";
                allowedIps = "aspernatur";
                askAboutOverwrites = false;
                bundleActivityNotifications = "eum";
                bundleExpiration = 260628;
                bundlePasswordRequired = false;
                bundleRegistrationNotifications = "rem";
                bundleRequireShareRecipient = false;
                bundleUploadReceiptNotifications = "at";
                bundleWatermarkAttachmentDelete = false;
                bundleWatermarkAttachmentFile = new PatchSiteRequestBodyBundleWatermarkAttachmentFile("impedit", "eos".getBytes());;
                bundleWatermarkValue = new java.util.HashMap<String, Object>() {{
                    put("eum", "dicta");
                    put("minima", "beatae");
                    put("cupiditate", "provident");
                    put("earum", "soluta");
                }};
                color2Left = "hic";
                color2Link = "illum";
                color2Text = "eaque";
                color2Top = "earum";
                color2TopText = "perspiciatis";
                customNamespace = false;
                daysToRetainBackups = 983427;
                defaultTimeZone = "debitis";
                desktopApp = false;
                desktopAppSessionIpPinning = false;
                desktopAppSessionLifetime = 399802;
                disable2faWithDelay = false;
                disableFilesCertificateGeneration = false;
                disablePasswordReset = false;
                disableUsersFromInactivityPeriodDays = 780931;
                disallowedCountries = "suscipit";
                domain = "dolorem";
                domainHstsHeader = false;
                domainLetsencryptChain = "fugit";
                email = "Marlene_Dickens@hotmail.com";
                folderPermissionsGroupsOnly = false;
                ftpEnabled = false;
                icon128Delete = false;
                icon128File = new PatchSiteRequestBodyIcon128File("nulla".getBytes(), "consequatur");;
                icon16Delete = false;
                icon16File = new PatchSiteRequestBodyIcon16File("quasi".getBytes(), "et");;
                icon32Delete = false;
                icon32File = new PatchSiteRequestBodyIcon32File("ducimus".getBytes(), "natus");;
                icon48Delete = false;
                icon48File = new PatchSiteRequestBodyIcon48File("occaecati".getBytes(), "suscipit");;
                immutableFiles = false;
                includePasswordInWelcomeEmail = false;
                language = "adipisci";
                ldapBaseDn = "quasi";
                ldapDomain = "magni";
                ldapEnabled = false;
                ldapGroupAction = "doloribus";
                ldapGroupExclusion = "nulla";
                ldapGroupInclusion = "necessitatibus";
                ldapHost = "ipsa";
                ldapHost2 = "tempora";
                ldapHost3 = "nihil";
                ldapPasswordChange = "molestiae";
                ldapPasswordChangeConfirmation = "dicta";
                ldapPort = 479754;
                ldapSecure = false;
                ldapType = "esse";
                ldapUserAction = "praesentium";
                ldapUserIncludeGroups = "maiores";
                ldapUsername = "reiciendis";
                ldapUsernameField = "vel";
                loginHelpText = "architecto";
                logoDelete = false;
                logoFile = new PatchSiteRequestBodyLogoFile("fugiat".getBytes(), "doloremque");;
                maxPriorPasswords = 117315;
                mobileApp = false;
                mobileAppSessionIpPinning = false;
                mobileAppSessionLifetime = 483706;
                motdText = "tempora";
                motdUseForFtp = false;
                motdUseForSftp = false;
                name = "Carla Feil MD";
                nonSsoGroupsAllowed = false;
                nonSsoUsersAllowed = false;
                officeIntegrationAvailable = false;
                officeIntegrationType = "sunt";
                optOutGlobal = false;
                passwordMinLength = 344718;
                passwordRequireLetter = false;
                passwordRequireMixed = false;
                passwordRequireNumber = false;
                passwordRequireSpecial = false;
                passwordRequireUnbreached = false;
                passwordRequirementsApplyToBundles = false;
                passwordValidityDays = 856756;
                pinAllRemoteServersToSiteRegion = false;
                replyToEmail = "expedita";
                require2fa = false;
                require2faUserType = "aliquid";
                sessionExpiry = 6391.87;
                sessionExpiryMinutes = 381397;
                sessionPinnedByIp = false;
                sftpEnabled = false;
                sftpHostKeyType = "aliquid";
                sftpInsecureCiphers = false;
                sftpUserRootEnabled = false;
                sharingEnabled = false;
                showRequestAccessLink = false;
                siteFooter = "perferendis";
                siteHeader = "eum";
                smtpAddress = "voluptas";
                smtpAuthentication = "iste";
                smtpFrom = "id";
                smtpPassword = "ab";
                smtpPort = 625358;
                smtpUsername = "possimus";
                sslRequired = false;
                subdomain = "voluptates";
                tlsDisabled = false;
                uploadsViaEmailAuthentication = false;
                useProvidedModifiedAt = false;
                userLockout = false;
                userLockoutLockPeriod = 653421;
                userLockoutTries = 671794;
                userLockoutWithin = 726343;
                userRequestsEnabled = false;
                userRequestsNotifyAdmins = false;
                welcomeCustomText = "ad";
                welcomeEmailCc = "deleniti";
                welcomeEmailEnabled = false;
                welcomeEmailSubject = "enim";
                welcomeScreen = "vitae";
                windowsModeFtp = false;
            }};            

            PatchSiteResponse res = sdk.site.patchSite(req);

            if (res.siteEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSiteApiKeys

Create Api Key

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSiteApiKeysRequestBody;
import org.openapis.openapi.models.operations.PostSiteApiKeysRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.PostSiteApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSiteApiKeysRequestBody req = new PostSiteApiKeysRequestBody() {{
                description = "example";
                expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                name = "My Main API Key";
                path = "shared/docs";
                permissionSet = PostSiteApiKeysRequestBodyPermissionSetEnum.FULL;
                userId = 833316;
            }};            

            PostSiteApiKeysResponse res = sdk.site.postSiteApiKeys(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSiteTestWebhook

Test webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSiteTestWebhookRequestBody;
import org.openapis.openapi.models.operations.PostSiteTestWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSiteTestWebhookRequestBody req = new PostSiteTestWebhookRequestBody("https://www.site.com/...") {{
                action = "test";
                body = new java.util.HashMap<String, Object>() {{
                    put("quo", "ex");
                    put("ut", "ad");
                }};
                encoding = "RAW";
                headers = new java.util.HashMap<String, Object>() {{
                    put("voluptatem", "molestias");
                    put("cum", "aliquid");
                    put("beatae", "voluptatum");
                }};
                method = "GET";
            }};            

            PostSiteTestWebhookResponse res = sdk.site.postSiteTestWebhook(req);

            if (res.statusEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
