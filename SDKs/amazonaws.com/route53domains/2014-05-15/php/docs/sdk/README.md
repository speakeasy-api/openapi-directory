# SDK

## Overview

Amazon Route 53 API actions let you register domain names and perform related operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53domains/>
### Available Operations

* [acceptDomainTransferFromAnotherAwsAccount](#acceptdomaintransferfromanotherawsaccount) - <p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [associateDelegationSignerToDomain](#associatedelegationsignertodomain) - <p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>
* [cancelDomainTransferToAnotherAwsAccount](#canceldomaintransfertoanotherawsaccount) - <p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [checkDomainAvailability](#checkdomainavailability) - This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
* [checkDomainTransferability](#checkdomaintransferability) - Checks whether a domain name can be transferred to Amazon Route 53. 
* [deleteDomain](#deletedomain) - <p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>
* [deleteTagsForDomain](#deletetagsfordomain) - <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [disableDomainAutoRenew](#disabledomainautorenew) - This operation disables automatic renewal of domain registration for the specified domain.
* [disableDomainTransferLock](#disabledomaintransferlock) - This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
* [disassociateDelegationSignerFromDomain](#disassociatedelegationsignerfromdomain) - Deletes a delegation signer (DS) record in the registry zone for this domain name.
* [enableDomainAutoRenew](#enabledomainautorenew) - <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
* [enableDomainTransferLock](#enabledomaintransferlock) - This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
* [getContactReachabilityStatus](#getcontactreachabilitystatus) - <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
* [getDomainDetail](#getdomaindetail) - This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.
* [getDomainSuggestions](#getdomainsuggestions) - The GetDomainSuggestions operation returns a list of suggested domain names.
* [getOperationDetail](#getoperationdetail) - This operation returns the current status of an operation that is not completed.
* [listDomains](#listdomains) - This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.
* [listOperations](#listoperations) - <p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>
* [listPrices](#listprices) - <p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>
* [listTagsForDomain](#listtagsfordomain) - <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [pushDomain](#pushdomain) - <p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>
* [registerDomain](#registerdomain) - <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
* [rejectDomainTransferFromAnotherAwsAccount](#rejectdomaintransferfromanotherawsaccount) - <p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [renewDomain](#renewdomain) - <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
* [resendContactReachabilityEmail](#resendcontactreachabilityemail) - For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
* [resendOperationAuthorization](#resendoperationauthorization) -  Resend the form of authorization email for this operation. 
* [retrieveDomainAuthCode](#retrievedomainauthcode) - This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
* [transferDomain](#transferdomain) - <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
* [transferDomainToAnotherAwsAccount](#transferdomaintoanotherawsaccount) - <p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [updateDomainContact](#updatedomaincontact) - <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>
* [updateDomainContactPrivacy](#updatedomaincontactprivacy) - <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
* [updateDomainNameservers](#updatedomainnameservers) - <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
* [updateTagsForDomain](#updatetagsfordomain) - <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [viewBilling](#viewbilling) - Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

## acceptDomainTransferFromAnotherAwsAccount

<p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptDomainTransferFromAnotherAwsAccountRequest();
    $request->acceptDomainTransferFromAnotherAwsAccountRequest = new AcceptDomainTransferFromAnotherAwsAccountRequest();
    $request->acceptDomainTransferFromAnotherAwsAccountRequest->domainName = 'error';
    $request->acceptDomainTransferFromAnotherAwsAccountRequest->password = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT;

    $response = $sdk->sdk->acceptDomainTransferFromAnotherAwsAccount($request);

    if ($response->acceptDomainTransferFromAnotherAwsAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateDelegationSignerToDomain

<p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegationSignerToDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDelegationSignerToDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnssecSigningAttributes;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDelegationSignerToDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDelegationSignerToDomainRequest();
    $request->associateDelegationSignerToDomainRequest = new AssociateDelegationSignerToDomainRequest();
    $request->associateDelegationSignerToDomainRequest->domainName = 'suscipit';
    $request->associateDelegationSignerToDomainRequest->signingAttributes = new DnssecSigningAttributes();
    $request->associateDelegationSignerToDomainRequest->signingAttributes->algorithm = 477665;
    $request->associateDelegationSignerToDomainRequest->signingAttributes->flags = 791725;
    $request->associateDelegationSignerToDomainRequest->signingAttributes->publicKey = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = AssociateDelegationSignerToDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_ASSOCIATE_DELEGATION_SIGNER_TO_DOMAIN;

    $response = $sdk->sdk->associateDelegationSignerToDomain($request);

    if ($response->associateDelegationSignerToDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDomainTransferToAnotherAwsAccount

<p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDomainTransferToAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelDomainTransferToAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDomainTransferToAnotherAwsAccountRequest();
    $request->cancelDomainTransferToAnotherAwsAccountRequest = new CancelDomainTransferToAnotherAwsAccountRequest();
    $request->cancelDomainTransferToAnotherAwsAccountRequest->domainName = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT;

    $response = $sdk->sdk->cancelDomainTransferToAnotherAwsAccount($request);

    if ($response->cancelDomainTransferToAnotherAwsAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkDomainAvailability

This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckDomainAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckDomainAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckDomainAvailabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckDomainAvailabilityRequest();
    $request->checkDomainAvailabilityRequest = new CheckDomainAvailabilityRequest();
    $request->checkDomainAvailabilityRequest->domainName = 'odit';
    $request->checkDomainAvailabilityRequest->idnLangCode = 'at';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = CheckDomainAvailabilityXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_AVAILABILITY;

    $response = $sdk->sdk->checkDomainAvailability($request);

    if ($response->checkDomainAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkDomainTransferability

Checks whether a domain name can be transferred to Amazon Route 53. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckDomainTransferabilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckDomainTransferabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckDomainTransferabilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckDomainTransferabilityRequest();
    $request->checkDomainTransferabilityRequest = new CheckDomainTransferabilityRequest();
    $request->checkDomainTransferabilityRequest->authCode = 'porro';
    $request->checkDomainTransferabilityRequest->domainName = 'dolorum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = CheckDomainTransferabilityXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_TRANSFERABILITY;

    $response = $sdk->sdk->checkDomainTransferability($request);

    if ($response->checkDomainTransferabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

<p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->deleteDomainRequest = new DeleteDomainRequest();
    $request->deleteDomainRequest->domainName = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzTarget = DeleteDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_DELETE_DOMAIN;

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->deleteDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTagsForDomain

<p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsForDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagsForDomainRequest();
    $request->deleteTagsForDomainRequest = new DeleteTagsForDomainRequest();
    $request->deleteTagsForDomainRequest->domainName = 'cum';
    $request->deleteTagsForDomainRequest->tagsToDelete = [
        'ipsum',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = DeleteTagsForDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_DELETE_TAGS_FOR_DOMAIN;

    $response = $sdk->sdk->deleteTagsForDomain($request);

    if ($response->deleteTagsForDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableDomainAutoRenew

This operation disables automatic renewal of domain registration for the specified domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableDomainAutoRenewRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableDomainAutoRenewRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableDomainAutoRenewXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableDomainAutoRenewRequest();
    $request->disableDomainAutoRenewRequest = new DisableDomainAutoRenewRequest();
    $request->disableDomainAutoRenewRequest->domainName = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DisableDomainAutoRenewXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_DISABLE_DOMAIN_AUTO_RENEW;

    $response = $sdk->sdk->disableDomainAutoRenew($request);

    if ($response->disableDomainAutoRenewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableDomainTransferLock

This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableDomainTransferLockRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableDomainTransferLockRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableDomainTransferLockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableDomainTransferLockRequest();
    $request->disableDomainTransferLockRequest = new DisableDomainTransferLockRequest();
    $request->disableDomainTransferLockRequest->domainName = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DisableDomainTransferLockXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_DISABLE_DOMAIN_TRANSFER_LOCK;

    $response = $sdk->sdk->disableDomainTransferLock($request);

    if ($response->disableDomainTransferLockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDelegationSignerFromDomain

Deletes a delegation signer (DS) record in the registry zone for this domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDelegationSignerFromDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateDelegationSignerFromDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDelegationSignerFromDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDelegationSignerFromDomainRequest();
    $request->disassociateDelegationSignerFromDomainRequest = new DisassociateDelegationSignerFromDomainRequest();
    $request->disassociateDelegationSignerFromDomainRequest->domainName = 'laborum';
    $request->disassociateDelegationSignerFromDomainRequest->id = '2352c595-5907-4aff-9a3a-2fa946773925';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = DisassociateDelegationSignerFromDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_DISASSOCIATE_DELEGATION_SIGNER_FROM_DOMAIN;

    $response = $sdk->sdk->disassociateDelegationSignerFromDomain($request);

    if ($response->disassociateDelegationSignerFromDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableDomainAutoRenew

<p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableDomainAutoRenewRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableDomainAutoRenewRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableDomainAutoRenewXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableDomainAutoRenewRequest();
    $request->enableDomainAutoRenewRequest = new EnableDomainAutoRenewRequest();
    $request->enableDomainAutoRenewRequest->domainName = 'tenetur';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = EnableDomainAutoRenewXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_AUTO_RENEW;

    $response = $sdk->sdk->enableDomainAutoRenew($request);

    if ($response->enableDomainAutoRenewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableDomainTransferLock

This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableDomainTransferLockRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableDomainTransferLockRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableDomainTransferLockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableDomainTransferLockRequest();
    $request->enableDomainTransferLockRequest = new EnableDomainTransferLockRequest();
    $request->enableDomainTransferLockRequest->domainName = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = EnableDomainTransferLockXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_TRANSFER_LOCK;

    $response = $sdk->sdk->enableDomainTransferLock($request);

    if ($response->enableDomainTransferLockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactReachabilityStatus

<p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactReachabilityStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContactReachabilityStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactReachabilityStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactReachabilityStatusRequest();
    $request->getContactReachabilityStatusRequest = new GetContactReachabilityStatusRequest();
    $request->getContactReachabilityStatusRequest->domainName = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = GetContactReachabilityStatusXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_GET_CONTACT_REACHABILITY_STATUS;

    $response = $sdk->sdk->getContactReachabilityStatus($request);

    if ($response->getContactReachabilityStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainDetail

This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainDetailRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDomainDetailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainDetailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainDetailRequest();
    $request->getDomainDetailRequest = new GetDomainDetailRequest();
    $request->getDomainDetailRequest->domainName = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = GetDomainDetailXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_GET_DOMAIN_DETAIL;

    $response = $sdk->sdk->getDomainDetail($request);

    if ($response->getDomainDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainSuggestions

The GetDomainSuggestions operation returns a list of suggested domain names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDomainSuggestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainSuggestionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainSuggestionsRequest();
    $request->getDomainSuggestionsRequest = new GetDomainSuggestionsRequest();
    $request->getDomainSuggestionsRequest->domainName = 'accusamus';
    $request->getDomainSuggestionsRequest->onlyAvailable = false;
    $request->getDomainSuggestionsRequest->suggestionCount = 414263;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetDomainSuggestionsXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_GET_DOMAIN_SUGGESTIONS;

    $response = $sdk->sdk->getDomainSuggestions($request);

    if ($response->getDomainSuggestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperationDetail

This operation returns the current status of an operation that is not completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationDetailRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOperationDetailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationDetailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationDetailRequest();
    $request->getOperationDetailRequest = new GetOperationDetailRequest();
    $request->getOperationDetailRequest->operationId = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = GetOperationDetailXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_GET_OPERATION_DETAIL;

    $response = $sdk->sdk->getOperationDetail($request);

    if ($response->getOperationDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomains

This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterCondition;
use \OpenAPI\OpenAPI\Models\Shared\ListDomainsAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortCondition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->listDomainsRequest = new ListDomainsRequest();
    $request->listDomainsRequest->filterConditions = [
        new FilterCondition(),
        new FilterCondition(),
        new FilterCondition(),
        new FilterCondition(),
    ];
    $request->listDomainsRequest->marker = 'incidunt';
    $request->listDomainsRequest->maxItems = 318569;
    $request->listDomainsRequest->sortCondition = new SortCondition();
    $request->listDomainsRequest->sortCondition->name = ListDomainsAttributeNameEnum::DOMAIN_NAME;
    $request->listDomainsRequest->sortCondition->sortOrder = SortOrderEnum::DESC;
    $request->marker = 'quibusdam';
    $request->maxItems = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ListDomainsXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_LIST_DOMAINS;

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOperations

<p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOperationsSortAttributeNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOperationsRequest();
    $request->listOperationsRequest = new ListOperationsRequest();
    $request->listOperationsRequest->marker = 'cupiditate';
    $request->listOperationsRequest->maxItems = 552822;
    $request->listOperationsRequest->sortBy = ListOperationsSortAttributeNameEnum::SUBMITTED_DATE;
    $request->listOperationsRequest->sortOrder = SortOrderEnum::ASC;
    $request->listOperationsRequest->status = [
        OperationStatusEnum::FAILED,
    ];
    $request->listOperationsRequest->submittedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T06:52:02.282Z');
    $request->listOperationsRequest->type = [
        OperationTypeEnum::TRANSFER_OUT_DOMAIN,
    ];
    $request->marker = 'excepturi';
    $request->maxItems = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = ListOperationsXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_LIST_OPERATIONS;

    $response = $sdk->sdk->listOperations($request);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPrices

<p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPricesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPricesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPricesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPricesRequest();
    $request->listPricesRequest = new ListPricesRequest();
    $request->listPricesRequest->marker = 'sint';
    $request->listPricesRequest->maxItems = 396098;
    $request->listPricesRequest->tld = 'provident';
    $request->marker = 'necessitatibus';
    $request->maxItems = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListPricesXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_LIST_PRICES;

    $response = $sdk->sdk->listPrices($request);

    if ($response->listPricesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForDomain

<p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForDomainRequest();
    $request->listTagsForDomainRequest = new ListTagsForDomainRequest();
    $request->listTagsForDomainRequest->domainName = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ListTagsForDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_LIST_TAGS_FOR_DOMAIN;

    $response = $sdk->sdk->listTagsForDomain($request);

    if ($response->listTagsForDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pushDomain

<p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PushDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\PushDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\PushDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PushDomainRequest();
    $request->pushDomainRequest = new PushDomainRequest();
    $request->pushDomainRequest->domainName = 'aliquid';
    $request->pushDomainRequest->target = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = PushDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_PUSH_DOMAIN;

    $response = $sdk->sdk->pushDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerDomain

<p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetail;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParam;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParamNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDomainRequest();
    $request->registerDomainRequest = new RegisterDomainRequest();
    $request->registerDomainRequest->adminContact = new ContactDetail();
    $request->registerDomainRequest->adminContact->addressLine1 = 'provident';
    $request->registerDomainRequest->adminContact->addressLine2 = 'nam';
    $request->registerDomainRequest->adminContact->city = 'Kuvalisstad';
    $request->registerDomainRequest->adminContact->contactType = ContactTypeEnum::RESELLER;
    $request->registerDomainRequest->adminContact->countryCode = CountryCodeEnum::CZ;
    $request->registerDomainRequest->adminContact->email = 'Golda_Kassulke@yahoo.com';
    $request->registerDomainRequest->adminContact->extraParams = [
        new ExtraParam(),
        new ExtraParam(),
    ];
    $request->registerDomainRequest->adminContact->fax = 'perferendis';
    $request->registerDomainRequest->adminContact->firstName = 'Janice';
    $request->registerDomainRequest->adminContact->lastName = 'Gutkowski';
    $request->registerDomainRequest->adminContact->organizationName = 'distinctio';
    $request->registerDomainRequest->adminContact->phoneNumber = 'id';
    $request->registerDomainRequest->adminContact->state = 'labore';
    $request->registerDomainRequest->adminContact->zipCode = '36748';
    $request->registerDomainRequest->autoRenew = false;
    $request->registerDomainRequest->domainName = 'aspernatur';
    $request->registerDomainRequest->durationInYears = 102863;
    $request->registerDomainRequest->idnLangCode = 'magnam';
    $request->registerDomainRequest->privacyProtectAdminContact = false;
    $request->registerDomainRequest->privacyProtectRegistrantContact = false;
    $request->registerDomainRequest->privacyProtectTechContact = false;
    $request->registerDomainRequest->registrantContact = new ContactDetail();
    $request->registerDomainRequest->registrantContact->addressLine1 = 'et';
    $request->registerDomainRequest->registrantContact->addressLine2 = 'excepturi';
    $request->registerDomainRequest->registrantContact->city = 'New Katrina';
    $request->registerDomainRequest->registrantContact->contactType = ContactTypeEnum::ASSOCIATION;
    $request->registerDomainRequest->registrantContact->countryCode = CountryCodeEnum::AN;
    $request->registerDomainRequest->registrantContact->email = 'Vivienne43@yahoo.com';
    $request->registerDomainRequest->registrantContact->extraParams = [
        new ExtraParam(),
    ];
    $request->registerDomainRequest->registrantContact->fax = 'necessitatibus';
    $request->registerDomainRequest->registrantContact->firstName = 'Brown';
    $request->registerDomainRequest->registrantContact->lastName = 'Hilll';
    $request->registerDomainRequest->registrantContact->organizationName = 'quasi';
    $request->registerDomainRequest->registrantContact->phoneNumber = 'iure';
    $request->registerDomainRequest->registrantContact->state = 'doloribus';
    $request->registerDomainRequest->registrantContact->zipCode = '28574-1093';
    $request->registerDomainRequest->techContact = new ContactDetail();
    $request->registerDomainRequest->techContact->addressLine1 = 'expedita';
    $request->registerDomainRequest->techContact->addressLine2 = 'nihil';
    $request->registerDomainRequest->techContact->city = 'Southaven';
    $request->registerDomainRequest->techContact->contactType = ContactTypeEnum::PERSON;
    $request->registerDomainRequest->techContact->countryCode = CountryCodeEnum::TR;
    $request->registerDomainRequest->techContact->email = 'Alia_Crooks@hotmail.com';
    $request->registerDomainRequest->techContact->extraParams = [
        new ExtraParam(),
    ];
    $request->registerDomainRequest->techContact->fax = 'sunt';
    $request->registerDomainRequest->techContact->firstName = 'Orrin';
    $request->registerDomainRequest->techContact->lastName = 'Stanton';
    $request->registerDomainRequest->techContact->organizationName = 'pariatur';
    $request->registerDomainRequest->techContact->phoneNumber = 'maxime';
    $request->registerDomainRequest->techContact->state = 'ea';
    $request->registerDomainRequest->techContact->zipCode = '14009-6344';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = RegisterDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_REGISTER_DOMAIN;

    $response = $sdk->sdk->registerDomain($request);

    if ($response->registerDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectDomainTransferFromAnotherAwsAccount

<p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectDomainTransferFromAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectDomainTransferFromAnotherAwsAccountRequest();
    $request->rejectDomainTransferFromAnotherAwsAccountRequest = new RejectDomainTransferFromAnotherAwsAccountRequest();
    $request->rejectDomainTransferFromAnotherAwsAccountRequest->domainName = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT;

    $response = $sdk->sdk->rejectDomainTransferFromAnotherAwsAccount($request);

    if ($response->rejectDomainTransferFromAnotherAwsAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewDomain

<p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenewDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenewDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewDomainRequest();
    $request->renewDomainRequest = new RenewDomainRequest();
    $request->renewDomainRequest->currentExpiryYear = 339404;
    $request->renewDomainRequest->domainName = 'totam';
    $request->renewDomainRequest->durationInYears = 489549;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = RenewDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_RENEW_DOMAIN;

    $response = $sdk->sdk->renewDomain($request);

    if ($response->renewDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendContactReachabilityEmail

For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendContactReachabilityEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendContactReachabilityEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResendContactReachabilityEmailXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendContactReachabilityEmailRequest();
    $request->resendContactReachabilityEmailRequest = new ResendContactReachabilityEmailRequest();
    $request->resendContactReachabilityEmailRequest->domainName = 'quam';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ResendContactReachabilityEmailXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_RESEND_CONTACT_REACHABILITY_EMAIL;

    $response = $sdk->sdk->resendContactReachabilityEmail($request);

    if ($response->resendContactReachabilityEmailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendOperationAuthorization

 Resend the form of authorization email for this operation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendOperationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendOperationAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResendOperationAuthorizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendOperationAuthorizationRequest();
    $request->resendOperationAuthorizationRequest = new ResendOperationAuthorizationRequest();
    $request->resendOperationAuthorizationRequest->operationId = 'perspiciatis';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ResendOperationAuthorizationXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_RESEND_OPERATION_AUTHORIZATION;

    $response = $sdk->sdk->resendOperationAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveDomainAuthCode

This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDomainAuthCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetrieveDomainAuthCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveDomainAuthCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveDomainAuthCodeRequest();
    $request->retrieveDomainAuthCodeRequest = new RetrieveDomainAuthCodeRequest();
    $request->retrieveDomainAuthCodeRequest->domainName = 'rerum';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = RetrieveDomainAuthCodeXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_RETRIEVE_DOMAIN_AUTH_CODE;

    $response = $sdk->sdk->retrieveDomainAuthCode($request);

    if ($response->retrieveDomainAuthCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferDomain

<p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetail;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParam;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParamNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Nameserver;
use \OpenAPI\OpenAPI\Models\Operations\TransferDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferDomainRequest();
    $request->transferDomainRequest = new TransferDomainRequest();
    $request->transferDomainRequest->adminContact = new ContactDetail();
    $request->transferDomainRequest->adminContact->addressLine1 = 'pariatur';
    $request->transferDomainRequest->adminContact->addressLine2 = 'provident';
    $request->transferDomainRequest->adminContact->city = 'Rennerworth';
    $request->transferDomainRequest->adminContact->contactType = ContactTypeEnum::COMPANY;
    $request->transferDomainRequest->adminContact->countryCode = CountryCodeEnum::MC;
    $request->transferDomainRequest->adminContact->email = 'Coy18@yahoo.com';
    $request->transferDomainRequest->adminContact->extraParams = [
        new ExtraParam(),
    ];
    $request->transferDomainRequest->adminContact->fax = 'hic';
    $request->transferDomainRequest->adminContact->firstName = 'Kevin';
    $request->transferDomainRequest->adminContact->lastName = 'Ritchie';
    $request->transferDomainRequest->adminContact->organizationName = 'voluptate';
    $request->transferDomainRequest->adminContact->phoneNumber = 'dignissimos';
    $request->transferDomainRequest->adminContact->state = 'reiciendis';
    $request->transferDomainRequest->adminContact->zipCode = '62000';
    $request->transferDomainRequest->authCode = 'iure';
    $request->transferDomainRequest->autoRenew = false;
    $request->transferDomainRequest->domainName = 'odio';
    $request->transferDomainRequest->durationInYears = 311796;
    $request->transferDomainRequest->idnLangCode = 'accusamus';
    $request->transferDomainRequest->nameservers = [
        new Nameserver(),
        new Nameserver(),
        new Nameserver(),
    ];
    $request->transferDomainRequest->privacyProtectAdminContact = false;
    $request->transferDomainRequest->privacyProtectRegistrantContact = false;
    $request->transferDomainRequest->privacyProtectTechContact = false;
    $request->transferDomainRequest->registrantContact = new ContactDetail();
    $request->transferDomainRequest->registrantContact->addressLine1 = 'voluptatibus';
    $request->transferDomainRequest->registrantContact->addressLine2 = 'voluptas';
    $request->transferDomainRequest->registrantContact->city = 'Daughertystad';
    $request->transferDomainRequest->registrantContact->contactType = ContactTypeEnum::PERSON;
    $request->transferDomainRequest->registrantContact->countryCode = CountryCodeEnum::SZ;
    $request->transferDomainRequest->registrantContact->email = 'Natalie.Parisian@gmail.com';
    $request->transferDomainRequest->registrantContact->extraParams = [
        new ExtraParam(),
        new ExtraParam(),
        new ExtraParam(),
    ];
    $request->transferDomainRequest->registrantContact->fax = 'deleniti';
    $request->transferDomainRequest->registrantContact->firstName = 'Lenny';
    $request->transferDomainRequest->registrantContact->lastName = 'Treutel';
    $request->transferDomainRequest->registrantContact->organizationName = 'distinctio';
    $request->transferDomainRequest->registrantContact->phoneNumber = 'asperiores';
    $request->transferDomainRequest->registrantContact->state = 'nihil';
    $request->transferDomainRequest->registrantContact->zipCode = '46921';
    $request->transferDomainRequest->techContact = new ContactDetail();
    $request->transferDomainRequest->techContact->addressLine1 = 'perferendis';
    $request->transferDomainRequest->techContact->addressLine2 = 'amet';
    $request->transferDomainRequest->techContact->city = 'Thompsonborough';
    $request->transferDomainRequest->techContact->contactType = ContactTypeEnum::RESELLER;
    $request->transferDomainRequest->techContact->countryCode = CountryCodeEnum::HK;
    $request->transferDomainRequest->techContact->email = 'Ladarius_Hane62@yahoo.com';
    $request->transferDomainRequest->techContact->extraParams = [
        new ExtraParam(),
    ];
    $request->transferDomainRequest->techContact->fax = 'at';
    $request->transferDomainRequest->techContact->firstName = 'Elvis';
    $request->transferDomainRequest->techContact->lastName = 'Goodwin';
    $request->transferDomainRequest->techContact->organizationName = 'vel';
    $request->transferDomainRequest->techContact->phoneNumber = 'quod';
    $request->transferDomainRequest->techContact->state = 'officiis';
    $request->transferDomainRequest->techContact->zipCode = '69464';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = TransferDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_TRANSFER_DOMAIN;

    $response = $sdk->sdk->transferDomain($request);

    if ($response->transferDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferDomainToAnotherAwsAccount

<p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TransferDomainToAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferDomainToAnotherAwsAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferDomainToAnotherAwsAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferDomainToAnotherAwsAccountRequest();
    $request->transferDomainToAnotherAwsAccountRequest = new TransferDomainToAnotherAwsAccountRequest();
    $request->transferDomainToAnotherAwsAccountRequest->accountId = 'enim';
    $request->transferDomainToAnotherAwsAccountRequest->domainName = 'dolorem';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = TransferDomainToAnotherAwsAccountXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT;

    $response = $sdk->sdk->transferDomainToAnotherAwsAccount($request);

    if ($response->transferDomainToAnotherAwsAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainContact

<p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactDetail;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CountryCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParam;
use \OpenAPI\OpenAPI\Models\Shared\ExtraParamNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consent;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainContactRequest();
    $request->updateDomainContactRequest = new UpdateDomainContactRequest();
    $request->updateDomainContactRequest->adminContact = new ContactDetail();
    $request->updateDomainContactRequest->adminContact->addressLine1 = 'vel';
    $request->updateDomainContactRequest->adminContact->addressLine2 = 'libero';
    $request->updateDomainContactRequest->adminContact->city = 'Lake Jamaal';
    $request->updateDomainContactRequest->adminContact->contactType = ContactTypeEnum::COMPANY;
    $request->updateDomainContactRequest->adminContact->countryCode = CountryCodeEnum::ES;
    $request->updateDomainContactRequest->adminContact->email = 'Kylie_Schoen11@gmail.com';
    $request->updateDomainContactRequest->adminContact->extraParams = [
        new ExtraParam(),
        new ExtraParam(),
        new ExtraParam(),
    ];
    $request->updateDomainContactRequest->adminContact->fax = 'totam';
    $request->updateDomainContactRequest->adminContact->firstName = 'Doyle';
    $request->updateDomainContactRequest->adminContact->lastName = 'Cole';
    $request->updateDomainContactRequest->adminContact->organizationName = 'dolores';
    $request->updateDomainContactRequest->adminContact->phoneNumber = 'distinctio';
    $request->updateDomainContactRequest->adminContact->state = 'facilis';
    $request->updateDomainContactRequest->adminContact->zipCode = '45812';
    $request->updateDomainContactRequest->consent = new Consent();
    $request->updateDomainContactRequest->consent->currency = 'fugit';
    $request->updateDomainContactRequest->consent->maxPrice = 1649.59;
    $request->updateDomainContactRequest->domainName = 'odio';
    $request->updateDomainContactRequest->registrantContact = new ContactDetail();
    $request->updateDomainContactRequest->registrantContact->addressLine1 = 'sunt';
    $request->updateDomainContactRequest->registrantContact->addressLine2 = 'ullam';
    $request->updateDomainContactRequest->registrantContact->city = 'Weimanntown';
    $request->updateDomainContactRequest->registrantContact->contactType = ContactTypeEnum::PUBLIC_BODY;
    $request->updateDomainContactRequest->registrantContact->countryCode = CountryCodeEnum::PY;
    $request->updateDomainContactRequest->registrantContact->email = 'August8@hotmail.com';
    $request->updateDomainContactRequest->registrantContact->extraParams = [
        new ExtraParam(),
        new ExtraParam(),
        new ExtraParam(),
    ];
    $request->updateDomainContactRequest->registrantContact->fax = 'quos';
    $request->updateDomainContactRequest->registrantContact->firstName = 'Mose';
    $request->updateDomainContactRequest->registrantContact->lastName = 'McDermott';
    $request->updateDomainContactRequest->registrantContact->organizationName = 'aperiam';
    $request->updateDomainContactRequest->registrantContact->phoneNumber = 'delectus';
    $request->updateDomainContactRequest->registrantContact->state = 'dolorem';
    $request->updateDomainContactRequest->registrantContact->zipCode = '22610';
    $request->updateDomainContactRequest->techContact = new ContactDetail();
    $request->updateDomainContactRequest->techContact->addressLine1 = 'aut';
    $request->updateDomainContactRequest->techContact->addressLine2 = 'quas';
    $request->updateDomainContactRequest->techContact->city = 'Aliso Viejo';
    $request->updateDomainContactRequest->techContact->contactType = ContactTypeEnum::PUBLIC_BODY;
    $request->updateDomainContactRequest->techContact->countryCode = CountryCodeEnum::SS;
    $request->updateDomainContactRequest->techContact->email = 'Wilton_Grady18@hotmail.com';
    $request->updateDomainContactRequest->techContact->extraParams = [
        new ExtraParam(),
    ];
    $request->updateDomainContactRequest->techContact->fax = 'laudantium';
    $request->updateDomainContactRequest->techContact->firstName = 'Jeanette';
    $request->updateDomainContactRequest->techContact->lastName = 'McClure';
    $request->updateDomainContactRequest->techContact->organizationName = 'voluptatibus';
    $request->updateDomainContactRequest->techContact->phoneNumber = 'quisquam';
    $request->updateDomainContactRequest->techContact->state = 'vero';
    $request->updateDomainContactRequest->techContact->zipCode = '32942-8949';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = UpdateDomainContactXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_CONTACT;

    $response = $sdk->sdk->updateDomainContact($request);

    if ($response->updateDomainContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainContactPrivacy

<p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainContactPrivacyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainContactPrivacyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainContactPrivacyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainContactPrivacyRequest();
    $request->updateDomainContactPrivacyRequest = new UpdateDomainContactPrivacyRequest();
    $request->updateDomainContactPrivacyRequest->adminPrivacy = false;
    $request->updateDomainContactPrivacyRequest->domainName = 'dolore';
    $request->updateDomainContactPrivacyRequest->registrantPrivacy = false;
    $request->updateDomainContactPrivacyRequest->techPrivacy = false;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = UpdateDomainContactPrivacyXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_CONTACT_PRIVACY;

    $response = $sdk->sdk->updateDomainContactPrivacy($request);

    if ($response->updateDomainContactPrivacyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainNameservers

<p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameserversRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDomainNameserversRequest;
use \OpenAPI\OpenAPI\Models\Shared\Nameserver;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainNameserversXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainNameserversRequest();
    $request->updateDomainNameserversRequest = new UpdateDomainNameserversRequest();
    $request->updateDomainNameserversRequest->domainName = 'exercitationem';
    $request->updateDomainNameserversRequest->fiAuthKey = 'nulla';
    $request->updateDomainNameserversRequest->nameservers = [
        new Nameserver(),
    ];
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = UpdateDomainNameserversXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_NAMESERVERS;

    $response = $sdk->sdk->updateDomainNameservers($request);

    if ($response->updateDomainNameserversResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTagsForDomain

<p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTagsForDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagsForDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagsForDomainRequest();
    $request->updateTagsForDomainRequest = new UpdateTagsForDomainRequest();
    $request->updateTagsForDomainRequest->domainName = 'officia';
    $request->updateTagsForDomainRequest->tagsToUpdate = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = UpdateTagsForDomainXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_UPDATE_TAGS_FOR_DOMAIN;

    $response = $sdk->sdk->updateTagsForDomain($request);

    if ($response->updateTagsForDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## viewBilling

Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ViewBillingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ViewBillingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ViewBillingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ViewBillingRequest();
    $request->marker = 'ex';
    $request->maxItems = 'laudantium';
    $request->viewBillingRequest = new ViewBillingRequest();
    $request->viewBillingRequest->end = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T02:58:57.556Z');
    $request->viewBillingRequest->marker = 'maiores';
    $request->viewBillingRequest->maxItems = 97844;
    $request->viewBillingRequest->start = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T07:12:08.273Z');
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ViewBillingXAmzTargetEnum::ROUTE53_DOMAINS_V20140515_VIEW_BILLING;

    $response = $sdk->sdk->viewBilling($request);

    if ($response->viewBillingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
