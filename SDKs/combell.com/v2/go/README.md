# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/combell.com/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.CreateAccount(ctx, shared.CreateAccount{
        FtpPassword: sdk.String("corrupti"),
        Identifier: sdk.String("provident"),
        ServicepackID: sdk.Int(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [CreateAccount](docs/accounts/README.md#createaccount) - Create a new account
* [GetAccount](docs/accounts/README.md#getaccount) - Get a specific account
* [GetAccounts](docs/accounts/README.md#getaccounts) - Overview of accounts

### [DNSRecords](docs/dnsrecords/README.md)

* [DeleteDNSDomainNameRecordsRecordID](docs/dnsrecords/README.md#deletednsdomainnamerecordsrecordid) - Delete a record
* [GetDNSDomainNameRecords](docs/dnsrecords/README.md#getdnsdomainnamerecords) - Get records
* [GetDNSDomainNameRecordsRecordID](docs/dnsrecords/README.md#getdnsdomainnamerecordsrecordid) - Get specific record
* [PostDNSDomainNameRecords](docs/dnsrecords/README.md#postdnsdomainnamerecords) - Create a record
* [PutDNSDomainNameRecordsRecordID](docs/dnsrecords/README.md#putdnsdomainnamerecordsrecordid) - Edit a record

### [Domains](docs/domains/README.md)

* [ConfigureDomain](docs/domains/README.md#configuredomain) - Edit domain name renew state
* [EditNameServers](docs/domains/README.md#editnameservers) - Edit domain name servers
* [GetDomain](docs/domains/README.md#getdomain) - Details of a domain
* [GetDomains](docs/domains/README.md#getdomains) - Overviews of domains
* [Register](docs/domains/README.md#register) - Register a domain
* [Transfer](docs/domains/README.md#transfer) - Transfer a domain

### [LinuxHostings](docs/linuxhostings/README.md)

* [AddScheduledTasks](docs/linuxhostings/README.md#addscheduledtasks) - Add a scheduled task
* [AddSSHKey](docs/linuxhostings/README.md#addsshkey) - Add a SSH key
* [ChangeApcu](docs/linuxhostings/README.md#changeapcu) - Configure PHP APCu setting
* [ChangeAutoRedirect](docs/linuxhostings/README.md#changeautoredirect) - Configure auto redirect
* [ChangeGzipCompression](docs/linuxhostings/README.md#changegzipcompression) - Enable/disable GZIP compression
* [ChangeLetsEncrypt](docs/linuxhostings/README.md#changeletsencrypt) - Configure let's encrypt
* [ChangePhpMemoryLimit](docs/linuxhostings/README.md#changephpmemorylimit) - Configure PHP memory limit
* [ChangePhpVersion](docs/linuxhostings/README.md#changephpversion) - Change the Linux hosting PHP version.
* [ConfigureFtp](docs/linuxhostings/README.md#configureftp) - Configure FTP
* [ConfigureHttp2](docs/linuxhostings/README.md#configurehttp2) - Configure HTTP/2
* [ConfigureScheduledTask](docs/linuxhostings/README.md#configurescheduledtask) - Configure a scheduled task
* [ConfigureSSH](docs/linuxhostings/README.md#configuressh) - Configure SSH
* [CreateHostHeader](docs/linuxhostings/README.md#createhostheader) - Create a host header
* [CreateSubsite](docs/linuxhostings/README.md#createsubsite) - Create a subsite
* [DeleteScheduledTask](docs/linuxhostings/README.md#deletescheduledtask) - Delete a scheduled task
* [DeleteSSHKey](docs/linuxhostings/README.md#deletesshkey) - Delete a SSH key
* [DeleteSubsite](docs/linuxhostings/README.md#deletesubsite) - Delete a subsite
* [GetAvailablePhpVersions](docs/linuxhostings/README.md#getavailablephpversions) - Get the available PHP versions.
* [GetLinuxHosting](docs/linuxhostings/README.md#getlinuxhosting) - Linux hosting detail
* [GetLinuxHostings](docs/linuxhostings/README.md#getlinuxhostings) - Overview of linux hostings
* [GetScheduledTask](docs/linuxhostings/README.md#getscheduledtask) - Get scheduled task detail
* [GetScheduledTasks](docs/linuxhostings/README.md#getscheduledtasks) - Overview of scheduled tasks
* [GetSSHKeys](docs/linuxhostings/README.md#getsshkeys) - Overview of SSH keys

### [MailZones](docs/mailzones/README.md)

* [ConfigureAlias](docs/mailzones/README.md#configurealias) - Configure a alias
* [ConfigureAntiSpam](docs/mailzones/README.md#configureantispam) - Configure anti-spam for mail zone
* [ConfigureSMTPDomain](docs/mailzones/README.md#configuresmtpdomain) - Configure an extra smtp domain
* [CreateAlias](docs/mailzones/README.md#createalias) - Create a new alias
* [CreateCatchAll](docs/mailzones/README.md#createcatchall) - Create a catch-all on the mail zone
* [CreateSMTPDomain](docs/mailzones/README.md#createsmtpdomain) - Create an extra smtp domain
* [DeleteAlias](docs/mailzones/README.md#deletealias) - Delete a alias
* [DeleteCatchAll](docs/mailzones/README.md#deletecatchall) - Delete a catch-all on the mail zone
* [DeleteSMTPDomain](docs/mailzones/README.md#deletesmtpdomain) - Delete an extra smtp domain
* [GetMailZone](docs/mailzones/README.md#getmailzone) - Get the mail zone.

### [Mailboxes](docs/mailboxes/README.md)

* [ChangeMailboxPassword](docs/mailboxes/README.md#changemailboxpassword) - Change password for mailbox
* [ConfigureMailboxAutoForward](docs/mailboxes/README.md#configuremailboxautoforward) - Configure auto-forward for mailbox
* [ConfigureMailboxAutoReply](docs/mailboxes/README.md#configuremailboxautoreply) - Configure auto-reply for mailbox
* [CreateMailbox](docs/mailboxes/README.md#createmailbox) - Create a new mailbox.
* [DeleteMailbox](docs/mailboxes/README.md#deletemailbox) - Delete a mailbox
* [GetMailbox](docs/mailboxes/README.md#getmailbox) - Get a specific mailbox
* [GetMailboxes](docs/mailboxes/README.md#getmailboxes) - Gets your mailboxes.

### [MySQLDatabases](docs/mysqldatabases/README.md)

* [ChangeDatabaseUserPassword](docs/mysqldatabases/README.md#changedatabaseuserpassword) - Change password for mysql user
* [ChangeDatabaseUserStatus](docs/mysqldatabases/README.md#changedatabaseuserstatus) - Enable/disable mysql user
* [CreateMySQLDatabase](docs/mysqldatabases/README.md#createmysqldatabase) - Create a new mysql database
* [CreateMySQLUser](docs/mysqldatabases/README.md#createmysqluser) - Create a new mysql user
* [DeleteDatabase](docs/mysqldatabases/README.md#deletedatabase) - Delete a mysql database
* [DeleteDatabaseUser](docs/mysqldatabases/README.md#deletedatabaseuser) - Delete a mysql user
* [GetDatabaseUsers](docs/mysqldatabases/README.md#getdatabaseusers) - Overview of mysql users
* [GetMySQLDatabase](docs/mysqldatabases/README.md#getmysqldatabase) - Get a specific database
* [GetMySQLDatabases](docs/mysqldatabases/README.md#getmysqldatabases) - Overview of mysql databases

### [ProvisioningJobs](docs/provisioningjobs/README.md)

* [GetProvisioningjobsJobID](docs/provisioningjobs/README.md#getprovisioningjobsjobid) - Detail of a provisioning job

### [SSH](docs/ssh/README.md)

* [GetAllSSHKeys](docs/ssh/README.md#getallsshkeys) - Overview of SSH keys

### [SSLCertificateRequests](docs/sslcertificaterequests/README.md)

* [AddSslCertificateRequest](docs/sslcertificaterequests/README.md#addsslcertificaterequest) - Add a SSL certificate request
* [GetSslCertificateRequest](docs/sslcertificaterequests/README.md#getsslcertificaterequest) - Detail of a SSL certificate request
* [GetSslCertificateRequests](docs/sslcertificaterequests/README.md#getsslcertificaterequests) - Overview of SSL certificate requests
* [VerifySslCertificateRequestDomainValidations](docs/sslcertificaterequests/README.md#verifysslcertificaterequestdomainvalidations) - Verify the SSL certificate request domain validations

### [SSLCertificates](docs/sslcertificates/README.md)

* [DownloadCertificate](docs/sslcertificates/README.md#downloadcertificate) - Download a SSL certificate
* [GetSslCertificate](docs/sslcertificates/README.md#getsslcertificate) - Detail of a SSL certificate
* [GetSslCertificates](docs/sslcertificates/README.md#getsslcertificates) - Overview of SSL certificates

### [Servicepacks](docs/servicepacks/README.md)

* [Servicepacks](docs/servicepacks/README.md#servicepacks) - Overview of service packs

### [WindowsHostings](docs/windowshostings/README.md)

* [GetWindowsHosting](docs/windowshostings/README.md#getwindowshosting) - Windows hosting detail
* [GetWindowsHostings](docs/windowshostings/README.md#getwindowshostings) - Overview of windows hostings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
