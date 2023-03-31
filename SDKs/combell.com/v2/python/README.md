# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/combell.com/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateAccount(
    ftp_password="corrupti",
    identifier="provident",
    servicepack_id=715190,
)
    
res = s.accounts.create_account(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `create_account` - Create a new account
* `get_account` - Get a specific account
* `get_accounts` - Overview of accounts

### dns_records

* `delete_dns_domain_name_records_record_id_` - Delete a record
* `get_dns_domain_name_records` - Get records
* `get_dns_domain_name_records_record_id_` - Get specific record
* `post_dns_domain_name_records` - Create a record
* `put_dns_domain_name_records_record_id_` - Edit a record

### domains

* `configure_domain` - Edit domain name renew state
* `edit_name_servers` - Edit domain name servers
* `get_domain` - Details of a domain
* `get_domains` - Overviews of domains
* `register` - Register a domain
* `transfer` - Transfer a domain

### linux_hostings

* `add_scheduled_tasks` - Add a scheduled task
* `add_ssh_key` - Add a SSH key
* `change_apcu` - Configure PHP APCu setting
* `change_auto_redirect` - Configure auto redirect
* `change_gzip_compression` - Enable/disable GZIP compression
* `change_lets_encrypt` - Configure let's encrypt
* `change_php_memory_limit` - Configure PHP memory limit
* `change_php_version` - Change the Linux hosting PHP version.
* `configure_ftp` - Configure FTP
* `configure_http2` - Configure HTTP/2
* `configure_scheduled_task` - Configure a scheduled task
* `configure_ssh` - Configure SSH
* `create_host_header` - Create a host header
* `create_subsite` - Create a subsite
* `delete_scheduled_task` - Delete a scheduled task
* `delete_ssh_key` - Delete a SSH key
* `delete_subsite` - Delete a subsite
* `get_available_php_versions` - Get the available PHP versions.
* `get_linux_hosting` - Linux hosting detail
* `get_linux_hostings` - Overview of linux hostings
* `get_scheduled_task` - Get scheduled task detail
* `get_scheduled_tasks` - Overview of scheduled tasks
* `get_ssh_keys` - Overview of SSH keys

### mail_zones

* `configure_alias` - Configure a alias
* `configure_anti_spam` - Configure anti-spam for mail zone
* `configure_smtp_domain` - Configure an extra smtp domain
* `create_alias` - Create a new alias
* `create_catch_all` - Create a catch-all on the mail zone
* `create_smtp_domain` - Create an extra smtp domain
* `delete_alias` - Delete a alias
* `delete_catch_all` - Delete a catch-all on the mail zone
* `delete_smtp_domain` - Delete an extra smtp domain
* `get_mail_zone` - Get the mail zone.

### mailboxes

* `change_mailbox_password` - Change password for mailbox
* `configure_mailbox_auto_forward` - Configure auto-forward for mailbox
* `configure_mailbox_auto_reply` - Configure auto-reply for mailbox
* `create_mailbox` - Create a new mailbox.
* `delete_mailbox` - Delete a mailbox
* `get_mailbox` - Get a specific mailbox
* `get_mailboxes` - Gets your mailboxes.

### my_sql_databases

* `change_database_user_password` - Change password for mysql user
* `change_database_user_status` - Enable/disable mysql user
* `create_my_sql_database` - Create a new mysql database
* `create_my_sql_user` - Create a new mysql user
* `delete_database` - Delete a mysql database
* `delete_database_user` - Delete a mysql user
* `get_database_users` - Overview of mysql users
* `get_my_sql_database` - Get a specific database
* `get_my_sql_databases` - Overview of mysql databases

### provisioning_jobs

* `get_provisioningjobs_job_id_` - Detail of a provisioning job

### ssh

* `get_all_ssh_keys` - Overview of SSH keys

### ssl_certificate_requests

* `add_ssl_certificate_request` - Add a SSL certificate request
* `get_ssl_certificate_request` - Detail of a SSL certificate request
* `get_ssl_certificate_requests` - Overview of SSL certificate requests
* `verify_ssl_certificate_request_domain_validations` - Verify the SSL certificate request domain validations

### ssl_certificates

* `download_certificate` - Download a SSL certificate
* `get_ssl_certificate` - Detail of a SSL certificate
* `get_ssl_certificates` - Overview of SSL certificates

### servicepacks

* `servicepacks` - Overview of service packs

### windows_hostings

* `get_windows_hosting` - Windows hosting detail
* `get_windows_hostings` - Overview of windows hostings
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
