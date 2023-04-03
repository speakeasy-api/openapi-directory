# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.CreateAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAccount req = new CreateAccount() {{
                ftpPassword = "corrupti";
                identifier = "provident";
                servicepackId = 715190;
            }}            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `createAccount` - Create a new account
* `getAccount` - Get a specific account
* `getAccounts` - Overview of accounts

### dnsRecords

* `deleteDnsDomainNameRecordsRecordId` - Delete a record
* `getDnsDomainNameRecords` - Get records
* `getDnsDomainNameRecordsRecordId` - Get specific record
* `postDnsDomainNameRecords` - Create a record
* `putDnsDomainNameRecordsRecordId` - Edit a record

### domains

* `configureDomain` - Edit domain name renew state
* `editNameServers` - Edit domain name servers
* `getDomain` - Details of a domain
* `getDomains` - Overviews of domains
* `register` - Register a domain
* `transfer` - Transfer a domain

### linuxHostings

* `addScheduledTasks` - Add a scheduled task
* `addSshKey` - Add a SSH key
* `changeApcu` - Configure PHP APCu setting
* `changeAutoRedirect` - Configure auto redirect
* `changeGzipCompression` - Enable/disable GZIP compression
* `changeLetsEncrypt` - Configure let's encrypt
* `changePhpMemoryLimit` - Configure PHP memory limit
* `changePhpVersion` - Change the Linux hosting PHP version.
* `configureFtp` - Configure FTP
* `configureHttp2` - Configure HTTP/2
* `configureScheduledTask` - Configure a scheduled task
* `configureSsh` - Configure SSH
* `createHostHeader` - Create a host header
* `createSubsite` - Create a subsite
* `deleteScheduledTask` - Delete a scheduled task
* `deleteSshKey` - Delete a SSH key
* `deleteSubsite` - Delete a subsite
* `getAvailablePhpVersions` - Get the available PHP versions.
* `getLinuxHosting` - Linux hosting detail
* `getLinuxHostings` - Overview of linux hostings
* `getScheduledTask` - Get scheduled task detail
* `getScheduledTasks` - Overview of scheduled tasks
* `getSshKeys` - Overview of SSH keys

### mailZones

* `configureAlias` - Configure a alias
* `configureAntiSpam` - Configure anti-spam for mail zone
* `configureSmtpDomain` - Configure an extra smtp domain
* `createAlias` - Create a new alias
* `createCatchAll` - Create a catch-all on the mail zone
* `createSmtpDomain` - Create an extra smtp domain
* `deleteAlias` - Delete a alias
* `deleteCatchAll` - Delete a catch-all on the mail zone
* `deleteSmtpDomain` - Delete an extra smtp domain
* `getMailZone` - Get the mail zone.

### mailboxes

* `changeMailboxPassword` - Change password for mailbox
* `configureMailboxAutoForward` - Configure auto-forward for mailbox
* `configureMailboxAutoReply` - Configure auto-reply for mailbox
* `createMailbox` - Create a new mailbox.
* `deleteMailbox` - Delete a mailbox
* `getMailbox` - Get a specific mailbox
* `getMailboxes` - Gets your mailboxes.

### mySqlDatabases

* `changeDatabaseUserPassword` - Change password for mysql user
* `changeDatabaseUserStatus` - Enable/disable mysql user
* `createMySqlDatabase` - Create a new mysql database
* `createMySqlUser` - Create a new mysql user
* `deleteDatabase` - Delete a mysql database
* `deleteDatabaseUser` - Delete a mysql user
* `getDatabaseUsers` - Overview of mysql users
* `getMySqlDatabase` - Get a specific database
* `getMySqlDatabases` - Overview of mysql databases

### provisioningJobs

* `getProvisioningjobsJobId` - Detail of a provisioning job

### ssh

* `getAllSshKeys` - Overview of SSH keys

### sslCertificateRequests

* `addSslCertificateRequest` - Add a SSL certificate request
* `getSslCertificateRequest` - Detail of a SSL certificate request
* `getSslCertificateRequests` - Overview of SSL certificate requests
* `verifySslCertificateRequestDomainValidations` - Verify the SSL certificate request domain validations

### sslCertificates

* `downloadCertificate` - Download a SSL certificate
* `getSslCertificate` - Detail of a SSL certificate
* `getSslCertificates` - Overview of SSL certificates

### servicepacks

* `servicepacks` - Overview of service packs

### windowsHostings

* `getWindowsHosting` - Windows hosting detail
* `getWindowsHostings` - Overview of windows hostings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
