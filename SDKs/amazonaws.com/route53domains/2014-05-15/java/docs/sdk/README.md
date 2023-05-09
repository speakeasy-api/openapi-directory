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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountResponse;
import org.openapis.openapi.models.operations.AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptDomainTransferFromAnotherAwsAccountRequest req = new AcceptDomainTransferFromAnotherAwsAccountRequest(                new AcceptDomainTransferFromAnotherAwsAccountRequest("suscipit", "iure");, AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AcceptDomainTransferFromAnotherAwsAccountResponse res = sdk.sdk.acceptDomainTransferFromAnotherAwsAccount(req);

            if (res.acceptDomainTransferFromAnotherAwsAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateDelegationSignerToDomain

<p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDelegationSignerToDomainRequest;
import org.openapis.openapi.models.operations.AssociateDelegationSignerToDomainResponse;
import org.openapis.openapi.models.operations.AssociateDelegationSignerToDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDelegationSignerToDomainRequest;
import org.openapis.openapi.models.shared.DnssecSigningAttributes;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDelegationSignerToDomainRequest req = new AssociateDelegationSignerToDomainRequest(                new AssociateDelegationSignerToDomainRequest("placeat",                 new DnssecSigningAttributes() {{
                                                algorithm = 528895L;
                                                flags = 479977L;
                                                publicKey = "excepturi";
                                            }};);, AssociateDelegationSignerToDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_ASSOCIATE_DELEGATION_SIGNER_TO_DOMAIN) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateDelegationSignerToDomainResponse res = sdk.sdk.associateDelegationSignerToDomain(req);

            if (res.associateDelegationSignerToDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelDomainTransferToAnotherAwsAccount

<p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelDomainTransferToAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.CancelDomainTransferToAnotherAwsAccountResponse;
import org.openapis.openapi.models.operations.CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelDomainTransferToAnotherAwsAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelDomainTransferToAnotherAwsAccountRequest req = new CancelDomainTransferToAnotherAwsAccountRequest(                new CancelDomainTransferToAnotherAwsAccountRequest("ipsam");, CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            CancelDomainTransferToAnotherAwsAccountResponse res = sdk.sdk.cancelDomainTransferToAnotherAwsAccount(req);

            if (res.cancelDomainTransferToAnotherAwsAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkDomainAvailability

This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckDomainAvailabilityRequest;
import org.openapis.openapi.models.operations.CheckDomainAvailabilityResponse;
import org.openapis.openapi.models.operations.CheckDomainAvailabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.CheckDomainAvailabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckDomainAvailabilityRequest req = new CheckDomainAvailabilityRequest(                new CheckDomainAvailabilityRequest("quod") {{
                                idnLangCode = "quod";
                            }};, CheckDomainAvailabilityXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_AVAILABILITY) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CheckDomainAvailabilityResponse res = sdk.sdk.checkDomainAvailability(req);

            if (res.checkDomainAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkDomainTransferability

Checks whether a domain name can be transferred to Amazon Route 53. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckDomainTransferabilityRequest;
import org.openapis.openapi.models.operations.CheckDomainTransferabilityResponse;
import org.openapis.openapi.models.operations.CheckDomainTransferabilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.CheckDomainTransferabilityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CheckDomainTransferabilityRequest req = new CheckDomainTransferabilityRequest(                new CheckDomainTransferabilityRequest("fugit") {{
                                authCode = "deleniti";
                            }};, CheckDomainTransferabilityXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_CHECK_DOMAIN_TRANSFERABILITY) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            CheckDomainTransferabilityResponse res = sdk.sdk.checkDomainTransferability(req);

            if (res.checkDomainTransferabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomain

<p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainRequest;
import org.openapis.openapi.models.operations.DeleteDomainResponse;
import org.openapis.openapi.models.operations.DeleteDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainRequest req = new DeleteDomainRequest(                new DeleteDomainRequest("impedit");, DeleteDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_DELETE_DOMAIN) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            DeleteDomainResponse res = sdk.sdk.deleteDomain(req);

            if (res.deleteDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTagsForDomain

<p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagsForDomainRequest;
import org.openapis.openapi.models.operations.DeleteTagsForDomainResponse;
import org.openapis.openapi.models.operations.DeleteTagsForDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTagsForDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagsForDomainRequest req = new DeleteTagsForDomainRequest(                new DeleteTagsForDomainRequest("sed",                 new String[]{{
                                                add("dolor"),
                                                add("natus"),
                                                add("laboriosam"),
                                            }});, DeleteTagsForDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_DELETE_TAGS_FOR_DOMAIN) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            DeleteTagsForDomainResponse res = sdk.sdk.deleteTagsForDomain(req);

            if (res.deleteTagsForDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableDomainAutoRenew

This operation disables automatic renewal of domain registration for the specified domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableDomainAutoRenewRequest;
import org.openapis.openapi.models.operations.DisableDomainAutoRenewResponse;
import org.openapis.openapi.models.operations.DisableDomainAutoRenewXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableDomainAutoRenewRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableDomainAutoRenewRequest req = new DisableDomainAutoRenewRequest(                new DisableDomainAutoRenewRequest("quidem");, DisableDomainAutoRenewXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_DISABLE_DOMAIN_AUTO_RENEW) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DisableDomainAutoRenewResponse res = sdk.sdk.disableDomainAutoRenew(req);

            if (res.disableDomainAutoRenewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableDomainTransferLock

This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableDomainTransferLockRequest;
import org.openapis.openapi.models.operations.DisableDomainTransferLockResponse;
import org.openapis.openapi.models.operations.DisableDomainTransferLockXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableDomainTransferLockRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableDomainTransferLockRequest req = new DisableDomainTransferLockRequest(                new DisableDomainTransferLockRequest("corporis");, DisableDomainTransferLockXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_DISABLE_DOMAIN_TRANSFER_LOCK) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            DisableDomainTransferLockResponse res = sdk.sdk.disableDomainTransferLock(req);

            if (res.disableDomainTransferLockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDelegationSignerFromDomain

Deletes a delegation signer (DS) record in the registry zone for this domain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDelegationSignerFromDomainRequest;
import org.openapis.openapi.models.operations.DisassociateDelegationSignerFromDomainResponse;
import org.openapis.openapi.models.operations.DisassociateDelegationSignerFromDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateDelegationSignerFromDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDelegationSignerFromDomainRequest req = new DisassociateDelegationSignerFromDomainRequest(                new DisassociateDelegationSignerFromDomainRequest("iure", "culpa");, DisassociateDelegationSignerFromDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_DISASSOCIATE_DELEGATION_SIGNER_FROM_DOMAIN) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DisassociateDelegationSignerFromDomainResponse res = sdk.sdk.disassociateDelegationSignerFromDomain(req);

            if (res.disassociateDelegationSignerFromDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableDomainAutoRenew

<p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableDomainAutoRenewRequest;
import org.openapis.openapi.models.operations.EnableDomainAutoRenewResponse;
import org.openapis.openapi.models.operations.EnableDomainAutoRenewXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableDomainAutoRenewRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableDomainAutoRenewRequest req = new EnableDomainAutoRenewRequest(                new EnableDomainAutoRenewRequest("mollitia");, EnableDomainAutoRenewXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_AUTO_RENEW) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            EnableDomainAutoRenewResponse res = sdk.sdk.enableDomainAutoRenew(req);

            if (res.enableDomainAutoRenewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableDomainTransferLock

This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableDomainTransferLockRequest;
import org.openapis.openapi.models.operations.EnableDomainTransferLockResponse;
import org.openapis.openapi.models.operations.EnableDomainTransferLockXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableDomainTransferLockRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableDomainTransferLockRequest req = new EnableDomainTransferLockRequest(                new EnableDomainTransferLockRequest("quis");, EnableDomainTransferLockXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_ENABLE_DOMAIN_TRANSFER_LOCK) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            EnableDomainTransferLockResponse res = sdk.sdk.enableDomainTransferLock(req);

            if (res.enableDomainTransferLockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContactReachabilityStatus

<p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactReachabilityStatusRequest;
import org.openapis.openapi.models.operations.GetContactReachabilityStatusResponse;
import org.openapis.openapi.models.operations.GetContactReachabilityStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetContactReachabilityStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContactReachabilityStatusRequest req = new GetContactReachabilityStatusRequest(                new GetContactReachabilityStatusRequest() {{
                                domainName = "ipsam";
                            }};, GetContactReachabilityStatusXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_GET_CONTACT_REACHABILITY_STATUS) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GetContactReachabilityStatusResponse res = sdk.sdk.getContactReachabilityStatus(req);

            if (res.getContactReachabilityStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainDetail

This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainDetailRequest;
import org.openapis.openapi.models.operations.GetDomainDetailResponse;
import org.openapis.openapi.models.operations.GetDomainDetailXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDomainDetailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainDetailRequest req = new GetDomainDetailRequest(                new GetDomainDetailRequest("reiciendis");, GetDomainDetailXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_GET_DOMAIN_DETAIL) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            GetDomainDetailResponse res = sdk.sdk.getDomainDetail(req);

            if (res.getDomainDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainSuggestions

The GetDomainSuggestions operation returns a list of suggested domain names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainSuggestionsRequest;
import org.openapis.openapi.models.operations.GetDomainSuggestionsResponse;
import org.openapis.openapi.models.operations.GetDomainSuggestionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDomainSuggestionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainSuggestionsRequest req = new GetDomainSuggestionsRequest(                new GetDomainSuggestionsRequest("cum", false, 19987L);, GetDomainSuggestionsXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_GET_DOMAIN_SUGGESTIONS) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ut";
                xAmzDate = "maiores";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "dolore";
            }};            

            GetDomainSuggestionsResponse res = sdk.sdk.getDomainSuggestions(req);

            if (res.getDomainSuggestionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOperationDetail

This operation returns the current status of an operation that is not completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOperationDetailRequest;
import org.openapis.openapi.models.operations.GetOperationDetailResponse;
import org.openapis.openapi.models.operations.GetOperationDetailXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetOperationDetailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOperationDetailRequest req = new GetOperationDetailRequest(                new GetOperationDetailRequest("dicta");, GetOperationDetailXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_GET_OPERATION_DETAIL) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            GetOperationDetailResponse res = sdk.sdk.getOperationDetail(req);

            if (res.getOperationDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomains

This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainsRequest;
import org.openapis.openapi.models.operations.ListDomainsResponse;
import org.openapis.openapi.models.operations.ListDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterCondition;
import org.openapis.openapi.models.shared.ListDomainsAttributeNameEnum;
import org.openapis.openapi.models.shared.ListDomainsRequest;
import org.openapis.openapi.models.shared.OperatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortCondition;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest(                new ListDomainsRequest() {{
                                filterConditions = new org.openapis.openapi.models.shared.FilterCondition[]{{
                                    add(new FilterCondition(ListDomainsAttributeNameEnum.EXPIRY, OperatorEnum.LE,                 new String[]{{
                                                        add("sint"),
                                                        add("veritatis"),
                                                        add("itaque"),
                                                        add("incidunt"),
                                                    }}) {{
                                        name = ListDomainsAttributeNameEnum.EXPIRY;
                                        operator = OperatorEnum.BEGINS_WITH;
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("rem"),
                                        }};
                                    }}),
                                    add(new FilterCondition(ListDomainsAttributeNameEnum.EXPIRY, OperatorEnum.BEGINS_WITH,                 new String[]{{
                                                        add("modi"),
                                                        add("qui"),
                                                    }}) {{
                                        name = ListDomainsAttributeNameEnum.DOMAIN_NAME;
                                        operator = OperatorEnum.LE;
                                        values = new String[]{{
                                            add("quibusdam"),
                                            add("explicabo"),
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new FilterCondition(ListDomainsAttributeNameEnum.DOMAIN_NAME, OperatorEnum.LE,                 new String[]{{
                                                        add("dolorum"),
                                                    }}) {{
                                        name = ListDomainsAttributeNameEnum.DOMAIN_NAME;
                                        operator = OperatorEnum.GE;
                                        values = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                }};
                                marker = "excepturi";
                                maxItems = 270008L;
                                sortCondition = new SortCondition(ListDomainsAttributeNameEnum.EXPIRY, SortOrderEnum.DESC);;
                            }};, ListDomainsXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_LIST_DOMAINS) {{
                marker = "labore";
                maxItems = "delectus";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            ListDomainsResponse res = sdk.sdk.listDomains(req);

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOperations

<p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOperationsRequest;
import org.openapis.openapi.models.operations.ListOperationsResponse;
import org.openapis.openapi.models.operations.ListOperationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOperationsRequest;
import org.openapis.openapi.models.shared.ListOperationsSortAttributeNameEnum;
import org.openapis.openapi.models.shared.OperationStatusEnum;
import org.openapis.openapi.models.shared.OperationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOperationsRequest req = new ListOperationsRequest(                new ListOperationsRequest() {{
                                marker = "officia";
                                maxItems = 223081L;
                                sortBy = ListOperationsSortAttributeNameEnum.SUBMITTED_DATE;
                                sortOrder = SortOrderEnum.DESC;
                                status = new org.openapis.openapi.models.shared.OperationStatusEnum[]{{
                                    add(OperationStatusEnum.SUCCESSFUL),
                                    add(OperationStatusEnum.ERROR),
                                    add(OperationStatusEnum.ERROR),
                                    add(OperationStatusEnum.FAILED),
                                }};
                                submittedSince = OffsetDateTime.parse("2020-11-26T01:41:04.216Z");
                                type = new org.openapis.openapi.models.shared.OperationTypeEnum[]{{
                                    add(OperationTypeEnum.CHANGE_PRIVACY_PROTECTION),
                                }};
                            }};, ListOperationsXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_LIST_OPERATIONS) {{
                marker = "cumque";
                maxItems = "facere";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            ListOperationsResponse res = sdk.sdk.listOperations(req);

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPrices

<p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPricesRequest;
import org.openapis.openapi.models.operations.ListPricesResponse;
import org.openapis.openapi.models.operations.ListPricesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPricesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPricesRequest req = new ListPricesRequest(                new ListPricesRequest() {{
                                marker = "delectus";
                                maxItems = 692532L;
                                tld = "provident";
                            }};, ListPricesXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_LIST_PRICES) {{
                marker = "nam";
                maxItems = "id";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            ListPricesResponse res = sdk.sdk.listPrices(req);

            if (res.listPricesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForDomain

<p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForDomainRequest;
import org.openapis.openapi.models.operations.ListTagsForDomainResponse;
import org.openapis.openapi.models.operations.ListTagsForDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForDomainRequest req = new ListTagsForDomainRequest(                new ListTagsForDomainRequest("omnis");, ListTagsForDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_LIST_TAGS_FOR_DOMAIN) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            ListTagsForDomainResponse res = sdk.sdk.listTagsForDomain(req);

            if (res.listTagsForDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pushDomain

<p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PushDomainRequest;
import org.openapis.openapi.models.operations.PushDomainResponse;
import org.openapis.openapi.models.operations.PushDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.PushDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PushDomainRequest req = new PushDomainRequest(                new PushDomainRequest("suscipit", "natus");, PushDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_PUSH_DOMAIN) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            PushDomainResponse res = sdk.sdk.pushDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerDomain

<p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDomainRequest;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.operations.RegisterDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactDetail;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.ExtraParam;
import org.openapis.openapi.models.shared.ExtraParamNameEnum;
import org.openapis.openapi.models.shared.RegisterDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterDomainRequest req = new RegisterDomainRequest(                new RegisterDomainRequest(                new ContactDetail() {{
                                                addressLine1 = "ullam";
                                                addressLine2 = "provident";
                                                city = "Kileytown";
                                                contactType = ContactTypeEnum.PUBLIC_BODY;
                                                countryCode = CountryCodeEnum.VU;
                                                email = "Emmie89@yahoo.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.ES_IDENTIFICATION, "doloribus") {{
                                                        name = ExtraParamNameEnum.CA_LEGAL_REPRESENTATIVE;
                                                        value = "quasi";
                                                    }}),
                                                }};
                                                fax = "debitis";
                                                firstName = "Devante";
                                                lastName = "Schoen";
                                                organizationName = "deleniti";
                                                phoneNumber = "facilis";
                                                state = "in";
                                                zipCode = "09374";
                                            }};, "repellat", 841140L,                 new ContactDetail() {{
                                                addressLine1 = "sed";
                                                addressLine2 = "saepe";
                                                city = "Arlington Heights";
                                                contactType = ContactTypeEnum.PERSON;
                                                countryCode = CountryCodeEnum.LA;
                                                email = "Catalina_Casper86@yahoo.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.BIRTH_COUNTRY, "ea") {{
                                                        name = ExtraParamNameEnum.CA_LEGAL_REPRESENTATIVE_CAPACITY;
                                                        value = "excepturi";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.AU_PRIORITY_TOKEN, "quidem") {{
                                                        name = ExtraParamNameEnum.BRAND_NUMBER;
                                                        value = "ab";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.ES_IDENTIFICATION, "nam") {{
                                                        name = ExtraParamNameEnum.CA_LEGAL_REPRESENTATIVE;
                                                        value = "voluptate";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.CA_LEGAL_REPRESENTATIVE, "voluptatibus") {{
                                                        name = ExtraParamNameEnum.BRAND_NUMBER;
                                                        value = "pariatur";
                                                    }}),
                                                }};
                                                fax = "perferendis";
                                                firstName = "Russ";
                                                lastName = "Feeney";
                                                organizationName = "aut";
                                                phoneNumber = "cumque";
                                                state = "corporis";
                                                zipCode = "77135-4031";
                                            }};,                 new ContactDetail() {{
                                                addressLine1 = "eos";
                                                addressLine2 = "perferendis";
                                                city = "Port Jalynburgh";
                                                contactType = ContactTypeEnum.RESELLER;
                                                countryCode = CountryCodeEnum.GM;
                                                email = "Timothy_Mohr3@hotmail.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.FI_ORGANIZATION_TYPE, "eaque") {{
                                                        name = ExtraParamNameEnum.BIRTH_CITY;
                                                        value = "blanditiis";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.AU_ID_NUMBER, "asperiores") {{
                                                        name = ExtraParamNameEnum.FI_ID_NUMBER;
                                                        value = "rerum";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.FI_ORGANIZATION_TYPE, "dolorum") {{
                                                        name = ExtraParamNameEnum.UK_COMPANY_NUMBER;
                                                        value = "modi";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.FI_NATIONALITY, "nobis") {{
                                                        name = ExtraParamNameEnum.FI_BUSINESS_NUMBER;
                                                        value = "pariatur";
                                                    }}),
                                                }};
                                                fax = "libero";
                                                firstName = "Violet";
                                                lastName = "Hahn";
                                                organizationName = "quos";
                                                phoneNumber = "aliquid";
                                                state = "dolorem";
                                                zipCode = "21295";
                                            }};) {{
                                autoRenew = false;
                                idnLangCode = "cum";
                                privacyProtectAdminContact = false;
                                privacyProtectRegistrantContact = false;
                                privacyProtectTechContact = false;
                            }};, RegisterDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_REGISTER_DOMAIN) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            RegisterDomainResponse res = sdk.sdk.registerDomain(req);

            if (res.registerDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectDomainTransferFromAnotherAwsAccount

<p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.RejectDomainTransferFromAnotherAwsAccountResponse;
import org.openapis.openapi.models.operations.RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectDomainTransferFromAnotherAwsAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectDomainTransferFromAnotherAwsAccountRequest req = new RejectDomainTransferFromAnotherAwsAccountRequest(                new RejectDomainTransferFromAnotherAwsAccountRequest("ipsa");, RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            RejectDomainTransferFromAnotherAwsAccountResponse res = sdk.sdk.rejectDomainTransferFromAnotherAwsAccount(req);

            if (res.rejectDomainTransferFromAnotherAwsAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renewDomain

<p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenewDomainRequest;
import org.openapis.openapi.models.operations.RenewDomainResponse;
import org.openapis.openapi.models.operations.RenewDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.RenewDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RenewDomainRequest req = new RenewDomainRequest(                new RenewDomainRequest(179603L, "atque") {{
                                durationInYears = 24678L;
                            }};, RenewDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_RENEW_DOMAIN) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            RenewDomainResponse res = sdk.sdk.renewDomain(req);

            if (res.renewDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendContactReachabilityEmail

For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendContactReachabilityEmailRequest;
import org.openapis.openapi.models.operations.ResendContactReachabilityEmailResponse;
import org.openapis.openapi.models.operations.ResendContactReachabilityEmailXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResendContactReachabilityEmailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResendContactReachabilityEmailRequest req = new ResendContactReachabilityEmailRequest(                new ResendContactReachabilityEmailRequest() {{
                                domainName = "omnis";
                            }};, ResendContactReachabilityEmailXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_RESEND_CONTACT_REACHABILITY_EMAIL) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
            }};            

            ResendContactReachabilityEmailResponse res = sdk.sdk.resendContactReachabilityEmail(req);

            if (res.resendContactReachabilityEmailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendOperationAuthorization

 Resend the form of authorization email for this operation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendOperationAuthorizationRequest;
import org.openapis.openapi.models.operations.ResendOperationAuthorizationResponse;
import org.openapis.openapi.models.operations.ResendOperationAuthorizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResendOperationAuthorizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResendOperationAuthorizationRequest req = new ResendOperationAuthorizationRequest(                new ResendOperationAuthorizationRequest("eius");, ResendOperationAuthorizationXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_RESEND_OPERATION_AUTHORIZATION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            ResendOperationAuthorizationResponse res = sdk.sdk.resendOperationAuthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveDomainAuthCode

This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveDomainAuthCodeRequest;
import org.openapis.openapi.models.operations.RetrieveDomainAuthCodeResponse;
import org.openapis.openapi.models.operations.RetrieveDomainAuthCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.RetrieveDomainAuthCodeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrieveDomainAuthCodeRequest req = new RetrieveDomainAuthCodeRequest(                new RetrieveDomainAuthCodeRequest("deserunt");, RetrieveDomainAuthCodeXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_RETRIEVE_DOMAIN_AUTH_CODE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "minima";
                xAmzCredential = "repellendus";
                xAmzDate = "totam";
                xAmzSecurityToken = "similique";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "at";
            }};            

            RetrieveDomainAuthCodeResponse res = sdk.sdk.retrieveDomainAuthCode(req);

            if (res.retrieveDomainAuthCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferDomain

<p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferDomainRequest;
import org.openapis.openapi.models.operations.TransferDomainResponse;
import org.openapis.openapi.models.operations.TransferDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContactDetail;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.ExtraParam;
import org.openapis.openapi.models.shared.ExtraParamNameEnum;
import org.openapis.openapi.models.shared.Nameserver;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TransferDomainRequest req = new TransferDomainRequest(                new TransferDomainRequest(                new ContactDetail() {{
                                                addressLine1 = "tempora";
                                                addressLine2 = "vel";
                                                city = "Torpberg";
                                                contactType = ContactTypeEnum.PUBLIC_BODY;
                                                countryCode = CountryCodeEnum.VE;
                                                email = "Marshall78@yahoo.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.UK_CONTACT_TYPE, "numquam") {{
                                                        name = ExtraParamNameEnum.AU_ID_NUMBER;
                                                        value = "tempore";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.EU_COUNTRY_OF_CITIZENSHIP, "totam") {{
                                                        name = ExtraParamNameEnum.CA_LEGAL_TYPE;
                                                        value = "dolorem";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.IT_REGISTRANT_ENTITY_TYPE, "neque") {{
                                                        name = ExtraParamNameEnum.ES_IDENTIFICATION_TYPE;
                                                        value = "sit";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.IT_REGISTRANT_ENTITY_TYPE, "voluptas") {{
                                                        name = ExtraParamNameEnum.BIRTH_COUNTRY;
                                                        value = "vel";
                                                    }}),
                                                }};
                                                fax = "deserunt";
                                                firstName = "Jamaal";
                                                lastName = "Emard";
                                                organizationName = "incidunt";
                                                phoneNumber = "qui";
                                                state = "cupiditate";
                                                zipCode = "87165-2117";
                                            }};, "facilis", 396060L,                 new ContactDetail() {{
                                                addressLine1 = "quam";
                                                addressLine2 = "molestias";
                                                city = "Citrus Heights";
                                                contactType = ContactTypeEnum.COMPANY;
                                                countryCode = CountryCodeEnum.BW;
                                                email = "Jefferey_Cassin@gmail.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.RU_PASSPORT_DATA, "nobis") {{
                                                        name = ExtraParamNameEnum.DUNS_NUMBER;
                                                        value = "cumque";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.DOCUMENT_NUMBER, "veritatis") {{
                                                        name = ExtraParamNameEnum.BIRTH_DEPARTMENT;
                                                        value = "saepe";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.IT_REGISTRANT_ENTITY_TYPE, "cupiditate") {{
                                                        name = ExtraParamNameEnum.RU_PASSPORT_DATA;
                                                        value = "quos";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.DOCUMENT_NUMBER, "dolore") {{
                                                        name = ExtraParamNameEnum.BRAND_NUMBER;
                                                        value = "delectus";
                                                    }}),
                                                }};
                                                fax = "labore";
                                                firstName = "Dayna";
                                                lastName = "Pagac";
                                                organizationName = "architecto";
                                                phoneNumber = "quae";
                                                state = "aut";
                                                zipCode = "90687-9275";
                                            }};,                 new ContactDetail() {{
                                                addressLine1 = "qui";
                                                addressLine2 = "quae";
                                                city = "Jeanettestead";
                                                contactType = ContactTypeEnum.RESELLER;
                                                countryCode = CountryCodeEnum.SD;
                                                email = "Lenna96@hotmail.com";
                                                extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                                    add(new ExtraParam(ExtraParamNameEnum.EU_COUNTRY_OF_CITIZENSHIP, "dignissimos") {{
                                                        name = ExtraParamNameEnum.AU_ID_NUMBER;
                                                        value = "vero";
                                                    }}),
                                                    add(new ExtraParam(ExtraParamNameEnum.SE_ID_NUMBER, "odio") {{
                                                        name = ExtraParamNameEnum.EU_COUNTRY_OF_CITIZENSHIP;
                                                        value = "distinctio";
                                                    }}),
                                                }};
                                                fax = "similique";
                                                firstName = "Melody";
                                                lastName = "Swift";
                                                organizationName = "ducimus";
                                                phoneNumber = "dolore";
                                                state = "quibusdam";
                                                zipCode = "16709-3817";
                                            }};) {{
                                authCode = "maiores";
                                autoRenew = false;
                                idnLangCode = "doloribus";
                                nameservers = new org.openapis.openapi.models.shared.Nameserver[]{{
                                    add(new Nameserver("magnam") {{
                                        glueIps = new String[]{{
                                            add("ducimus"),
                                            add("alias"),
                                            add("officia"),
                                            add("tempora"),
                                        }};
                                        name = "Terri Collins";
                                    }}),
                                    add(new Nameserver("nulla") {{
                                        glueIps = new String[]{{
                                            add("ex"),
                                        }};
                                        name = "Willie Fahey III";
                                    }}),
                                }};
                                privacyProtectAdminContact = false;
                                privacyProtectRegistrantContact = false;
                                privacyProtectTechContact = false;
                            }};, TransferDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_TRANSFER_DOMAIN) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "nostrum";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ea";
            }};            

            TransferDomainResponse res = sdk.sdk.transferDomain(req);

            if (res.transferDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferDomainToAnotherAwsAccount

<p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferDomainToAnotherAwsAccountRequest;
import org.openapis.openapi.models.operations.TransferDomainToAnotherAwsAccountResponse;
import org.openapis.openapi.models.operations.TransferDomainToAnotherAwsAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferDomainToAnotherAwsAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TransferDomainToAnotherAwsAccountRequest req = new TransferDomainToAnotherAwsAccountRequest(                new TransferDomainToAnotherAwsAccountRequest("corporis", "veniam");, TransferDomainToAnotherAwsAccountXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            TransferDomainToAnotherAwsAccountResponse res = sdk.sdk.transferDomainToAnotherAwsAccount(req);

            if (res.transferDomainToAnotherAwsAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainContact

<p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainContactRequest;
import org.openapis.openapi.models.operations.UpdateDomainContactResponse;
import org.openapis.openapi.models.operations.UpdateDomainContactXAmzTargetEnum;
import org.openapis.openapi.models.shared.Consent;
import org.openapis.openapi.models.shared.ContactDetail;
import org.openapis.openapi.models.shared.ContactTypeEnum;
import org.openapis.openapi.models.shared.CountryCodeEnum;
import org.openapis.openapi.models.shared.ExtraParam;
import org.openapis.openapi.models.shared.ExtraParamNameEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDomainContactRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainContactRequest req = new UpdateDomainContactRequest(                new UpdateDomainContactRequest("minima") {{
                                adminContact = new ContactDetail() {{
                                    addressLine1 = "eaque";
                                    addressLine2 = "a";
                                    city = "Ankundingtown";
                                    contactType = ContactTypeEnum.ASSOCIATION;
                                    countryCode = CountryCodeEnum.RW;
                                    email = "Caesar25@gmail.com";
                                    extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                        add(new ExtraParam(ExtraParamNameEnum.SG_ID_NUMBER, "velit") {{
                                            name = ExtraParamNameEnum.IT_NATIONALITY;
                                            value = "laborum";
                                        }}),
                                    }};
                                    fax = "eum";
                                    firstName = "Helen";
                                    lastName = "Rolfson";
                                    organizationName = "quas";
                                    phoneNumber = "assumenda";
                                    state = "nulla";
                                    zipCode = "70221";
                                }};;
                                consent = new Consent("provident", 553.74);;
                                registrantContact = new ContactDetail() {{
                                    addressLine1 = "molestiae";
                                    addressLine2 = "magnam";
                                    city = "Devynport";
                                    contactType = ContactTypeEnum.ASSOCIATION;
                                    countryCode = CountryCodeEnum.LK;
                                    email = "Ima.Predovic43@hotmail.com";
                                    extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                        add(new ExtraParam(ExtraParamNameEnum.ES_LEGAL_FORM, "quisquam") {{
                                            name = ExtraParamNameEnum.SG_ID_NUMBER;
                                            value = "eos";
                                        }}),
                                        add(new ExtraParam(ExtraParamNameEnum.IT_NATIONALITY, "quidem") {{
                                            name = ExtraParamNameEnum.BIRTH_DEPARTMENT;
                                            value = "ipsa";
                                        }}),
                                    }};
                                    fax = "neque";
                                    firstName = "Orlo";
                                    lastName = "Stamm";
                                    organizationName = "quo";
                                    phoneNumber = "fuga";
                                    state = "eius";
                                    zipCode = "30502";
                                }};;
                                techContact = new ContactDetail() {{
                                    addressLine1 = "debitis";
                                    addressLine2 = "ipsam";
                                    city = "East Orrinport";
                                    contactType = ContactTypeEnum.RESELLER;
                                    countryCode = CountryCodeEnum.AR;
                                    email = "Polly46@hotmail.com";
                                    extraParams = new org.openapis.openapi.models.shared.ExtraParam[]{{
                                        add(new ExtraParam(ExtraParamNameEnum.ES_LEGAL_FORM, "occaecati") {{
                                            name = ExtraParamNameEnum.UK_CONTACT_TYPE;
                                            value = "aliquam";
                                        }}),
                                        add(new ExtraParam(ExtraParamNameEnum.BIRTH_CITY, "deserunt") {{
                                            name = ExtraParamNameEnum.CA_LEGAL_REPRESENTATIVE_CAPACITY;
                                            value = "sapiente";
                                        }}),
                                        add(new ExtraParam(ExtraParamNameEnum.SE_ID_NUMBER, "eum") {{
                                            name = ExtraParamNameEnum.ES_IDENTIFICATION_TYPE;
                                            value = "accusantium";
                                        }}),
                                    }};
                                    fax = "quas";
                                    firstName = "Johnathan";
                                    lastName = "Cronin";
                                    organizationName = "deleniti";
                                    phoneNumber = "fugit";
                                    state = "fuga";
                                    zipCode = "25133-1911";
                                }};;
                            }};, UpdateDomainContactXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_CONTACT) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdateDomainContactResponse res = sdk.sdk.updateDomainContact(req);

            if (res.updateDomainContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainContactPrivacy

<p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainContactPrivacyRequest;
import org.openapis.openapi.models.operations.UpdateDomainContactPrivacyResponse;
import org.openapis.openapi.models.operations.UpdateDomainContactPrivacyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDomainContactPrivacyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainContactPrivacyRequest req = new UpdateDomainContactPrivacyRequest(                new UpdateDomainContactPrivacyRequest("veritatis") {{
                                adminPrivacy = false;
                                registrantPrivacy = false;
                                techPrivacy = false;
                            }};, UpdateDomainContactPrivacyXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_CONTACT_PRIVACY) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quod";
                xAmzCredential = "nam";
                xAmzDate = "vero";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateDomainContactPrivacyResponse res = sdk.sdk.updateDomainContactPrivacy(req);

            if (res.updateDomainContactPrivacyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainNameservers

<p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainNameserversRequest;
import org.openapis.openapi.models.operations.UpdateDomainNameserversResponse;
import org.openapis.openapi.models.operations.UpdateDomainNameserversXAmzTargetEnum;
import org.openapis.openapi.models.shared.Nameserver;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDomainNameserversRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainNameserversRequest req = new UpdateDomainNameserversRequest(                new UpdateDomainNameserversRequest("harum",                 new org.openapis.openapi.models.shared.Nameserver[]{{
                                                add(new Nameserver("cumque") {{
                                                    glueIps = new String[]{{
                                                        add("occaecati"),
                                                        add("minima"),
                                                        add("distinctio"),
                                                    }};
                                                    name = "Mark Nicolas";
                                                }}),
                                                add(new Nameserver("blanditiis") {{
                                                    glueIps = new String[]{{
                                                        add("consequatur"),
                                                    }};
                                                    name = "Calvin Williamson";
                                                }}),
                                            }}) {{
                                fiAuthKey = "provident";
                            }};, UpdateDomainNameserversXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_UPDATE_DOMAIN_NAMESERVERS) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "quas";
                xAmzDate = "esse";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "a";
                xAmzSignedHeaders = "error";
            }};            

            UpdateDomainNameserversResponse res = sdk.sdk.updateDomainNameservers(req);

            if (res.updateDomainNameserversResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTagsForDomain

<p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagsForDomainRequest;
import org.openapis.openapi.models.operations.UpdateTagsForDomainResponse;
import org.openapis.openapi.models.operations.UpdateTagsForDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateTagsForDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTagsForDomainRequest req = new UpdateTagsForDomainRequest(                new UpdateTagsForDomainRequest("pariatur") {{
                                tagsToUpdate = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quia";
                                        value = "eveniet";
                                    }}),
                                    add(new Tag() {{
                                        key = "asperiores";
                                        value = "facere";
                                    }}),
                                    add(new Tag() {{
                                        key = "veritatis";
                                        value = "consequuntur";
                                    }}),
                                    add(new Tag() {{
                                        key = "quasi";
                                        value = "similique";
                                    }}),
                                }};
                            }};, UpdateTagsForDomainXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_UPDATE_TAGS_FOR_DOMAIN) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "tenetur";
                xAmzDate = "quae";
                xAmzSecurityToken = "earum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "in";
            }};            

            UpdateTagsForDomainResponse res = sdk.sdk.updateTagsForDomain(req);

            if (res.updateTagsForDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## viewBilling

Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ViewBillingRequest;
import org.openapis.openapi.models.operations.ViewBillingResponse;
import org.openapis.openapi.models.operations.ViewBillingXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ViewBillingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ViewBillingRequest req = new ViewBillingRequest(                new ViewBillingRequest() {{
                                end = OffsetDateTime.parse("2021-04-21T04:50:55.832Z");
                                marker = "soluta";
                                maxItems = 33304L;
                                start = OffsetDateTime.parse("2022-01-15T23:18:40.855Z");
                            }};, ViewBillingXAmzTargetEnum.ROUTE53_DOMAINS_V20140515_VIEW_BILLING) {{
                marker = "dicta";
                maxItems = "ullam";
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nisi";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quibusdam";
            }};            

            ViewBillingResponse res = sdk.sdk.viewBilling(req);

            if (res.viewBillingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
