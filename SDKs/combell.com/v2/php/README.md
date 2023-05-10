# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccount();
    $request->ftpPassword = 'corrupti';
    $request->identifier = 'provident';
    $request->servicepackId = 715190;

    $response = $sdk->accounts->createAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [createAccount](docs/accounts/README.md#createaccount) - Create a new account
* [getAccount](docs/accounts/README.md#getaccount) - Get a specific account
* [getAccounts](docs/accounts/README.md#getaccounts) - Overview of accounts

### [dnsRecords](docs/dnsrecords/README.md)

* [deleteDnsDomainNameRecordsRecordId](docs/dnsrecords/README.md#deletednsdomainnamerecordsrecordid) - Delete a record
* [getDnsDomainNameRecords](docs/dnsrecords/README.md#getdnsdomainnamerecords) - Get records
* [getDnsDomainNameRecordsRecordId](docs/dnsrecords/README.md#getdnsdomainnamerecordsrecordid) - Get specific record
* [postDnsDomainNameRecords](docs/dnsrecords/README.md#postdnsdomainnamerecords) - Create a record
* [putDnsDomainNameRecordsRecordId](docs/dnsrecords/README.md#putdnsdomainnamerecordsrecordid) - Edit a record

### [domains](docs/domains/README.md)

* [configureDomain](docs/domains/README.md#configuredomain) - Edit domain name renew state
* [editNameServers](docs/domains/README.md#editnameservers) - Edit domain name servers
* [getDomain](docs/domains/README.md#getdomain) - Details of a domain
* [getDomains](docs/domains/README.md#getdomains) - Overviews of domains
* [register](docs/domains/README.md#register) - Register a domain
* [transfer](docs/domains/README.md#transfer) - Transfer a domain

### [linuxHostings](docs/linuxhostings/README.md)

* [addScheduledTasks](docs/linuxhostings/README.md#addscheduledtasks) - Add a scheduled task
* [addSshKey](docs/linuxhostings/README.md#addsshkey) - Add a SSH key
* [changeApcu](docs/linuxhostings/README.md#changeapcu) - Configure PHP APCu setting
* [changeAutoRedirect](docs/linuxhostings/README.md#changeautoredirect) - Configure auto redirect
* [changeGzipCompression](docs/linuxhostings/README.md#changegzipcompression) - Enable/disable GZIP compression
* [changeLetsEncrypt](docs/linuxhostings/README.md#changeletsencrypt) - Configure let's encrypt
* [changePhpMemoryLimit](docs/linuxhostings/README.md#changephpmemorylimit) - Configure PHP memory limit
* [changePhpVersion](docs/linuxhostings/README.md#changephpversion) - Change the Linux hosting PHP version.
* [configureFtp](docs/linuxhostings/README.md#configureftp) - Configure FTP
* [configureHttp2](docs/linuxhostings/README.md#configurehttp2) - Configure HTTP/2
* [configureScheduledTask](docs/linuxhostings/README.md#configurescheduledtask) - Configure a scheduled task
* [configureSsh](docs/linuxhostings/README.md#configuressh) - Configure SSH
* [createHostHeader](docs/linuxhostings/README.md#createhostheader) - Create a host header
* [createSubsite](docs/linuxhostings/README.md#createsubsite) - Create a subsite
* [deleteScheduledTask](docs/linuxhostings/README.md#deletescheduledtask) - Delete a scheduled task
* [deleteSshKey](docs/linuxhostings/README.md#deletesshkey) - Delete a SSH key
* [deleteSubsite](docs/linuxhostings/README.md#deletesubsite) - Delete a subsite
* [getAvailablePhpVersions](docs/linuxhostings/README.md#getavailablephpversions) - Get the available PHP versions.
* [getLinuxHosting](docs/linuxhostings/README.md#getlinuxhosting) - Linux hosting detail
* [getLinuxHostings](docs/linuxhostings/README.md#getlinuxhostings) - Overview of linux hostings
* [getScheduledTask](docs/linuxhostings/README.md#getscheduledtask) - Get scheduled task detail
* [getScheduledTasks](docs/linuxhostings/README.md#getscheduledtasks) - Overview of scheduled tasks
* [getSshKeys](docs/linuxhostings/README.md#getsshkeys) - Overview of SSH keys

### [mailZones](docs/mailzones/README.md)

* [configureAlias](docs/mailzones/README.md#configurealias) - Configure a alias
* [configureAntiSpam](docs/mailzones/README.md#configureantispam) - Configure anti-spam for mail zone
* [configureSmtpDomain](docs/mailzones/README.md#configuresmtpdomain) - Configure an extra smtp domain
* [createAlias](docs/mailzones/README.md#createalias) - Create a new alias
* [createCatchAll](docs/mailzones/README.md#createcatchall) - Create a catch-all on the mail zone
* [createSmtpDomain](docs/mailzones/README.md#createsmtpdomain) - Create an extra smtp domain
* [deleteAlias](docs/mailzones/README.md#deletealias) - Delete a alias
* [deleteCatchAll](docs/mailzones/README.md#deletecatchall) - Delete a catch-all on the mail zone
* [deleteSmtpDomain](docs/mailzones/README.md#deletesmtpdomain) - Delete an extra smtp domain
* [getMailZone](docs/mailzones/README.md#getmailzone) - Get the mail zone.

### [mailboxes](docs/mailboxes/README.md)

* [changeMailboxPassword](docs/mailboxes/README.md#changemailboxpassword) - Change password for mailbox
* [configureMailboxAutoForward](docs/mailboxes/README.md#configuremailboxautoforward) - Configure auto-forward for mailbox
* [configureMailboxAutoReply](docs/mailboxes/README.md#configuremailboxautoreply) - Configure auto-reply for mailbox
* [createMailbox](docs/mailboxes/README.md#createmailbox) - Create a new mailbox.
* [deleteMailbox](docs/mailboxes/README.md#deletemailbox) - Delete a mailbox
* [getMailbox](docs/mailboxes/README.md#getmailbox) - Get a specific mailbox
* [getMailboxes](docs/mailboxes/README.md#getmailboxes) - Gets your mailboxes.

### [mySqlDatabases](docs/mysqldatabases/README.md)

* [changeDatabaseUserPassword](docs/mysqldatabases/README.md#changedatabaseuserpassword) - Change password for mysql user
* [changeDatabaseUserStatus](docs/mysqldatabases/README.md#changedatabaseuserstatus) - Enable/disable mysql user
* [createMySqlDatabase](docs/mysqldatabases/README.md#createmysqldatabase) - Create a new mysql database
* [createMySqlUser](docs/mysqldatabases/README.md#createmysqluser) - Create a new mysql user
* [deleteDatabase](docs/mysqldatabases/README.md#deletedatabase) - Delete a mysql database
* [deleteDatabaseUser](docs/mysqldatabases/README.md#deletedatabaseuser) - Delete a mysql user
* [getDatabaseUsers](docs/mysqldatabases/README.md#getdatabaseusers) - Overview of mysql users
* [getMySqlDatabase](docs/mysqldatabases/README.md#getmysqldatabase) - Get a specific database
* [getMySqlDatabases](docs/mysqldatabases/README.md#getmysqldatabases) - Overview of mysql databases

### [provisioningJobs](docs/provisioningjobs/README.md)

* [getProvisioningjobsJobId](docs/provisioningjobs/README.md#getprovisioningjobsjobid) - Detail of a provisioning job

### [ssh](docs/ssh/README.md)

* [getAllSshKeys](docs/ssh/README.md#getallsshkeys) - Overview of SSH keys

### [sslCertificateRequests](docs/sslcertificaterequests/README.md)

* [addSslCertificateRequest](docs/sslcertificaterequests/README.md#addsslcertificaterequest) - Add a SSL certificate request
* [getSslCertificateRequest](docs/sslcertificaterequests/README.md#getsslcertificaterequest) - Detail of a SSL certificate request
* [getSslCertificateRequests](docs/sslcertificaterequests/README.md#getsslcertificaterequests) - Overview of SSL certificate requests
* [verifySslCertificateRequestDomainValidations](docs/sslcertificaterequests/README.md#verifysslcertificaterequestdomainvalidations) - Verify the SSL certificate request domain validations

### [sslCertificates](docs/sslcertificates/README.md)

* [downloadCertificate](docs/sslcertificates/README.md#downloadcertificate) - Download a SSL certificate
* [getSslCertificate](docs/sslcertificates/README.md#getsslcertificate) - Detail of a SSL certificate
* [getSslCertificates](docs/sslcertificates/README.md#getsslcertificates) - Overview of SSL certificates

### [servicepacks](docs/servicepacks/README.md)

* [servicepacks](docs/servicepacks/README.md#servicepacks) - Overview of service packs

### [windowsHostings](docs/windowshostings/README.md)

* [getWindowsHosting](docs/windowshostings/README.md#getwindowshosting) - Windows hosting detail
* [getWindowsHostings](docs/windowshostings/README.md#getwindowshostings) - Overview of windows hostings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
