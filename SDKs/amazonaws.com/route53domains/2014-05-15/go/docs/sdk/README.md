# SDK

## Overview

Amazon Route 53 API actions let you register domain names and perform related operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53domains/>
### Available Operations

* [AcceptDomainTransferFromAnotherAwsAccount](#acceptdomaintransferfromanotherawsaccount) - <p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [AssociateDelegationSignerToDomain](#associatedelegationsignertodomain) - <p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>
* [CancelDomainTransferToAnotherAwsAccount](#canceldomaintransfertoanotherawsaccount) - <p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [CheckDomainAvailability](#checkdomainavailability) - This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
* [CheckDomainTransferability](#checkdomaintransferability) - Checks whether a domain name can be transferred to Amazon Route 53. 
* [DeleteDomain](#deletedomain) - <p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>
* [DeleteTagsForDomain](#deletetagsfordomain) - <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [DisableDomainAutoRenew](#disabledomainautorenew) - This operation disables automatic renewal of domain registration for the specified domain.
* [DisableDomainTransferLock](#disabledomaintransferlock) - This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
* [DisassociateDelegationSignerFromDomain](#disassociatedelegationsignerfromdomain) - Deletes a delegation signer (DS) record in the registry zone for this domain name.
* [EnableDomainAutoRenew](#enabledomainautorenew) - <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
* [EnableDomainTransferLock](#enabledomaintransferlock) - This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
* [GetContactReachabilityStatus](#getcontactreachabilitystatus) - <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
* [GetDomainDetail](#getdomaindetail) - This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.
* [GetDomainSuggestions](#getdomainsuggestions) - The GetDomainSuggestions operation returns a list of suggested domain names.
* [GetOperationDetail](#getoperationdetail) - This operation returns the current status of an operation that is not completed.
* [ListDomains](#listdomains) - This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.
* [ListOperations](#listoperations) - <p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>
* [ListPrices](#listprices) - <p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>
* [ListTagsForDomain](#listtagsfordomain) - <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [PushDomain](#pushdomain) - <p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>
* [RegisterDomain](#registerdomain) - <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
* [RejectDomainTransferFromAnotherAwsAccount](#rejectdomaintransferfromanotherawsaccount) - <p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [RenewDomain](#renewdomain) - <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
* [ResendContactReachabilityEmail](#resendcontactreachabilityemail) - For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
* [ResendOperationAuthorization](#resendoperationauthorization) -  Resend the form of authorization email for this operation. 
* [RetrieveDomainAuthCode](#retrievedomainauthcode) - This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
* [TransferDomain](#transferdomain) - <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
* [TransferDomainToAnotherAwsAccount](#transferdomaintoanotherawsaccount) - <p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
* [UpdateDomainContact](#updatedomaincontact) - <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>
* [UpdateDomainContactPrivacy](#updatedomaincontactprivacy) - <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
* [UpdateDomainNameservers](#updatedomainnameservers) - <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
* [UpdateTagsForDomain](#updatetagsfordomain) - <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
* [ViewBilling](#viewbilling) - Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

## AcceptDomainTransferFromAnotherAwsAccount

<p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AcceptDomainTransferFromAnotherAwsAccount(ctx, operations.AcceptDomainTransferFromAnotherAwsAccountRequest{
        AcceptDomainTransferFromAnotherAwsAccountRequest: shared.AcceptDomainTransferFromAnotherAwsAccountRequest{
            DomainName: "error",
            Password: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDomainTransferFromAnotherAwsAccountResponse != nil {
        // handle response
    }
}
```

## AssociateDelegationSignerToDomain

<p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateDelegationSignerToDomain(ctx, operations.AssociateDelegationSignerToDomainRequest{
        AssociateDelegationSignerToDomainRequest: shared.AssociateDelegationSignerToDomainRequest{
            DomainName: "suscipit",
            SigningAttributes: shared.DnssecSigningAttributes{
                Algorithm: sdk.Int64(477665),
                Flags: sdk.Int64(791725),
                PublicKey: sdk.String("placeat"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.AssociateDelegationSignerToDomainXAmzTargetEnumRoute53DomainsV20140515AssociateDelegationSignerToDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegationSignerToDomainResponse != nil {
        // handle response
    }
}
```

## CancelDomainTransferToAnotherAwsAccount

<p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelDomainTransferToAnotherAwsAccount(ctx, operations.CancelDomainTransferToAnotherAwsAccountRequest{
        CancelDomainTransferToAnotherAwsAccountRequest: shared.CancelDomainTransferToAnotherAwsAccountRequest{
            DomainName: "quis",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.CancelDomainTransferToAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelDomainTransferToAnotherAwsAccountResponse != nil {
        // handle response
    }
}
```

## CheckDomainAvailability

This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CheckDomainAvailability(ctx, operations.CheckDomainAvailabilityRequest{
        CheckDomainAvailabilityRequest: shared.CheckDomainAvailabilityRequest{
            DomainName: "odit",
            IdnLangCode: sdk.String("at"),
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.CheckDomainAvailabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainAvailability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomainAvailabilityResponse != nil {
        // handle response
    }
}
```

## CheckDomainTransferability

Checks whether a domain name can be transferred to Amazon Route 53. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CheckDomainTransferability(ctx, operations.CheckDomainTransferabilityRequest{
        CheckDomainTransferabilityRequest: shared.CheckDomainTransferabilityRequest{
            AuthCode: sdk.String("porro"),
            DomainName: "dolorum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CheckDomainTransferabilityXAmzTargetEnumRoute53DomainsV20140515CheckDomainTransferability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomainTransferabilityResponse != nil {
        // handle response
    }
}
```

## DeleteDomain

<p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        DeleteDomainRequest: shared.DeleteDomainRequest{
            DomainName: "optio",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DeleteDomainXAmzTargetEnumRoute53DomainsV20140515DeleteDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainResponse != nil {
        // handle response
    }
}
```

## DeleteTagsForDomain

<p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTagsForDomain(ctx, operations.DeleteTagsForDomainRequest{
        DeleteTagsForDomainRequest: shared.DeleteTagsForDomainRequest{
            DomainName: "cum",
            TagsToDelete: []string{
                "ipsum",
                "excepturi",
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeleteTagsForDomainXAmzTargetEnumRoute53DomainsV20140515DeleteTagsForDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagsForDomainResponse != nil {
        // handle response
    }
}
```

## DisableDomainAutoRenew

This operation disables automatic renewal of domain registration for the specified domain.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableDomainAutoRenew(ctx, operations.DisableDomainAutoRenewRequest{
        DisableDomainAutoRenewRequest: shared.DisableDomainAutoRenewRequest{
            DomainName: "natus",
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.DisableDomainAutoRenewXAmzTargetEnumRoute53DomainsV20140515DisableDomainAutoRenew,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableDomainAutoRenewResponse != nil {
        // handle response
    }
}
```

## DisableDomainTransferLock

This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableDomainTransferLock(ctx, operations.DisableDomainTransferLockRequest{
        DisableDomainTransferLockRequest: shared.DisableDomainTransferLockRequest{
            DomainName: "iure",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.DisableDomainTransferLockXAmzTargetEnumRoute53DomainsV20140515DisableDomainTransferLock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableDomainTransferLockResponse != nil {
        // handle response
    }
}
```

## DisassociateDelegationSignerFromDomain

Deletes a delegation signer (DS) record in the registry zone for this domain name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateDelegationSignerFromDomain(ctx, operations.DisassociateDelegationSignerFromDomainRequest{
        DisassociateDelegationSignerFromDomainRequest: shared.DisassociateDelegationSignerFromDomainRequest{
            DomainName: "laborum",
            ID: "2352c595-5907-4aff-9a3a-2fa946773925",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.DisassociateDelegationSignerFromDomainXAmzTargetEnumRoute53DomainsV20140515DisassociateDelegationSignerFromDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDelegationSignerFromDomainResponse != nil {
        // handle response
    }
}
```

## EnableDomainAutoRenew

<p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableDomainAutoRenew(ctx, operations.EnableDomainAutoRenewRequest{
        EnableDomainAutoRenewRequest: shared.EnableDomainAutoRenewRequest{
            DomainName: "tenetur",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.EnableDomainAutoRenewXAmzTargetEnumRoute53DomainsV20140515EnableDomainAutoRenew,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableDomainAutoRenewResponse != nil {
        // handle response
    }
}
```

## EnableDomainTransferLock

This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableDomainTransferLock(ctx, operations.EnableDomainTransferLockRequest{
        EnableDomainTransferLockRequest: shared.EnableDomainTransferLockRequest{
            DomainName: "laborum",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.EnableDomainTransferLockXAmzTargetEnumRoute53DomainsV20140515EnableDomainTransferLock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableDomainTransferLockResponse != nil {
        // handle response
    }
}
```

## GetContactReachabilityStatus

<p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContactReachabilityStatus(ctx, operations.GetContactReachabilityStatusRequest{
        GetContactReachabilityStatusRequest: shared.GetContactReachabilityStatusRequest{
            DomainName: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.GetContactReachabilityStatusXAmzTargetEnumRoute53DomainsV20140515GetContactReachabilityStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContactReachabilityStatusResponse != nil {
        // handle response
    }
}
```

## GetDomainDetail

This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainDetail(ctx, operations.GetDomainDetailRequest{
        GetDomainDetailRequest: shared.GetDomainDetailRequest{
            DomainName: "maiores",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.GetDomainDetailXAmzTargetEnumRoute53DomainsV20140515GetDomainDetail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainDetailResponse != nil {
        // handle response
    }
}
```

## GetDomainSuggestions

The GetDomainSuggestions operation returns a list of suggested domain names.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomainSuggestions(ctx, operations.GetDomainSuggestionsRequest{
        GetDomainSuggestionsRequest: shared.GetDomainSuggestionsRequest{
            DomainName: "accusamus",
            OnlyAvailable: false,
            SuggestionCount: 414263,
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.GetDomainSuggestionsXAmzTargetEnumRoute53DomainsV20140515GetDomainSuggestions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainSuggestionsResponse != nil {
        // handle response
    }
}
```

## GetOperationDetail

This operation returns the current status of an operation that is not completed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOperationDetail(ctx, operations.GetOperationDetailRequest{
        GetOperationDetailRequest: shared.GetOperationDetailRequest{
            OperationID: "modi",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.GetOperationDetailXAmzTargetEnumRoute53DomainsV20140515GetOperationDetail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOperationDetailResponse != nil {
        // handle response
    }
}
```

## ListDomains

This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        ListDomainsRequest: shared.ListDomainsRequest{
            FilterConditions: []shared.FilterCondition{
                shared.FilterCondition{
                    Name: shared.ListDomainsAttributeNameEnumDomainName,
                    Operator: shared.OperatorEnumLe,
                    Values: []string{
                        "est",
                    },
                },
                shared.FilterCondition{
                    Name: shared.ListDomainsAttributeNameEnumExpiry,
                    Operator: shared.OperatorEnumLe,
                    Values: []string{
                        "distinctio",
                        "quibusdam",
                        "labore",
                    },
                },
                shared.FilterCondition{
                    Name: shared.ListDomainsAttributeNameEnumDomainName,
                    Operator: shared.OperatorEnumLe,
                    Values: []string{
                        "cupiditate",
                        "quos",
                    },
                },
                shared.FilterCondition{
                    Name: shared.ListDomainsAttributeNameEnumDomainName,
                    Operator: shared.OperatorEnumLe,
                    Values: []string{
                        "ipsam",
                        "alias",
                        "fugit",
                        "dolorum",
                    },
                },
            },
            Marker: sdk.String("excepturi"),
            MaxItems: sdk.Int64(270008),
            SortCondition: &shared.SortCondition{
                Name: shared.ListDomainsAttributeNameEnumExpiry,
                SortOrder: shared.SortOrderEnumDesc,
            },
        },
        Marker: sdk.String("labore"),
        MaxItems: sdk.String("delectus"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ListDomainsXAmzTargetEnumRoute53DomainsV20140515ListDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ListOperations

<p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOperations(ctx, operations.ListOperationsRequest{
        ListOperationsRequest: shared.ListOperationsRequest{
            Marker: sdk.String("sint"),
            MaxItems: sdk.Int64(638921),
            SortBy: shared.ListOperationsSortAttributeNameEnumSubmittedDate.ToPointer(),
            SortOrder: shared.SortOrderEnumAsc.ToPointer(),
            Status: []shared.OperationStatusEnum{
                shared.OperationStatusEnumFailed,
                shared.OperationStatusEnumSuccessful,
                shared.OperationStatusEnumError,
                shared.OperationStatusEnumError,
            },
            SubmittedSince: types.MustTimeFromString("2020-01-25T11:09:22.009Z"),
            Type: []shared.OperationTypeEnum{
                shared.OperationTypeEnumTransferInDomain,
                shared.OperationTypeEnumChangePrivacyProtection,
                shared.OperationTypeEnumChangeDomainOwner,
            },
        },
        Marker: sdk.String("facere"),
        MaxItems: sdk.String("ea"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.ListOperationsXAmzTargetEnumRoute53DomainsV20140515ListOperations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ListPrices

<p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPrices(ctx, operations.ListPricesRequest{
        ListPricesRequest: shared.ListPricesRequest{
            Marker: sdk.String("delectus"),
            MaxItems: sdk.Int64(692532),
            Tld: sdk.String("provident"),
        },
        Marker: sdk.String("nam"),
        MaxItems: sdk.String("id"),
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListPricesXAmzTargetEnumRoute53DomainsV20140515ListPrices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPricesResponse != nil {
        // handle response
    }
}
```

## ListTagsForDomain

<p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForDomain(ctx, operations.ListTagsForDomainRequest{
        ListTagsForDomainRequest: shared.ListTagsForDomainRequest{
            DomainName: "natus",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListTagsForDomainXAmzTargetEnumRoute53DomainsV20140515ListTagsForDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForDomainResponse != nil {
        // handle response
    }
}
```

## PushDomain

<p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PushDomain(ctx, operations.PushDomainRequest{
        PushDomainRequest: shared.PushDomainRequest{
            DomainName: "labore",
            Target: "labore",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.PushDomainXAmzTargetEnumRoute53DomainsV20140515PushDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterDomain

<p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterDomain(ctx, operations.RegisterDomainRequest{
        RegisterDomainRequest: shared.RegisterDomainRequest{
            AdminContact: shared.ContactDetail{
                AddressLine1: sdk.String("magnam"),
                AddressLine2: sdk.String("et"),
                City: sdk.String("Fernestead"),
                ContactType: shared.ContactTypeEnumAssociation.ToPointer(),
                CountryCode: shared.CountryCodeEnumMh.ToPointer(),
                Email: sdk.String("Madaline.Wisozk@gmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumDocumentNumber,
                        Value: "necessitatibus",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumBirthCountry,
                        Value: "nemo",
                    },
                },
                Fax: sdk.String("quasi"),
                FirstName: sdk.String("Hubert"),
                LastName: sdk.String("Wyman"),
                OrganizationName: sdk.String("debitis"),
                PhoneNumber: sdk.String("eius"),
                State: sdk.String("maxime"),
                ZipCode: sdk.String("74109-3749"),
            },
            AutoRenew: sdk.Bool(false),
            DomainName: "quibusdam",
            DurationInYears: 149448,
            IdnLangCode: sdk.String("saepe"),
            PrivacyProtectAdminContact: sdk.Bool(false),
            PrivacyProtectRegistrantContact: sdk.Bool(false),
            PrivacyProtectTechContact: sdk.Bool(false),
            RegistrantContact: shared.ContactDetail{
                AddressLine1: sdk.String("pariatur"),
                AddressLine2: sdk.String("accusantium"),
                City: sdk.String("New Leviville"),
                ContactType: shared.ContactTypeEnumPerson.ToPointer(),
                CountryCode: shared.CountryCodeEnumSb.ToPointer(),
                Email: sdk.String("Samantha_Schoen@hotmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumCaLegalRepresentativeCapacity,
                        Value: "accusantium",
                    },
                },
                Fax: sdk.String("ab"),
                FirstName: sdk.String("Willow"),
                LastName: sdk.String("Predovic"),
                OrganizationName: sdk.String("ipsam"),
                PhoneNumber: sdk.String("voluptate"),
                State: sdk.String("autem"),
                ZipCode: sdk.String("08390-8207"),
            },
            TechContact: shared.ContactDetail{
                AddressLine1: sdk.String("corporis"),
                AddressLine2: sdk.String("hic"),
                City: sdk.String("Rohanville"),
                ContactType: shared.ContactTypeEnumCompany.ToPointer(),
                CountryCode: shared.CountryCodeEnumLi.ToPointer(),
                Email: sdk.String("Amos17@yahoo.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumBirthCity,
                        Value: "minus",
                    },
                },
                Fax: sdk.String("quam"),
                FirstName: sdk.String("Damon"),
                LastName: sdk.String("Swift"),
                OrganizationName: sdk.String("nostrum"),
                PhoneNumber: sdk.String("hic"),
                State: sdk.String("recusandae"),
                ZipCode: sdk.String("75071-5605"),
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.RegisterDomainXAmzTargetEnumRoute53DomainsV20140515RegisterDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDomainResponse != nil {
        // handle response
    }
}
```

## RejectDomainTransferFromAnotherAwsAccount

<p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RejectDomainTransferFromAnotherAwsAccount(ctx, operations.RejectDomainTransferFromAnotherAwsAccountRequest{
        RejectDomainTransferFromAnotherAwsAccountRequest: shared.RejectDomainTransferFromAnotherAwsAccountRequest{
            DomainName: "deleniti",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectDomainTransferFromAnotherAwsAccountResponse != nil {
        // handle response
    }
}
```

## RenewDomain

<p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RenewDomain(ctx, operations.RenewDomainRequest{
        RenewDomainRequest: shared.RenewDomainRequest{
            CurrentExpiryYear: 398221,
            DomainName: "dolorem",
            DurationInYears: sdk.Int64(209843),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.RenewDomainXAmzTargetEnumRoute53DomainsV20140515RenewDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewDomainResponse != nil {
        // handle response
    }
}
```

## ResendContactReachabilityEmail

For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResendContactReachabilityEmail(ctx, operations.ResendContactReachabilityEmailRequest{
        ResendContactReachabilityEmailRequest: shared.ResendContactReachabilityEmailRequest{
            DomainName: sdk.String("dignissimos"),
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.ResendContactReachabilityEmailXAmzTargetEnumRoute53DomainsV20140515ResendContactReachabilityEmail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResendContactReachabilityEmailResponse != nil {
        // handle response
    }
}
```

## ResendOperationAuthorization

 Resend the form of authorization email for this operation. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResendOperationAuthorization(ctx, operations.ResendOperationAuthorizationRequest{
        ResendOperationAuthorizationRequest: shared.ResendOperationAuthorizationRequest{
            OperationID: "iure",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ResendOperationAuthorizationXAmzTargetEnumRoute53DomainsV20140515ResendOperationAuthorization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveDomainAuthCode

This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RetrieveDomainAuthCode(ctx, operations.RetrieveDomainAuthCodeRequest{
        RetrieveDomainAuthCodeRequest: shared.RetrieveDomainAuthCodeRequest{
            DomainName: "eos",
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.RetrieveDomainAuthCodeXAmzTargetEnumRoute53DomainsV20140515RetrieveDomainAuthCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveDomainAuthCodeResponse != nil {
        // handle response
    }
}
```

## TransferDomain

<p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TransferDomain(ctx, operations.TransferDomainRequest{
        TransferDomainRequest: shared.TransferDomainRequest{
            AdminContact: shared.ContactDetail{
                AddressLine1: sdk.String("voluptate"),
                AddressLine2: sdk.String("dolorum"),
                City: sdk.String("Lennyside"),
                ContactType: shared.ContactTypeEnumPublicBody.ToPointer(),
                CountryCode: shared.CountryCodeEnumZa.ToPointer(),
                Email: sdk.String("Curt_Klocko@yahoo.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumBirthCountry,
                        Value: "perferendis",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumAuIDNumber,
                        Value: "optio",
                    },
                },
                Fax: sdk.String("accusamus"),
                FirstName: sdk.String("Emmanuelle"),
                LastName: sdk.String("Turner"),
                OrganizationName: sdk.String("suscipit"),
                PhoneNumber: sdk.String("deserunt"),
                State: sdk.String("provident"),
                ZipCode: sdk.String("85608"),
            },
            AuthCode: sdk.String("quaerat"),
            AutoRenew: sdk.Bool(false),
            DomainName: "tempora",
            DurationInYears: 425451,
            IdnLangCode: sdk.String("quod"),
            Nameservers: []shared.Nameserver{
                shared.Nameserver{
                    GlueIps: []string{
                        "dolorum",
                    },
                    Name: "Cory Pfeffer",
                },
                shared.Nameserver{
                    GlueIps: []string{
                        "tenetur",
                        "amet",
                        "tempore",
                        "accusamus",
                    },
                    Name: "Darlene Effertz",
                },
                shared.Nameserver{
                    GlueIps: []string{
                        "sit",
                        "expedita",
                    },
                    Name: "Jane Kassulke",
                },
                shared.Nameserver{
                    GlueIps: []string{
                        "quam",
                        "ipsum",
                        "incidunt",
                    },
                    Name: "Shelly Schoen",
                },
            },
            PrivacyProtectAdminContact: sdk.Bool(false),
            PrivacyProtectRegistrantContact: sdk.Bool(false),
            PrivacyProtectTechContact: sdk.Bool(false),
            RegistrantContact: shared.ContactDetail{
                AddressLine1: sdk.String("dicta"),
                AddressLine2: sdk.String("laborum"),
                City: sdk.String("Doyleville"),
                ContactType: shared.ContactTypeEnumPerson.ToPointer(),
                CountryCode: shared.CountryCodeEnumPk.ToPointer(),
                Email: sdk.String("Grace_Kohler@hotmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumDocumentNumber,
                        Value: "fugit",
                    },
                },
                Fax: sdk.String("magni"),
                FirstName: sdk.String("Jefferey"),
                LastName: sdk.String("Cassin"),
                OrganizationName: sdk.String("ullam"),
                PhoneNumber: sdk.String("nam"),
                State: sdk.String("hic"),
                ZipCode: sdk.String("77709"),
            },
            TechContact: shared.ContactDetail{
                AddressLine1: sdk.String("ipsum"),
                AddressLine2: sdk.String("veritatis"),
                City: sdk.String("Lueilwitzcester"),
                ContactType: shared.ContactTypeEnumAssociation.ToPointer(),
                CountryCode: shared.CountryCodeEnumAr.ToPointer(),
                Email: sdk.String("Corene24@hotmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumBirthDateInYyyyMmDd,
                        Value: "quae",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumDunsNumber,
                        Value: "quas",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumUkCompanyNumber,
                        Value: "consequatur",
                    },
                },
                Fax: sdk.String("est"),
                FirstName: sdk.String("River"),
                LastName: sdk.String("Schaden"),
                OrganizationName: sdk.String("doloribus"),
                PhoneNumber: sdk.String("ut"),
                State: sdk.String("facilis"),
                ZipCode: sdk.String("10545-9786"),
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.TransferDomainXAmzTargetEnumRoute53DomainsV20140515TransferDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferDomainResponse != nil {
        // handle response
    }
}
```

## TransferDomainToAnotherAwsAccount

<p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TransferDomainToAnotherAwsAccount(ctx, operations.TransferDomainToAnotherAwsAccountRequest{
        TransferDomainToAnotherAwsAccountRequest: shared.TransferDomainToAnotherAwsAccountRequest{
            AccountID: "dignissimos",
            DomainName: "hic",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.TransferDomainToAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515TransferDomainToAnotherAwsAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferDomainToAnotherAwsAccountResponse != nil {
        // handle response
    }
}
```

## UpdateDomainContact

<p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDomainContact(ctx, operations.UpdateDomainContactRequest{
        UpdateDomainContactRequest: shared.UpdateDomainContactRequest{
            AdminContact: &shared.ContactDetail{
                AddressLine1: sdk.String("dolore"),
                AddressLine2: sdk.String("quibusdam"),
                City: sdk.String("Collierville"),
                ContactType: shared.ContactTypeEnumPublicBody.ToPointer(),
                CountryCode: shared.CountryCodeEnumSa.ToPointer(),
                Email: sdk.String("Webster.Heidenreich78@gmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumAuPriorityToken,
                        Value: "iusto",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumRuPassportData,
                        Value: "ducimus",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumDunsNumber,
                        Value: "officia",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumAuIDType,
                        Value: "ipsam",
                    },
                },
                Fax: sdk.String("ea"),
                FirstName: sdk.String("Brielle"),
                LastName: sdk.String("Keebler"),
                OrganizationName: sdk.String("possimus"),
                PhoneNumber: sdk.String("magnam"),
                State: sdk.String("ratione"),
                ZipCode: sdk.String("51290"),
            },
            Consent: &shared.Consent{
                Currency: "ex",
                MaxPrice: 8621.92,
            },
            DomainName: "excepturi",
            RegistrantContact: &shared.ContactDetail{
                AddressLine1: sdk.String("voluptatibus"),
                AddressLine2: sdk.String("nostrum"),
                City: sdk.String("San Leandro"),
                ContactType: shared.ContactTypeEnumReseller.ToPointer(),
                CountryCode: shared.CountryCodeEnumIe.ToPointer(),
                Email: sdk.String("Flossie.Hartmann@hotmail.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumCaLegalRepresentativeCapacity,
                        Value: "quo",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumAuIDNumber,
                        Value: "recusandae",
                    },
                },
                Fax: sdk.String("aspernatur"),
                FirstName: sdk.String("Eriberto"),
                LastName: sdk.String("Becker"),
                OrganizationName: sdk.String("a"),
                PhoneNumber: sdk.String("libero"),
                State: sdk.String("aut"),
                ZipCode: sdk.String("57318"),
            },
            TechContact: &shared.ContactDetail{
                AddressLine1: sdk.String("inventore"),
                AddressLine2: sdk.String("non"),
                City: sdk.String("Lake Margarettfield"),
                ContactType: shared.ContactTypeEnumCompany.ToPointer(),
                CountryCode: shared.CountryCodeEnumIq.ToPointer(),
                Email: sdk.String("Nia_Lynch37@yahoo.com"),
                ExtraParams: []shared.ExtraParam{
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumBirthDepartment,
                        Value: "tempora",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumAuIDNumber,
                        Value: "explicabo",
                    },
                    shared.ExtraParam{
                        Name: shared.ExtraParamNameEnumFiNationality,
                        Value: "ipsa",
                    },
                },
                Fax: sdk.String("molestiae"),
                FirstName: sdk.String("Elisha"),
                LastName: sdk.String("Kuhlman"),
                OrganizationName: sdk.String("eius"),
                PhoneNumber: sdk.String("esse"),
                State: sdk.String("esse"),
                ZipCode: sdk.String("64682-4381"),
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateDomainContactXAmzTargetEnumRoute53DomainsV20140515UpdateDomainContact,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainContactResponse != nil {
        // handle response
    }
}
```

## UpdateDomainContactPrivacy

<p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDomainContactPrivacy(ctx, operations.UpdateDomainContactPrivacyRequest{
        UpdateDomainContactPrivacyRequest: shared.UpdateDomainContactPrivacyRequest{
            AdminPrivacy: sdk.Bool(false),
            DomainName: "quo",
            RegistrantPrivacy: sdk.Bool(false),
            TechPrivacy: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.UpdateDomainContactPrivacyXAmzTargetEnumRoute53DomainsV20140515UpdateDomainContactPrivacy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainContactPrivacyResponse != nil {
        // handle response
    }
}
```

## UpdateDomainNameservers

<p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDomainNameservers(ctx, operations.UpdateDomainNameserversRequest{
        UpdateDomainNameserversRequest: shared.UpdateDomainNameserversRequest{
            DomainName: "cupiditate",
            FIAuthKey: sdk.String("consequatur"),
            Nameservers: []shared.Nameserver{
                shared.Nameserver{
                    GlueIps: []string{
                        "ipsam",
                        "aspernatur",
                        "sequi",
                        "quo",
                    },
                    Name: "Sophie Bayer",
                },
                shared.Nameserver{
                    GlueIps: []string{
                        "inventore",
                        "nihil",
                    },
                    Name: "Sheldon Hackett",
                },
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.UpdateDomainNameserversXAmzTargetEnumRoute53DomainsV20140515UpdateDomainNameservers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainNameserversResponse != nil {
        // handle response
    }
}
```

## UpdateTagsForDomain

<p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTagsForDomain(ctx, operations.UpdateTagsForDomainRequest{
        UpdateTagsForDomainRequest: shared.UpdateTagsForDomainRequest{
            DomainName: "eum",
            TagsToUpdate: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("praesentium"),
                    Value: sdk.String("consequuntur"),
                },
                shared.Tag{
                    Key: sdk.String("deleniti"),
                    Value: sdk.String("fugit"),
                },
                shared.Tag{
                    Key: sdk.String("fuga"),
                    Value: sdk.String("mollitia"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.UpdateTagsForDomainXAmzTargetEnumRoute53DomainsV20140515UpdateTagsForDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTagsForDomainResponse != nil {
        // handle response
    }
}
```

## ViewBilling

Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ViewBilling(ctx, operations.ViewBillingRequest{
        Marker: sdk.String("consequuntur"),
        MaxItems: sdk.String("ratione"),
        ViewBillingRequest: shared.ViewBillingRequest{
            End: types.MustTimeFromString("2022-02-05T01:06:02.008Z"),
            Marker: sdk.String("occaecati"),
            MaxItems: sdk.Int64(543806),
            Start: types.MustTimeFromString("2022-07-18T05:27:20.858Z"),
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.ViewBillingXAmzTargetEnumRoute53DomainsV20140515ViewBilling,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ViewBillingResponse != nil {
        // handle response
    }
}
```
