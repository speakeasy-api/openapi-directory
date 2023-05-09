# SDK

## Overview

<fullname>Amazon Simple Email Service</fullname> <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/email/>
### Available Operations

* [getCloneReceiptRuleSet](#getclonereceiptruleset) - <p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getCreateConfigurationSet](#getcreateconfigurationset) - <p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getCreateConfigurationSetTrackingOptions](#getcreateconfigurationsettrackingoptions) - <p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
* [getCreateCustomVerificationEmailTemplate](#getcreatecustomverificationemailtemplate) - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getCreateReceiptRuleSet](#getcreatereceiptruleset) - <p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getCreateTemplate](#getcreatetemplate) - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteConfigurationSet](#getdeleteconfigurationset) - <p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteConfigurationSetEventDestination](#getdeleteconfigurationseteventdestination) - <p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteConfigurationSetTrackingOptions](#getdeleteconfigurationsettrackingoptions) - <p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
* [getDeleteCustomVerificationEmailTemplate](#getdeletecustomverificationemailtemplate) - <p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteIdentity](#getdeleteidentity) - <p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteIdentityPolicy](#getdeleteidentitypolicy) - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteReceiptFilter](#getdeletereceiptfilter) - <p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteReceiptRule](#getdeletereceiptrule) - <p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteReceiptRuleSet](#getdeletereceiptruleset) - <p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteTemplate](#getdeletetemplate) - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* [getDeleteVerifiedEmailAddress](#getdeleteverifiedemailaddress) - Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.
* [getDescribeActiveReceiptRuleSet](#getdescribeactivereceiptruleset) - <p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDescribeConfigurationSet](#getdescribeconfigurationset) - <p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDescribeReceiptRule](#getdescribereceiptrule) - <p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getDescribeReceiptRuleSet](#getdescribereceiptruleset) - <p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getGETAccountSendingEnabled](#getgetaccountsendingenabled) - <p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
* [getGETCustomVerificationEmailTemplate](#getgetcustomverificationemailtemplate) - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getGETIdentityDkimAttributes](#getgetidentitydkimattributes) - <p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>
* [getGETIdentityMailFromDomainAttributes](#getgetidentitymailfromdomainattributes) - <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
* [getGETIdentityNotificationAttributes](#getgetidentitynotificationattributes) - <p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [getGETIdentityPolicies](#getgetidentitypolicies) - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getGETIdentityVerificationAttributes](#getgetidentityverificationattributes) - <p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
* [getGETSendQuota](#getgetsendquota) - <p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
* [getGETSendStatistics](#getgetsendstatistics) - <p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
* [getGETTemplate](#getgettemplate) - <p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* [getListConfigurationSets](#getlistconfigurationsets) - <p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
* [getListCustomVerificationEmailTemplates](#getlistcustomverificationemailtemplates) - <p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getListIdentities](#getlistidentities) - <p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
* [getListIdentityPolicies](#getlistidentitypolicies) - <p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getListReceiptFilters](#getlistreceiptfilters) - <p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getListReceiptRuleSets](#getlistreceiptrulesets) - <p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getListTemplates](#getlisttemplates) - <p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
* [getListVerifiedEmailAddresses](#getlistverifiedemailaddresses) - Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
* [getPutConfigurationSetDeliveryOptions](#getputconfigurationsetdeliveryoptions) - Adds or updates the delivery options for a configuration set.
* [getPutIdentityPolicy](#getputidentitypolicy) - <p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getReorderReceiptRuleSet](#getreorderreceiptruleset) - <p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getSendCustomVerificationEmail](#getsendcustomverificationemail) - <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getSetActiveReceiptRuleSet](#getsetactivereceiptruleset) - <p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getSetIdentityDkimEnabled](#getsetidentitydkimenabled) - <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
* [getSetIdentityFeedbackForwardingEnabled](#getsetidentityfeedbackforwardingenabled) - <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [getSetIdentityHeadersInNotificationsEnabled](#getsetidentityheadersinnotificationsenabled) - <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [getSetIdentityMailFromDomain](#getsetidentitymailfromdomain) - <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
* [getSetIdentityNotificationTopic](#getsetidentitynotificationtopic) - <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [getSetReceiptRulePosition](#getsetreceiptruleposition) - <p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getTestRenderTemplate](#gettestrendertemplate) - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* [getUpdateAccountSendingEnabled](#getupdateaccountsendingenabled) - <p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [getUpdateConfigurationSetReputationMetricsEnabled](#getupdateconfigurationsetreputationmetricsenabled) - <p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [getUpdateConfigurationSetSendingEnabled](#getupdateconfigurationsetsendingenabled) - <p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [getUpdateConfigurationSetTrackingOptions](#getupdateconfigurationsettrackingoptions) - <p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
* [getUpdateCustomVerificationEmailTemplate](#getupdatecustomverificationemailtemplate) - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [getUpdateTemplate](#getupdatetemplate) - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [getVerifyDomainDkim](#getverifydomaindkim) - <p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
* [getVerifyDomainIdentity](#getverifydomainidentity) - <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
* [getVerifyEmailAddress](#getverifyemailaddress) - Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.
* [getVerifyEmailIdentity](#getverifyemailidentity) - <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>
* [postCloneReceiptRuleSet](#postclonereceiptruleset) - <p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateConfigurationSet](#postcreateconfigurationset) - <p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateConfigurationSetEventDestination](#postcreateconfigurationseteventdestination) - <p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateConfigurationSetTrackingOptions](#postcreateconfigurationsettrackingoptions) - <p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
* [postCreateCustomVerificationEmailTemplate](#postcreatecustomverificationemailtemplate) - <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateReceiptFilter](#postcreatereceiptfilter) - <p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateReceiptRule](#postcreatereceiptrule) - <p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateReceiptRuleSet](#postcreatereceiptruleset) - <p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postCreateTemplate](#postcreatetemplate) - <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteConfigurationSet](#postdeleteconfigurationset) - <p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteConfigurationSetEventDestination](#postdeleteconfigurationseteventdestination) - <p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteConfigurationSetTrackingOptions](#postdeleteconfigurationsettrackingoptions) - <p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
* [postDeleteCustomVerificationEmailTemplate](#postdeletecustomverificationemailtemplate) - <p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteIdentity](#postdeleteidentity) - <p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteIdentityPolicy](#postdeleteidentitypolicy) - <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteReceiptFilter](#postdeletereceiptfilter) - <p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteReceiptRule](#postdeletereceiptrule) - <p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteReceiptRuleSet](#postdeletereceiptruleset) - <p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteTemplate](#postdeletetemplate) - <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
* [postDeleteVerifiedEmailAddress](#postdeleteverifiedemailaddress) - Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.
* [postDescribeActiveReceiptRuleSet](#postdescribeactivereceiptruleset) - <p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDescribeConfigurationSet](#postdescribeconfigurationset) - <p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDescribeReceiptRule](#postdescribereceiptrule) - <p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postDescribeReceiptRuleSet](#postdescribereceiptruleset) - <p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postGetAccountSendingEnabled](#postgetaccountsendingenabled) - <p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
* [postGetCustomVerificationEmailTemplate](#postgetcustomverificationemailtemplate) - <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postGetIdentityDkimAttributes](#postgetidentitydkimattributes) - <p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>
* [postGetIdentityMailFromDomainAttributes](#postgetidentitymailfromdomainattributes) - <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
* [postGetIdentityNotificationAttributes](#postgetidentitynotificationattributes) - <p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [postGetIdentityPolicies](#postgetidentitypolicies) - <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postGetIdentityVerificationAttributes](#postgetidentityverificationattributes) - <p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
* [postGetSendQuota](#postgetsendquota) - <p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
* [postGetSendStatistics](#postgetsendstatistics) - <p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
* [postGetTemplate](#postgettemplate) - <p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
* [postListConfigurationSets](#postlistconfigurationsets) - <p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
* [postListCustomVerificationEmailTemplates](#postlistcustomverificationemailtemplates) - <p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postListIdentities](#postlistidentities) - <p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
* [postListIdentityPolicies](#postlistidentitypolicies) - <p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postListReceiptFilters](#postlistreceiptfilters) - <p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postListReceiptRuleSets](#postlistreceiptrulesets) - <p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postListTemplates](#postlisttemplates) - <p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
* [postListVerifiedEmailAddresses](#postlistverifiedemailaddresses) - Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
* [postPutConfigurationSetDeliveryOptions](#postputconfigurationsetdeliveryoptions) - Adds or updates the delivery options for a configuration set.
* [postPutIdentityPolicy](#postputidentitypolicy) - <p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postReorderReceiptRuleSet](#postreorderreceiptruleset) - <p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postSendBounce](#postsendbounce) - <p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postSendBulkTemplatedEmail](#postsendbulktemplatedemail) - <p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>
* [postSendCustomVerificationEmail](#postsendcustomverificationemail) - <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postSendEmail](#postsendemail) - <p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>
* [postSendRawEmail](#postsendrawemail) - <p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>
* [postSendTemplatedEmail](#postsendtemplatedemail) - <p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>
* [postSetActiveReceiptRuleSet](#postsetactivereceiptruleset) - <p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postSetIdentityDkimEnabled](#postsetidentitydkimenabled) - <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
* [postSetIdentityFeedbackForwardingEnabled](#postsetidentityfeedbackforwardingenabled) - <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [postSetIdentityHeadersInNotificationsEnabled](#postsetidentityheadersinnotificationsenabled) - <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [postSetIdentityMailFromDomain](#postsetidentitymailfromdomain) - <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
* [postSetIdentityNotificationTopic](#postsetidentitynotificationtopic) - <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
* [postSetReceiptRulePosition](#postsetreceiptruleposition) - <p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postTestRenderTemplate](#posttestrendertemplate) - <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateAccountSendingEnabled](#postupdateaccountsendingenabled) - <p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateConfigurationSetEventDestination](#postupdateconfigurationseteventdestination) - <p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>
* [postUpdateConfigurationSetReputationMetricsEnabled](#postupdateconfigurationsetreputationmetricsenabled) - <p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateConfigurationSetSendingEnabled](#postupdateconfigurationsetsendingenabled) - <p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateConfigurationSetTrackingOptions](#postupdateconfigurationsettrackingoptions) - <p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
* [postUpdateCustomVerificationEmailTemplate](#postupdatecustomverificationemailtemplate) - <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateReceiptRule](#postupdatereceiptrule) - <p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postUpdateTemplate](#postupdatetemplate) - <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
* [postVerifyDomainDkim](#postverifydomaindkim) - <p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
* [postVerifyDomainIdentity](#postverifydomainidentity) - <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
* [postVerifyEmailAddress](#postverifyemailaddress) - Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.
* [postVerifyEmailIdentity](#postverifyemailidentity) - <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

## getCloneReceiptRuleSet

<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCloneReceiptRuleSetRequest req = new GETCloneReceiptRuleSetRequest(GETCloneReceiptRuleSetActionEnum.CLONE_RECEIPT_RULE_SET, "suscipit", "iure", GETCloneReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETCloneReceiptRuleSetResponse res = sdk.sdk.getCloneReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateConfigurationSet

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetConfigurationSet;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetResponse;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateConfigurationSetRequest req = new GETCreateConfigurationSetRequest(GETCreateConfigurationSetActionEnum.CREATE_CONFIGURATION_SET,                 new GETCreateConfigurationSetConfigurationSet("placeat");, GETCreateConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            GETCreateConfigurationSetResponse res = sdk.sdk.getCreateConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateConfigurationSetTrackingOptions

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetTrackingOptionsTrackingOptions;
import org.openapis.openapi.models.operations.GETCreateConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateConfigurationSetTrackingOptionsRequest req = new GETCreateConfigurationSetTrackingOptionsRequest(GETCreateConfigurationSetTrackingOptionsActionEnum.CREATE_CONFIGURATION_SET_TRACKING_OPTIONS, "veritatis",                 new GETCreateConfigurationSetTrackingOptionsTrackingOptions() {{
                                customRedirectDomain = "deserunt";
                            }};, GETCreateConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            GETCreateConfigurationSetTrackingOptionsResponse res = sdk.sdk.getCreateConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.GETCreateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.GETCreateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.GETCreateCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateCustomVerificationEmailTemplateRequest req = new GETCreateCustomVerificationEmailTemplateRequest(GETCreateCustomVerificationEmailTemplateActionEnum.CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, "maiores", "molestiae", "quod", "quod", "esse", "totam", GETCreateCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            GETCreateCustomVerificationEmailTemplateResponse res = sdk.sdk.getCreateCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateReceiptRuleSet

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETCreateReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETCreateReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETCreateReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateReceiptRuleSetRequest req = new GETCreateReceiptRuleSetRequest(GETCreateReceiptRuleSetActionEnum.CREATE_RECEIPT_RULE_SET, "hic", GETCreateReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GETCreateReceiptRuleSetResponse res = sdk.sdk.getCreateReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateTemplateActionEnum;
import org.openapis.openapi.models.operations.GETCreateTemplateRequest;
import org.openapis.openapi.models.operations.GETCreateTemplateResponse;
import org.openapis.openapi.models.operations.GETCreateTemplateTemplate;
import org.openapis.openapi.models.operations.GETCreateTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateTemplateRequest req = new GETCreateTemplateRequest(GETCreateTemplateActionEnum.CREATE_TEMPLATE,                 new GETCreateTemplateTemplate("cum") {{
                                htmlPart = "esse";
                                subjectPart = "ipsum";
                                textPart = "excepturi";
                            }};, GETCreateTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            GETCreateTemplateResponse res = sdk.sdk.getCreateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteConfigurationSet

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetRequest;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetResponse;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteConfigurationSetRequest req = new GETDeleteConfigurationSetRequest(GETDeleteConfigurationSetActionEnum.DELETE_CONFIGURATION_SET, "laboriosam", GETDeleteConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            GETDeleteConfigurationSetResponse res = sdk.sdk.getDeleteConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteConfigurationSetEventDestination

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetEventDestinationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetEventDestinationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteConfigurationSetEventDestinationRequest req = new GETDeleteConfigurationSetEventDestinationRequest(GETDeleteConfigurationSetEventDestinationActionEnum.DELETE_CONFIGURATION_SET_EVENT_DESTINATION, "quidem", "architecto", GETDeleteConfigurationSetEventDestinationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETDeleteConfigurationSetEventDestinationResponse res = sdk.sdk.getDeleteConfigurationSetEventDestination(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteConfigurationSetTrackingOptions

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.GETDeleteConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteConfigurationSetTrackingOptionsRequest req = new GETDeleteConfigurationSetTrackingOptionsRequest(GETDeleteConfigurationSetTrackingOptionsActionEnum.DELETE_CONFIGURATION_SET_TRACKING_OPTIONS, "explicabo", GETDeleteConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            GETDeleteConfigurationSetTrackingOptionsResponse res = sdk.sdk.getDeleteConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.GETDeleteCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.GETDeleteCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteCustomVerificationEmailTemplateRequest req = new GETDeleteCustomVerificationEmailTemplateRequest(GETDeleteCustomVerificationEmailTemplateActionEnum.DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, "culpa", GETDeleteCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDeleteCustomVerificationEmailTemplateResponse res = sdk.sdk.getDeleteCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteIdentity

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteIdentityActionEnum;
import org.openapis.openapi.models.operations.GETDeleteIdentityRequest;
import org.openapis.openapi.models.operations.GETDeleteIdentityResponse;
import org.openapis.openapi.models.operations.GETDeleteIdentityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteIdentityRequest req = new GETDeleteIdentityRequest(GETDeleteIdentityActionEnum.DELETE_IDENTITY, "mollitia", GETDeleteIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            GETDeleteIdentityResponse res = sdk.sdk.getDeleteIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteIdentityPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteIdentityPolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteIdentityPolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteIdentityPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteIdentityPolicyRequest req = new GETDeleteIdentityPolicyRequest(GETDeleteIdentityPolicyActionEnum.DELETE_IDENTITY_POLICY, "quis", "vitae", GETDeleteIdentityPolicyVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDeleteIdentityPolicyResponse res = sdk.sdk.getDeleteIdentityPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteReceiptFilter

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteReceiptFilterActionEnum;
import org.openapis.openapi.models.operations.GETDeleteReceiptFilterRequest;
import org.openapis.openapi.models.operations.GETDeleteReceiptFilterResponse;
import org.openapis.openapi.models.operations.GETDeleteReceiptFilterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteReceiptFilterRequest req = new GETDeleteReceiptFilterRequest(GETDeleteReceiptFilterActionEnum.DELETE_RECEIPT_FILTER, "id", GETDeleteReceiptFilterVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDeleteReceiptFilterResponse res = sdk.sdk.getDeleteReceiptFilter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteReceiptRule

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleRequest;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleResponse;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteReceiptRuleRequest req = new GETDeleteReceiptRuleRequest(GETDeleteReceiptRuleActionEnum.DELETE_RECEIPT_RULE, "voluptatibus", "vero", GETDeleteReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            GETDeleteReceiptRuleResponse res = sdk.sdk.getDeleteReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteReceiptRuleSet

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETDeleteReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteReceiptRuleSetRequest req = new GETDeleteReceiptRuleSetRequest(GETDeleteReceiptRuleSetActionEnum.DELETE_RECEIPT_RULE_SET, "doloremque", GETDeleteReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            GETDeleteReceiptRuleSetResponse res = sdk.sdk.getDeleteReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteTemplateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteTemplateRequest;
import org.openapis.openapi.models.operations.GETDeleteTemplateResponse;
import org.openapis.openapi.models.operations.GETDeleteTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteTemplateRequest req = new GETDeleteTemplateRequest(GETDeleteTemplateActionEnum.DELETE_TEMPLATE, "harum", GETDeleteTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            GETDeleteTemplateResponse res = sdk.sdk.getDeleteTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteVerifiedEmailAddress

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteVerifiedEmailAddressActionEnum;
import org.openapis.openapi.models.operations.GETDeleteVerifiedEmailAddressRequest;
import org.openapis.openapi.models.operations.GETDeleteVerifiedEmailAddressResponse;
import org.openapis.openapi.models.operations.GETDeleteVerifiedEmailAddressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteVerifiedEmailAddressRequest req = new GETDeleteVerifiedEmailAddressRequest(GETDeleteVerifiedEmailAddressActionEnum.DELETE_VERIFIED_EMAIL_ADDRESS, "excepturi", GETDeleteVerifiedEmailAddressVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GETDeleteVerifiedEmailAddressResponse res = sdk.sdk.getDeleteVerifiedEmailAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeActiveReceiptRuleSet

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeActiveReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETDescribeActiveReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETDescribeActiveReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETDescribeActiveReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeActiveReceiptRuleSetRequest req = new GETDescribeActiveReceiptRuleSetRequest(GETDescribeActiveReceiptRuleSetActionEnum.DESCRIBE_ACTIVE_RECEIPT_RULE_SET, GETDescribeActiveReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETDescribeActiveReceiptRuleSetResponse res = sdk.sdk.getDescribeActiveReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeConfigurationSet

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSetRequest;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSetResponse;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationSetAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeConfigurationSetRequest req = new GETDescribeConfigurationSetRequest(GETDescribeConfigurationSetActionEnum.DESCRIBE_CONFIGURATION_SET, "deserunt", GETDescribeConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                configurationSetAttributeNames = new org.openapis.openapi.models.shared.ConfigurationSetAttributeEnum[]{{
                    add(ConfigurationSetAttributeEnum.REPUTATION_OPTIONS),
                    add(ConfigurationSetAttributeEnum.TRACKING_OPTIONS),
                    add(ConfigurationSetAttributeEnum.TRACKING_OPTIONS),
                }};
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            GETDescribeConfigurationSetResponse res = sdk.sdk.getDescribeConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReceiptRule

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleRequest;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleResponse;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReceiptRuleRequest req = new GETDescribeReceiptRuleRequest(GETDescribeReceiptRuleActionEnum.DESCRIBE_RECEIPT_RULE, "alias", "fugit", GETDescribeReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            GETDescribeReceiptRuleResponse res = sdk.sdk.getDescribeReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeReceiptRuleSet

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETDescribeReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeReceiptRuleSetRequest req = new GETDescribeReceiptRuleSetRequest(GETDescribeReceiptRuleSetActionEnum.DESCRIBE_RECEIPT_RULE_SET, "non", GETDescribeReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "sint";
                xAmzCredential = "aliquid";
                xAmzDate = "provident";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "officia";
            }};            

            GETDescribeReceiptRuleSetResponse res = sdk.sdk.getDescribeReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETAccountSendingEnabled

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETAccountSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.GETGETAccountSendingEnabledRequest;
import org.openapis.openapi.models.operations.GETGETAccountSendingEnabledResponse;
import org.openapis.openapi.models.operations.GETGETAccountSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETAccountSendingEnabledRequest req = new GETGETAccountSendingEnabledRequest(GETGETAccountSendingEnabledActionEnum.GET_ACCOUNT_SENDING_ENABLED, GETGETAccountSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            GETGETAccountSendingEnabledResponse res = sdk.sdk.getGETAccountSendingEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.GETGETCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.GETGETCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.GETGETCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETCustomVerificationEmailTemplateRequest req = new GETGETCustomVerificationEmailTemplateRequest(GETGETCustomVerificationEmailTemplateActionEnum.GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, "dicta", GETGETCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            GETGETCustomVerificationEmailTemplateResponse res = sdk.sdk.getGETCustomVerificationEmailTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETIdentityDkimAttributes

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETIdentityDkimAttributesActionEnum;
import org.openapis.openapi.models.operations.GETGETIdentityDkimAttributesRequest;
import org.openapis.openapi.models.operations.GETGETIdentityDkimAttributesResponse;
import org.openapis.openapi.models.operations.GETGETIdentityDkimAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETIdentityDkimAttributesRequest req = new GETGETIdentityDkimAttributesRequest(GETGETIdentityDkimAttributesActionEnum.GET_IDENTITY_DKIM_ATTRIBUTES,                 new String[]{{
                                add("enim"),
                                add("accusamus"),
                                add("delectus"),
                            }}, GETGETIdentityDkimAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETGETIdentityDkimAttributesResponse res = sdk.sdk.getGETIdentityDkimAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETIdentityMailFromDomainAttributes

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETIdentityMailFromDomainAttributesActionEnum;
import org.openapis.openapi.models.operations.GETGETIdentityMailFromDomainAttributesRequest;
import org.openapis.openapi.models.operations.GETGETIdentityMailFromDomainAttributesResponse;
import org.openapis.openapi.models.operations.GETGETIdentityMailFromDomainAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETIdentityMailFromDomainAttributesRequest req = new GETGETIdentityMailFromDomainAttributesRequest(GETGETIdentityMailFromDomainAttributesActionEnum.GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES,                 new String[]{{
                                add("nisi"),
                                add("vel"),
                                add("natus"),
                            }}, GETGETIdentityMailFromDomainAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GETGETIdentityMailFromDomainAttributesResponse res = sdk.sdk.getGETIdentityMailFromDomainAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETIdentityNotificationAttributes

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETIdentityNotificationAttributesActionEnum;
import org.openapis.openapi.models.operations.GETGETIdentityNotificationAttributesRequest;
import org.openapis.openapi.models.operations.GETGETIdentityNotificationAttributesResponse;
import org.openapis.openapi.models.operations.GETGETIdentityNotificationAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETIdentityNotificationAttributesRequest req = new GETGETIdentityNotificationAttributesRequest(GETGETIdentityNotificationAttributesActionEnum.GET_IDENTITY_NOTIFICATION_ATTRIBUTES,                 new String[]{{
                                add("suscipit"),
                                add("natus"),
                            }}, GETGETIdentityNotificationAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            GETGETIdentityNotificationAttributesResponse res = sdk.sdk.getGETIdentityNotificationAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETIdentityPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETGETIdentityPoliciesRequest;
import org.openapis.openapi.models.operations.GETGETIdentityPoliciesResponse;
import org.openapis.openapi.models.operations.GETGETIdentityPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETIdentityPoliciesRequest req = new GETGETIdentityPoliciesRequest(GETGETIdentityPoliciesActionEnum.GET_IDENTITY_POLICIES, "ullam",                 new String[]{{
                                add("quos"),
                                add("sint"),
                                add("accusantium"),
                            }}, GETGETIdentityPoliciesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            GETGETIdentityPoliciesResponse res = sdk.sdk.getGETIdentityPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETIdentityVerificationAttributes

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETIdentityVerificationAttributesActionEnum;
import org.openapis.openapi.models.operations.GETGETIdentityVerificationAttributesRequest;
import org.openapis.openapi.models.operations.GETGETIdentityVerificationAttributesResponse;
import org.openapis.openapi.models.operations.GETGETIdentityVerificationAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETIdentityVerificationAttributesRequest req = new GETGETIdentityVerificationAttributesRequest(GETGETIdentityVerificationAttributesActionEnum.GET_IDENTITY_VERIFICATION_ATTRIBUTES,                 new String[]{{
                                add("quasi"),
                                add("iure"),
                            }}, GETGETIdentityVerificationAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            GETGETIdentityVerificationAttributesResponse res = sdk.sdk.getGETIdentityVerificationAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETSendQuota

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETSendQuotaActionEnum;
import org.openapis.openapi.models.operations.GETGETSendQuotaRequest;
import org.openapis.openapi.models.operations.GETGETSendQuotaResponse;
import org.openapis.openapi.models.operations.GETGETSendQuotaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETSendQuotaRequest req = new GETGETSendQuotaRequest(GETGETSendQuotaActionEnum.GET_SEND_QUOTA, GETGETSendQuotaVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GETGETSendQuotaResponse res = sdk.sdk.getGETSendQuota(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETSendStatistics

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETSendStatisticsActionEnum;
import org.openapis.openapi.models.operations.GETGETSendStatisticsRequest;
import org.openapis.openapi.models.operations.GETGETSendStatisticsResponse;
import org.openapis.openapi.models.operations.GETGETSendStatisticsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETSendStatisticsRequest req = new GETGETSendStatisticsRequest(GETGETSendStatisticsActionEnum.GET_SEND_STATISTICS, GETGETSendStatisticsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
            }};            

            GETGETSendStatisticsResponse res = sdk.sdk.getGETSendStatistics(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGETTemplate

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGETTemplateActionEnum;
import org.openapis.openapi.models.operations.GETGETTemplateRequest;
import org.openapis.openapi.models.operations.GETGETTemplateResponse;
import org.openapis.openapi.models.operations.GETGETTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETGETTemplateRequest req = new GETGETTemplateRequest(GETGETTemplateActionEnum.GET_TEMPLATE, "quo", GETGETTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "maxime";
                xAmzDate = "ea";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "ea";
            }};            

            GETGETTemplateResponse res = sdk.sdk.getGETTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListConfigurationSets

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListConfigurationSetsActionEnum;
import org.openapis.openapi.models.operations.GETListConfigurationSetsRequest;
import org.openapis.openapi.models.operations.GETListConfigurationSetsResponse;
import org.openapis.openapi.models.operations.GETListConfigurationSetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListConfigurationSetsRequest req = new GETListConfigurationSetsRequest(GETListConfigurationSetsActionEnum.LIST_CONFIGURATION_SETS, GETListConfigurationSetsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxItems = 69167L;
                nextToken = "maiores";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            GETListConfigurationSetsResponse res = sdk.sdk.getListConfigurationSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListCustomVerificationEmailTemplatesActionEnum;
import org.openapis.openapi.models.operations.GETListCustomVerificationEmailTemplatesRequest;
import org.openapis.openapi.models.operations.GETListCustomVerificationEmailTemplatesResponse;
import org.openapis.openapi.models.operations.GETListCustomVerificationEmailTemplatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListCustomVerificationEmailTemplatesRequest req = new GETListCustomVerificationEmailTemplatesRequest(GETListCustomVerificationEmailTemplatesActionEnum.LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES, GETListCustomVerificationEmailTemplatesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxResults = 975522L;
                nextToken = "perferendis";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            GETListCustomVerificationEmailTemplatesResponse res = sdk.sdk.getListCustomVerificationEmailTemplates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListIdentities

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListIdentitiesActionEnum;
import org.openapis.openapi.models.operations.GETListIdentitiesIdentityTypeEnum;
import org.openapis.openapi.models.operations.GETListIdentitiesRequest;
import org.openapis.openapi.models.operations.GETListIdentitiesResponse;
import org.openapis.openapi.models.operations.GETListIdentitiesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListIdentitiesRequest req = new GETListIdentitiesRequest(GETListIdentitiesActionEnum.LIST_IDENTITIES, GETListIdentitiesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                identityType = GETListIdentitiesIdentityTypeEnum.EMAIL_ADDRESS;
                maxItems = 339404L;
                nextToken = "totam";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            GETListIdentitiesResponse res = sdk.sdk.getListIdentities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListIdentityPolicies

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListIdentityPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETListIdentityPoliciesRequest;
import org.openapis.openapi.models.operations.GETListIdentityPoliciesResponse;
import org.openapis.openapi.models.operations.GETListIdentityPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListIdentityPoliciesRequest req = new GETListIdentityPoliciesRequest(GETListIdentityPoliciesActionEnum.LIST_IDENTITY_POLICIES, "quam", GETListIdentityPoliciesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            GETListIdentityPoliciesResponse res = sdk.sdk.getListIdentityPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListReceiptFilters

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListReceiptFiltersActionEnum;
import org.openapis.openapi.models.operations.GETListReceiptFiltersRequest;
import org.openapis.openapi.models.operations.GETListReceiptFiltersResponse;
import org.openapis.openapi.models.operations.GETListReceiptFiltersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListReceiptFiltersRequest req = new GETListReceiptFiltersRequest(GETListReceiptFiltersActionEnum.LIST_RECEIPT_FILTERS, GETListReceiptFiltersVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETListReceiptFiltersResponse res = sdk.sdk.getListReceiptFilters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListReceiptRuleSets

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListReceiptRuleSetsActionEnum;
import org.openapis.openapi.models.operations.GETListReceiptRuleSetsRequest;
import org.openapis.openapi.models.operations.GETListReceiptRuleSetsResponse;
import org.openapis.openapi.models.operations.GETListReceiptRuleSetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListReceiptRuleSetsRequest req = new GETListReceiptRuleSetsRequest(GETListReceiptRuleSetsActionEnum.LIST_RECEIPT_RULE_SETS, GETListReceiptRuleSetsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                nextToken = "adipisci";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            GETListReceiptRuleSetsResponse res = sdk.sdk.getListReceiptRuleSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTemplates

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTemplatesActionEnum;
import org.openapis.openapi.models.operations.GETListTemplatesRequest;
import org.openapis.openapi.models.operations.GETListTemplatesResponse;
import org.openapis.openapi.models.operations.GETListTemplatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTemplatesRequest req = new GETListTemplatesRequest(GETListTemplatesActionEnum.LIST_TEMPLATES, GETListTemplatesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxItems = 750844L;
                nextToken = "libero";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            GETListTemplatesResponse res = sdk.sdk.getListTemplates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListVerifiedEmailAddresses

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListVerifiedEmailAddressesActionEnum;
import org.openapis.openapi.models.operations.GETListVerifiedEmailAddressesRequest;
import org.openapis.openapi.models.operations.GETListVerifiedEmailAddressesResponse;
import org.openapis.openapi.models.operations.GETListVerifiedEmailAddressesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListVerifiedEmailAddressesRequest req = new GETListVerifiedEmailAddressesRequest(GETListVerifiedEmailAddressesActionEnum.LIST_VERIFIED_EMAIL_ADDRESSES, GETListVerifiedEmailAddressesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETListVerifiedEmailAddressesResponse res = sdk.sdk.getListVerifiedEmailAddresses(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutConfigurationSetDeliveryOptions

Adds or updates the delivery options for a configuration set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutConfigurationSetDeliveryOptionsActionEnum;
import org.openapis.openapi.models.operations.GETPutConfigurationSetDeliveryOptionsDeliveryOptions;
import org.openapis.openapi.models.operations.GETPutConfigurationSetDeliveryOptionsRequest;
import org.openapis.openapi.models.operations.GETPutConfigurationSetDeliveryOptionsResponse;
import org.openapis.openapi.models.operations.GETPutConfigurationSetDeliveryOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutConfigurationSetDeliveryOptionsRequest req = new GETPutConfigurationSetDeliveryOptionsRequest(GETPutConfigurationSetDeliveryOptionsActionEnum.PUT_CONFIGURATION_SET_DELIVERY_OPTIONS, "dolorum", GETPutConfigurationSetDeliveryOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                deliveryOptions = new GETPutConfigurationSetDeliveryOptionsDeliveryOptions() {{
                    tlsPolicy = TlsPolicyEnum.REQUIRE;
                }};;
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            GETPutConfigurationSetDeliveryOptionsResponse res = sdk.sdk.getPutConfigurationSetDeliveryOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPutIdentityPolicy

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETPutIdentityPolicyActionEnum;
import org.openapis.openapi.models.operations.GETPutIdentityPolicyRequest;
import org.openapis.openapi.models.operations.GETPutIdentityPolicyResponse;
import org.openapis.openapi.models.operations.GETPutIdentityPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETPutIdentityPolicyRequest req = new GETPutIdentityPolicyRequest(GETPutIdentityPolicyActionEnum.PUT_IDENTITY_POLICY, "voluptatibus", "voluptas", "natus", GETPutIdentityPolicyVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            GETPutIdentityPolicyResponse res = sdk.sdk.getPutIdentityPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReorderReceiptRuleSet

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETReorderReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETReorderReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETReorderReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETReorderReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETReorderReceiptRuleSetRequest req = new GETReorderReceiptRuleSetRequest(GETReorderReceiptRuleSetActionEnum.REORDER_RECEIPT_RULE_SET,                 new String[]{{
                                add("dolorum"),
                                add("deleniti"),
                            }}, "omnis", GETReorderReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
            }};            

            GETReorderReceiptRuleSetResponse res = sdk.sdk.getReorderReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSendCustomVerificationEmailActionEnum;
import org.openapis.openapi.models.operations.GETSendCustomVerificationEmailRequest;
import org.openapis.openapi.models.operations.GETSendCustomVerificationEmailResponse;
import org.openapis.openapi.models.operations.GETSendCustomVerificationEmailVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSendCustomVerificationEmailRequest req = new GETSendCustomVerificationEmailRequest(GETSendCustomVerificationEmailActionEnum.SEND_CUSTOM_VERIFICATION_EMAIL, "eius", "aspernatur", GETSendCustomVerificationEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                configurationSetName = "perferendis";
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETSendCustomVerificationEmailResponse res = sdk.sdk.getSendCustomVerificationEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetActiveReceiptRuleSet

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetActiveReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETSetActiveReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETSetActiveReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETSetActiveReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetActiveReceiptRuleSetRequest req = new GETSetActiveReceiptRuleSetRequest(GETSetActiveReceiptRuleSetActionEnum.SET_ACTIVE_RECEIPT_RULE_SET, GETSetActiveReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                ruleSetName = "minima";
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            GETSetActiveReceiptRuleSetResponse res = sdk.sdk.getSetActiveReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIdentityDkimEnabled

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIdentityDkimEnabledActionEnum;
import org.openapis.openapi.models.operations.GETSetIdentityDkimEnabledRequest;
import org.openapis.openapi.models.operations.GETSetIdentityDkimEnabledResponse;
import org.openapis.openapi.models.operations.GETSetIdentityDkimEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIdentityDkimEnabledRequest req = new GETSetIdentityDkimEnabledRequest(GETSetIdentityDkimEnabledActionEnum.SET_IDENTITY_DKIM_ENABLED, false, "quod", GETSetIdentityDkimEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            GETSetIdentityDkimEnabledResponse res = sdk.sdk.getSetIdentityDkimEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIdentityFeedbackForwardingEnabled

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIdentityFeedbackForwardingEnabledActionEnum;
import org.openapis.openapi.models.operations.GETSetIdentityFeedbackForwardingEnabledRequest;
import org.openapis.openapi.models.operations.GETSetIdentityFeedbackForwardingEnabledResponse;
import org.openapis.openapi.models.operations.GETSetIdentityFeedbackForwardingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIdentityFeedbackForwardingEnabledRequest req = new GETSetIdentityFeedbackForwardingEnabledRequest(GETSetIdentityFeedbackForwardingEnabledActionEnum.SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED, false, "quisquam", GETSetIdentityFeedbackForwardingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            GETSetIdentityFeedbackForwardingEnabledResponse res = sdk.sdk.getSetIdentityFeedbackForwardingEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIdentityHeadersInNotificationsEnabled

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIdentityHeadersInNotificationsEnabledActionEnum;
import org.openapis.openapi.models.operations.GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;
import org.openapis.openapi.models.operations.GETSetIdentityHeadersInNotificationsEnabledRequest;
import org.openapis.openapi.models.operations.GETSetIdentityHeadersInNotificationsEnabledResponse;
import org.openapis.openapi.models.operations.GETSetIdentityHeadersInNotificationsEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIdentityHeadersInNotificationsEnabledRequest req = new GETSetIdentityHeadersInNotificationsEnabledRequest(GETSetIdentityHeadersInNotificationsEnabledActionEnum.SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED, false, "totam", GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum.COMPLAINT, GETSetIdentityHeadersInNotificationsEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            GETSetIdentityHeadersInNotificationsEnabledResponse res = sdk.sdk.getSetIdentityHeadersInNotificationsEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIdentityMailFromDomain

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIdentityMailFromDomainActionEnum;
import org.openapis.openapi.models.operations.GETSetIdentityMailFromDomainBehaviorOnMxFailureEnum;
import org.openapis.openapi.models.operations.GETSetIdentityMailFromDomainRequest;
import org.openapis.openapi.models.operations.GETSetIdentityMailFromDomainResponse;
import org.openapis.openapi.models.operations.GETSetIdentityMailFromDomainVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIdentityMailFromDomainRequest req = new GETSetIdentityMailFromDomainRequest(GETSetIdentityMailFromDomainActionEnum.SET_IDENTITY_MAIL_FROM_DOMAIN, "quam", GETSetIdentityMailFromDomainVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                behaviorOnMXFailure = GETSetIdentityMailFromDomainBehaviorOnMxFailureEnum.USE_DEFAULT_VALUE;
                mailFromDomain = "incidunt";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
            }};            

            GETSetIdentityMailFromDomainResponse res = sdk.sdk.getSetIdentityMailFromDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIdentityNotificationTopic

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIdentityNotificationTopicActionEnum;
import org.openapis.openapi.models.operations.GETSetIdentityNotificationTopicNotificationTypeEnum;
import org.openapis.openapi.models.operations.GETSetIdentityNotificationTopicRequest;
import org.openapis.openapi.models.operations.GETSetIdentityNotificationTopicResponse;
import org.openapis.openapi.models.operations.GETSetIdentityNotificationTopicVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIdentityNotificationTopicRequest req = new GETSetIdentityNotificationTopicRequest(GETSetIdentityNotificationTopicActionEnum.SET_IDENTITY_NOTIFICATION_TOPIC, "incidunt", GETSetIdentityNotificationTopicNotificationTypeEnum.BOUNCE, GETSetIdentityNotificationTopicVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                snsTopic = "dolores";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            GETSetIdentityNotificationTopicResponse res = sdk.sdk.getSetIdentityNotificationTopic(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetReceiptRulePosition

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetReceiptRulePositionActionEnum;
import org.openapis.openapi.models.operations.GETSetReceiptRulePositionRequest;
import org.openapis.openapi.models.operations.GETSetReceiptRulePositionResponse;
import org.openapis.openapi.models.operations.GETSetReceiptRulePositionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetReceiptRulePositionRequest req = new GETSetReceiptRulePositionRequest(GETSetReceiptRulePositionActionEnum.SET_RECEIPT_RULE_POSITION, "fugit", "magni", GETSetReceiptRulePositionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                after = "odio";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            GETSetReceiptRulePositionResponse res = sdk.sdk.getSetReceiptRulePosition(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestRenderTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTestRenderTemplateActionEnum;
import org.openapis.openapi.models.operations.GETTestRenderTemplateRequest;
import org.openapis.openapi.models.operations.GETTestRenderTemplateResponse;
import org.openapis.openapi.models.operations.GETTestRenderTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTestRenderTemplateRequest req = new GETTestRenderTemplateRequest(GETTestRenderTemplateActionEnum.TEST_RENDER_TEMPLATE, "et", "saepe", GETTestRenderTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            GETTestRenderTemplateResponse res = sdk.sdk.getTestRenderTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateAccountSendingEnabled

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateAccountSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.GETUpdateAccountSendingEnabledRequest;
import org.openapis.openapi.models.operations.GETUpdateAccountSendingEnabledResponse;
import org.openapis.openapi.models.operations.GETUpdateAccountSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateAccountSendingEnabledRequest req = new GETUpdateAccountSendingEnabledRequest(GETUpdateAccountSendingEnabledActionEnum.UPDATE_ACCOUNT_SENDING_ENABLED, GETUpdateAccountSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                enabled = false;
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "labore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "quae";
            }};            

            GETUpdateAccountSendingEnabledResponse res = sdk.sdk.getUpdateAccountSendingEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateConfigurationSetReputationMetricsEnabled

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetReputationMetricsEnabledActionEnum;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetReputationMetricsEnabledRequest;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetReputationMetricsEnabledResponse;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateConfigurationSetReputationMetricsEnabledRequest req = new GETUpdateConfigurationSetReputationMetricsEnabledRequest(GETUpdateConfigurationSetReputationMetricsEnabledActionEnum.UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED, "quas", false, GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "porro";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ut";
            }};            

            GETUpdateConfigurationSetReputationMetricsEnabledResponse res = sdk.sdk.getUpdateConfigurationSetReputationMetricsEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateConfigurationSetSendingEnabled

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetSendingEnabledRequest;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetSendingEnabledResponse;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateConfigurationSetSendingEnabledRequest req = new GETUpdateConfigurationSetSendingEnabledRequest(GETUpdateConfigurationSetSendingEnabledActionEnum.UPDATE_CONFIGURATION_SET_SENDING_ENABLED, "cupiditate", false, GETUpdateConfigurationSetSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            GETUpdateConfigurationSetSendingEnabledResponse res = sdk.sdk.getUpdateConfigurationSetSendingEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateConfigurationSetTrackingOptions

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetTrackingOptionsTrackingOptions;
import org.openapis.openapi.models.operations.GETUpdateConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateConfigurationSetTrackingOptionsRequest req = new GETUpdateConfigurationSetTrackingOptionsRequest(GETUpdateConfigurationSetTrackingOptionsActionEnum.UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS, "omnis",                 new GETUpdateConfigurationSetTrackingOptionsTrackingOptions() {{
                                customRedirectDomain = "quis";
                            }};, GETUpdateConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GETUpdateConfigurationSetTrackingOptionsResponse res = sdk.sdk.getUpdateConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.GETUpdateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.GETUpdateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.GETUpdateCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateCustomVerificationEmailTemplateRequest req = new GETUpdateCustomVerificationEmailTemplateRequest(GETUpdateCustomVerificationEmailTemplateActionEnum.UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, "distinctio", GETUpdateCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                failureRedirectionURL = "quod";
                fromEmailAddress = "odio";
                successRedirectionURL = "similique";
                templateContent = "facilis";
                templateSubject = "vero";
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            GETUpdateCustomVerificationEmailTemplateResponse res = sdk.sdk.getUpdateCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateTemplateActionEnum;
import org.openapis.openapi.models.operations.GETUpdateTemplateRequest;
import org.openapis.openapi.models.operations.GETUpdateTemplateResponse;
import org.openapis.openapi.models.operations.GETUpdateTemplateTemplate;
import org.openapis.openapi.models.operations.GETUpdateTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateTemplateRequest req = new GETUpdateTemplateRequest(GETUpdateTemplateActionEnum.UPDATE_TEMPLATE,                 new GETUpdateTemplateTemplate("voluptatibus") {{
                                htmlPart = "exercitationem";
                                subjectPart = "nulla";
                                textPart = "fugit";
                            }};, GETUpdateTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "doloribus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "alias";
            }};            

            GETUpdateTemplateResponse res = sdk.sdk.getUpdateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVerifyDomainDkim

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVerifyDomainDkimActionEnum;
import org.openapis.openapi.models.operations.GETVerifyDomainDkimRequest;
import org.openapis.openapi.models.operations.GETVerifyDomainDkimResponse;
import org.openapis.openapi.models.operations.GETVerifyDomainDkimVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETVerifyDomainDkimRequest req = new GETVerifyDomainDkimRequest(GETVerifyDomainDkimActionEnum.VERIFY_DOMAIN_DKIM, "tempora", GETVerifyDomainDkimVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
            }};            

            GETVerifyDomainDkimResponse res = sdk.sdk.getVerifyDomainDkim(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVerifyDomainIdentity

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVerifyDomainIdentityActionEnum;
import org.openapis.openapi.models.operations.GETVerifyDomainIdentityRequest;
import org.openapis.openapi.models.operations.GETVerifyDomainIdentityResponse;
import org.openapis.openapi.models.operations.GETVerifyDomainIdentityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETVerifyDomainIdentityRequest req = new GETVerifyDomainIdentityRequest(GETVerifyDomainIdentityActionEnum.VERIFY_DOMAIN_IDENTITY, "laudantium", GETVerifyDomainIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETVerifyDomainIdentityResponse res = sdk.sdk.getVerifyDomainIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVerifyEmailAddress

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVerifyEmailAddressActionEnum;
import org.openapis.openapi.models.operations.GETVerifyEmailAddressRequest;
import org.openapis.openapi.models.operations.GETVerifyEmailAddressResponse;
import org.openapis.openapi.models.operations.GETVerifyEmailAddressVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETVerifyEmailAddressRequest req = new GETVerifyEmailAddressRequest(GETVerifyEmailAddressActionEnum.VERIFY_EMAIL_ADDRESS, "nostrum", GETVerifyEmailAddressVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "saepe";
                xAmzDate = "ea";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "veniam";
            }};            

            GETVerifyEmailAddressResponse res = sdk.sdk.getVerifyEmailAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVerifyEmailIdentity

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVerifyEmailIdentityActionEnum;
import org.openapis.openapi.models.operations.GETVerifyEmailIdentityRequest;
import org.openapis.openapi.models.operations.GETVerifyEmailIdentityResponse;
import org.openapis.openapi.models.operations.GETVerifyEmailIdentityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETVerifyEmailIdentityRequest req = new GETVerifyEmailIdentityRequest(GETVerifyEmailIdentityActionEnum.VERIFY_EMAIL_IDENTITY, "inventore", GETVerifyEmailIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            GETVerifyEmailIdentityResponse res = sdk.sdk.getVerifyEmailIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCloneReceiptRuleSet

<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCloneReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTCloneReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTCloneReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTCloneReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.CloneReceiptRuleSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCloneReceiptRuleSetRequest req = new POSTCloneReceiptRuleSetRequest(POSTCloneReceiptRuleSetActionEnum.CLONE_RECEIPT_RULE_SET, POSTCloneReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            POSTCloneReceiptRuleSetResponse res = sdk.sdk.postCloneReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateConfigurationSet

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetResponse;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationSet;
import org.openapis.openapi.models.shared.CreateConfigurationSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateConfigurationSetRequest req = new POSTCreateConfigurationSetRequest(POSTCreateConfigurationSetActionEnum.CREATE_CONFIGURATION_SET, POSTCreateConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "inventore".getBytes();
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            POSTCreateConfigurationSetResponse res = sdk.sdk.postCreateConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateConfigurationSetEventDestination

<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetEventDestinationActionEnum;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetEventDestinationVersionEnum;
import org.openapis.openapi.models.shared.CloudWatchDestination;
import org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration;
import org.openapis.openapi.models.shared.CreateConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.shared.DimensionValueSourceEnum;
import org.openapis.openapi.models.shared.EventDestination;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.SNSDestination;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateConfigurationSetEventDestinationRequest req = new POSTCreateConfigurationSetEventDestinationRequest(POSTCreateConfigurationSetEventDestinationActionEnum.CREATE_CONFIGURATION_SET_EVENT_DESTINATION, POSTCreateConfigurationSetEventDestinationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "nobis".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTCreateConfigurationSetEventDestinationResponse res = sdk.sdk.postCreateConfigurationSetEventDestination(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateConfigurationSetTrackingOptions

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.POSTCreateConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.CreateConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrackingOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateConfigurationSetTrackingOptionsRequest req = new POSTCreateConfigurationSetTrackingOptionsRequest(POSTCreateConfigurationSetTrackingOptionsActionEnum.CREATE_CONFIGURATION_SET_TRACKING_OPTIONS, POSTCreateConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
            }};            

            POSTCreateConfigurationSetTrackingOptionsResponse res = sdk.sdk.postCreateConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTCreateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.POSTCreateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.POSTCreateCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.CreateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateCustomVerificationEmailTemplateRequest req = new POSTCreateCustomVerificationEmailTemplateRequest(POSTCreateCustomVerificationEmailTemplateActionEnum.CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, POSTCreateCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "rem".getBytes();
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
            }};            

            POSTCreateCustomVerificationEmailTemplateResponse res = sdk.sdk.postCreateCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateReceiptFilter

<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateReceiptFilterActionEnum;
import org.openapis.openapi.models.operations.POSTCreateReceiptFilterRequest;
import org.openapis.openapi.models.operations.POSTCreateReceiptFilterResponse;
import org.openapis.openapi.models.operations.POSTCreateReceiptFilterVersionEnum;
import org.openapis.openapi.models.shared.CreateReceiptFilterRequest;
import org.openapis.openapi.models.shared.ReceiptFilter;
import org.openapis.openapi.models.shared.ReceiptFilterPolicyEnum;
import org.openapis.openapi.models.shared.ReceiptIpFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateReceiptFilterRequest req = new POSTCreateReceiptFilterRequest(POSTCreateReceiptFilterActionEnum.CREATE_RECEIPT_FILTER, POSTCreateReceiptFilterVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "eos".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
            }};            

            POSTCreateReceiptFilterResponse res = sdk.sdk.postCreateReceiptFilter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateReceiptRule

<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleRequest;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleResponse;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.AddHeaderAction;
import org.openapis.openapi.models.shared.BounceAction;
import org.openapis.openapi.models.shared.CreateReceiptRuleRequest;
import org.openapis.openapi.models.shared.InvocationTypeEnum;
import org.openapis.openapi.models.shared.LambdaAction;
import org.openapis.openapi.models.shared.ReceiptAction;
import org.openapis.openapi.models.shared.ReceiptRule;
import org.openapis.openapi.models.shared.S3Action;
import org.openapis.openapi.models.shared.SNSAction;
import org.openapis.openapi.models.shared.SNSActionEncodingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopAction;
import org.openapis.openapi.models.shared.StopScopeEnum;
import org.openapis.openapi.models.shared.TlsPolicyEnum;
import org.openapis.openapi.models.shared.WorkmailAction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateReceiptRuleRequest req = new POSTCreateReceiptRuleRequest(POSTCreateReceiptRuleActionEnum.CREATE_RECEIPT_RULE, POSTCreateReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "eius";
                xAmzDate = "eos";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "cupiditate";
            }};            

            POSTCreateReceiptRuleResponse res = sdk.sdk.postCreateReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateReceiptRuleSet

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTCreateReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.CreateReceiptRuleSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateReceiptRuleSetRequest req = new POSTCreateReceiptRuleSetRequest(POSTCreateReceiptRuleSetActionEnum.CREATE_RECEIPT_RULE_SET, POSTCreateReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "aspernatur";
                xAmzDate = "sequi";
                xAmzSecurityToken = "quo";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "recusandae";
            }};            

            POSTCreateReceiptRuleSetResponse res = sdk.sdk.postCreateReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTCreateTemplateRequest;
import org.openapis.openapi.models.operations.POSTCreateTemplateResponse;
import org.openapis.openapi.models.operations.POSTCreateTemplateVersionEnum;
import org.openapis.openapi.models.shared.CreateTemplateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Template;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateTemplateRequest req = new POSTCreateTemplateRequest(POSTCreateTemplateActionEnum.CREATE_TEMPLATE, POSTCreateTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            POSTCreateTemplateResponse res = sdk.sdk.postCreateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteConfigurationSet

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetRequest;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetResponse;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteConfigurationSetRequest req = new POSTDeleteConfigurationSetRequest(POSTDeleteConfigurationSetActionEnum.DELETE_CONFIGURATION_SET, POSTDeleteConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
            }};            

            POSTDeleteConfigurationSetResponse res = sdk.sdk.postDeleteConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteConfigurationSetEventDestination

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetEventDestinationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetEventDestinationVersionEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteConfigurationSetEventDestinationRequest req = new POSTDeleteConfigurationSetEventDestinationRequest(POSTDeleteConfigurationSetEventDestinationActionEnum.DELETE_CONFIGURATION_SET_EVENT_DESTINATION, POSTDeleteConfigurationSetEventDestinationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quas".getBytes();
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "deleniti";
                xAmzDate = "fugit";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "incidunt";
            }};            

            POSTDeleteConfigurationSetEventDestinationResponse res = sdk.sdk.postDeleteConfigurationSetEventDestination(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteConfigurationSetTrackingOptions

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteConfigurationSetTrackingOptionsRequest req = new POSTDeleteConfigurationSetTrackingOptionsRequest(POSTDeleteConfigurationSetTrackingOptionsActionEnum.DELETE_CONFIGURATION_SET_TRACKING_OPTIONS, POSTDeleteConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "fugit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "explicabo";
            }};            

            POSTDeleteConfigurationSetTrackingOptionsResponse res = sdk.sdk.postDeleteConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.POSTDeleteCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.POSTDeleteCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.DeleteCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteCustomVerificationEmailTemplateRequest req = new POSTDeleteCustomVerificationEmailTemplateRequest(POSTDeleteCustomVerificationEmailTemplateActionEnum.DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, POSTDeleteCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
            }};            

            POSTDeleteCustomVerificationEmailTemplateResponse res = sdk.sdk.postDeleteCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteIdentity

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteIdentityActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteIdentityRequest;
import org.openapis.openapi.models.operations.POSTDeleteIdentityResponse;
import org.openapis.openapi.models.operations.POSTDeleteIdentityVersionEnum;
import org.openapis.openapi.models.shared.DeleteIdentityRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteIdentityRequest req = new POSTDeleteIdentityRequest(POSTDeleteIdentityActionEnum.DELETE_IDENTITY, POSTDeleteIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "nam".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quasi";
                xAmzDate = "saepe";
                xAmzSecurityToken = "vel";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTDeleteIdentityResponse res = sdk.sdk.postDeleteIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteIdentityPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteIdentityPolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteIdentityPolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteIdentityPolicyVersionEnum;
import org.openapis.openapi.models.shared.DeleteIdentityPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteIdentityPolicyRequest req = new POSTDeleteIdentityPolicyRequest(POSTDeleteIdentityPolicyActionEnum.DELETE_IDENTITY_POLICY, POSTDeleteIdentityPolicyVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "occaecati".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
            }};            

            POSTDeleteIdentityPolicyResponse res = sdk.sdk.postDeleteIdentityPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteReceiptFilter

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteReceiptFilterActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteReceiptFilterRequest;
import org.openapis.openapi.models.operations.POSTDeleteReceiptFilterResponse;
import org.openapis.openapi.models.operations.POSTDeleteReceiptFilterVersionEnum;
import org.openapis.openapi.models.shared.DeleteReceiptFilterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteReceiptFilterRequest req = new POSTDeleteReceiptFilterRequest(POSTDeleteReceiptFilterActionEnum.DELETE_RECEIPT_FILTER, POSTDeleteReceiptFilterVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "consequuntur".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
            }};            

            POSTDeleteReceiptFilterResponse res = sdk.sdk.postDeleteReceiptFilter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteReceiptRule

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleRequest;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleResponse;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.DeleteReceiptRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteReceiptRuleRequest req = new POSTDeleteReceiptRuleRequest(POSTDeleteReceiptRuleActionEnum.DELETE_RECEIPT_RULE, POSTDeleteReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "quas";
                xAmzCredential = "esse";
                xAmzDate = "quasi";
                xAmzSecurityToken = "a";
                xAmzSignature = "error";
                xAmzSignedHeaders = "sint";
            }};            

            POSTDeleteReceiptRuleResponse res = sdk.sdk.postDeleteReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteReceiptRuleSet

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTDeleteReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.DeleteReceiptRuleSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteReceiptRuleSetRequest req = new POSTDeleteReceiptRuleSetRequest(POSTDeleteReceiptRuleSetActionEnum.DELETE_RECEIPT_RULE_SET, POSTDeleteReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "possimus".getBytes();
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "asperiores";
                xAmzDate = "facere";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "quasi";
            }};            

            POSTDeleteReceiptRuleSetResponse res = sdk.sdk.postDeleteReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteTemplateRequest;
import org.openapis.openapi.models.operations.POSTDeleteTemplateResponse;
import org.openapis.openapi.models.operations.POSTDeleteTemplateVersionEnum;
import org.openapis.openapi.models.shared.DeleteTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteTemplateRequest req = new POSTDeleteTemplateRequest(POSTDeleteTemplateActionEnum.DELETE_TEMPLATE, POSTDeleteTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "culpa".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quae";
                xAmzDate = "earum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "in";
                xAmzSignedHeaders = "eius";
            }};            

            POSTDeleteTemplateResponse res = sdk.sdk.postDeleteTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteVerifiedEmailAddress

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteVerifiedEmailAddressActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteVerifiedEmailAddressRequest;
import org.openapis.openapi.models.operations.POSTDeleteVerifiedEmailAddressResponse;
import org.openapis.openapi.models.operations.POSTDeleteVerifiedEmailAddressVersionEnum;
import org.openapis.openapi.models.shared.DeleteVerifiedEmailAddressRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteVerifiedEmailAddressRequest req = new POSTDeleteVerifiedEmailAddressRequest(POSTDeleteVerifiedEmailAddressActionEnum.DELETE_VERIFIED_EMAIL_ADDRESS, POSTDeleteVerifiedEmailAddressVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "aliquam";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            POSTDeleteVerifiedEmailAddressResponse res = sdk.sdk.postDeleteVerifiedEmailAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeActiveReceiptRuleSet

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeActiveReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeActiveReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTDescribeActiveReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTDescribeActiveReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeActiveReceiptRuleSetRequest req = new POSTDescribeActiveReceiptRuleSetRequest(POSTDescribeActiveReceiptRuleSetActionEnum.DESCRIBE_ACTIVE_RECEIPT_RULE_SET, POSTDescribeActiveReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "nisi".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "qui";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "ex";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "itaque";
            }};            

            POSTDescribeActiveReceiptRuleSetResponse res = sdk.sdk.postDescribeActiveReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeConfigurationSet

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSetActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSetRequest;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSetResponse;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSetVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationSetAttributeEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeConfigurationSetRequest req = new POSTDescribeConfigurationSetRequest(POSTDescribeConfigurationSetActionEnum.DESCRIBE_CONFIGURATION_SET, POSTDescribeConfigurationSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeConfigurationSetResponse res = sdk.sdk.postDescribeConfigurationSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReceiptRule

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleRequest;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleResponse;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.DescribeReceiptRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReceiptRuleRequest req = new POSTDescribeReceiptRuleRequest(POSTDescribeReceiptRuleActionEnum.DESCRIBE_RECEIPT_RULE, POSTDescribeReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "iste";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDescribeReceiptRuleResponse res = sdk.sdk.postDescribeReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeReceiptRuleSet

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTDescribeReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.DescribeReceiptRuleSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeReceiptRuleSetRequest req = new POSTDescribeReceiptRuleSetRequest(POSTDescribeReceiptRuleSetActionEnum.DESCRIBE_RECEIPT_RULE_SET, POSTDescribeReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTDescribeReceiptRuleSetResponse res = sdk.sdk.postDescribeReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetAccountSendingEnabled

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetAccountSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTGetAccountSendingEnabledRequest;
import org.openapis.openapi.models.operations.POSTGetAccountSendingEnabledResponse;
import org.openapis.openapi.models.operations.POSTGetAccountSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetAccountSendingEnabledRequest req = new POSTGetAccountSendingEnabledRequest(POSTGetAccountSendingEnabledActionEnum.GET_ACCOUNT_SENDING_ENABLED, POSTGetAccountSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTGetAccountSendingEnabledResponse res = sdk.sdk.postGetAccountSendingEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTGetCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.POSTGetCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.POSTGetCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.GetCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetCustomVerificationEmailTemplateRequest req = new POSTGetCustomVerificationEmailTemplateRequest(POSTGetCustomVerificationEmailTemplateActionEnum.GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, POSTGetCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "velit".getBytes();
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTGetCustomVerificationEmailTemplateResponse res = sdk.sdk.postGetCustomVerificationEmailTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetIdentityDkimAttributes

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetIdentityDkimAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTGetIdentityDkimAttributesRequest;
import org.openapis.openapi.models.operations.POSTGetIdentityDkimAttributesResponse;
import org.openapis.openapi.models.operations.POSTGetIdentityDkimAttributesVersionEnum;
import org.openapis.openapi.models.shared.GetIdentityDkimAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetIdentityDkimAttributesRequest req = new POSTGetIdentityDkimAttributesRequest(POSTGetIdentityDkimAttributesActionEnum.GET_IDENTITY_DKIM_ATTRIBUTES, POSTGetIdentityDkimAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "officia".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "officia";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTGetIdentityDkimAttributesResponse res = sdk.sdk.postGetIdentityDkimAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetIdentityMailFromDomainAttributes

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetIdentityMailFromDomainAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTGetIdentityMailFromDomainAttributesRequest;
import org.openapis.openapi.models.operations.POSTGetIdentityMailFromDomainAttributesResponse;
import org.openapis.openapi.models.operations.POSTGetIdentityMailFromDomainAttributesVersionEnum;
import org.openapis.openapi.models.shared.GetIdentityMailFromDomainAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetIdentityMailFromDomainAttributesRequest req = new POSTGetIdentityMailFromDomainAttributesRequest(POSTGetIdentityMailFromDomainAttributesActionEnum.GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES, POSTGetIdentityMailFromDomainAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "ab";
                xAmzCredential = "adipisci";
                xAmzDate = "fuga";
                xAmzSecurityToken = "id";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "velit";
            }};            

            POSTGetIdentityMailFromDomainAttributesResponse res = sdk.sdk.postGetIdentityMailFromDomainAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetIdentityNotificationAttributes

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetIdentityNotificationAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTGetIdentityNotificationAttributesRequest;
import org.openapis.openapi.models.operations.POSTGetIdentityNotificationAttributesResponse;
import org.openapis.openapi.models.operations.POSTGetIdentityNotificationAttributesVersionEnum;
import org.openapis.openapi.models.shared.GetIdentityNotificationAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetIdentityNotificationAttributesRequest req = new POSTGetIdentityNotificationAttributesRequest(POSTGetIdentityNotificationAttributesActionEnum.GET_IDENTITY_NOTIFICATION_ATTRIBUTES, POSTGetIdentityNotificationAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "est".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "totam";
                xAmzCredential = "fugiat";
                xAmzDate = "vel";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "vel";
            }};            

            POSTGetIdentityNotificationAttributesResponse res = sdk.sdk.postGetIdentityNotificationAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetIdentityPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTGetIdentityPoliciesRequest;
import org.openapis.openapi.models.operations.POSTGetIdentityPoliciesResponse;
import org.openapis.openapi.models.operations.POSTGetIdentityPoliciesVersionEnum;
import org.openapis.openapi.models.shared.GetIdentityPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetIdentityPoliciesRequest req = new POSTGetIdentityPoliciesRequest(POSTGetIdentityPoliciesActionEnum.GET_IDENTITY_POLICIES, POSTGetIdentityPoliciesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "possimus".getBytes();
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cum";
                xAmzCredential = "commodi";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "assumenda";
            }};            

            POSTGetIdentityPoliciesResponse res = sdk.sdk.postGetIdentityPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetIdentityVerificationAttributes

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetIdentityVerificationAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTGetIdentityVerificationAttributesRequest;
import org.openapis.openapi.models.operations.POSTGetIdentityVerificationAttributesResponse;
import org.openapis.openapi.models.operations.POSTGetIdentityVerificationAttributesVersionEnum;
import org.openapis.openapi.models.shared.GetIdentityVerificationAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetIdentityVerificationAttributesRequest req = new POSTGetIdentityVerificationAttributesRequest(POSTGetIdentityVerificationAttributesActionEnum.GET_IDENTITY_VERIFICATION_ATTRIBUTES, POSTGetIdentityVerificationAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "cum";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "in";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "earum";
            }};            

            POSTGetIdentityVerificationAttributesResponse res = sdk.sdk.postGetIdentityVerificationAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSendQuota

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetSendQuotaActionEnum;
import org.openapis.openapi.models.operations.POSTGetSendQuotaRequest;
import org.openapis.openapi.models.operations.POSTGetSendQuotaResponse;
import org.openapis.openapi.models.operations.POSTGetSendQuotaVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetSendQuotaRequest req = new POSTGetSendQuotaRequest(POSTGetSendQuotaActionEnum.GET_SEND_QUOTA, POSTGetSendQuotaVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            POSTGetSendQuotaResponse res = sdk.sdk.postGetSendQuota(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSendStatistics

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetSendStatisticsActionEnum;
import org.openapis.openapi.models.operations.POSTGetSendStatisticsRequest;
import org.openapis.openapi.models.operations.POSTGetSendStatisticsResponse;
import org.openapis.openapi.models.operations.POSTGetSendStatisticsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetSendStatisticsRequest req = new POSTGetSendStatisticsRequest(POSTGetSendStatisticsActionEnum.GET_SEND_STATISTICS, POSTGetSendStatisticsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "adipisci";
                xAmzDate = "non";
                xAmzSecurityToken = "amet";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dignissimos";
            }};            

            POSTGetSendStatisticsResponse res = sdk.sdk.postGetSendStatistics(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTemplate

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTGetTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTGetTemplateRequest;
import org.openapis.openapi.models.operations.POSTGetTemplateResponse;
import org.openapis.openapi.models.operations.POSTGetTemplateVersionEnum;
import org.openapis.openapi.models.shared.GetTemplateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTGetTemplateRequest req = new POSTGetTemplateRequest(POSTGetTemplateActionEnum.GET_TEMPLATE, POSTGetTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "debitis".getBytes();
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            POSTGetTemplateResponse res = sdk.sdk.postGetTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListConfigurationSets

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListConfigurationSetsActionEnum;
import org.openapis.openapi.models.operations.POSTListConfigurationSetsRequest;
import org.openapis.openapi.models.operations.POSTListConfigurationSetsResponse;
import org.openapis.openapi.models.operations.POSTListConfigurationSetsVersionEnum;
import org.openapis.openapi.models.shared.ListConfigurationSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListConfigurationSetsRequest req = new POSTListConfigurationSetsRequest(POSTListConfigurationSetsActionEnum.LIST_CONFIGURATION_SETS, POSTListConfigurationSetsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            POSTListConfigurationSetsResponse res = sdk.sdk.postListConfigurationSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListCustomVerificationEmailTemplatesActionEnum;
import org.openapis.openapi.models.operations.POSTListCustomVerificationEmailTemplatesRequest;
import org.openapis.openapi.models.operations.POSTListCustomVerificationEmailTemplatesResponse;
import org.openapis.openapi.models.operations.POSTListCustomVerificationEmailTemplatesVersionEnum;
import org.openapis.openapi.models.shared.ListCustomVerificationEmailTemplatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListCustomVerificationEmailTemplatesRequest req = new POSTListCustomVerificationEmailTemplatesRequest(POSTListCustomVerificationEmailTemplatesActionEnum.LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES, POSTListCustomVerificationEmailTemplatesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxResults = "dolorum";
                nextToken = "adipisci";
                requestBody = "minus".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "in";
                xAmzDate = "dolore";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "temporibus";
            }};            

            POSTListCustomVerificationEmailTemplatesResponse res = sdk.sdk.postListCustomVerificationEmailTemplates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListIdentities

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListIdentitiesActionEnum;
import org.openapis.openapi.models.operations.POSTListIdentitiesRequest;
import org.openapis.openapi.models.operations.POSTListIdentitiesResponse;
import org.openapis.openapi.models.operations.POSTListIdentitiesVersionEnum;
import org.openapis.openapi.models.shared.IdentityTypeEnum;
import org.openapis.openapi.models.shared.ListIdentitiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListIdentitiesRequest req = new POSTListIdentitiesRequest(POSTListIdentitiesActionEnum.LIST_IDENTITIES, POSTListIdentitiesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxItems = "adipisci";
                nextToken = "cum";
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "hic";
                xAmzCredential = "nesciunt";
                xAmzDate = "culpa";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "totam";
            }};            

            POSTListIdentitiesResponse res = sdk.sdk.postListIdentities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListIdentityPolicies

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListIdentityPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTListIdentityPoliciesRequest;
import org.openapis.openapi.models.operations.POSTListIdentityPoliciesResponse;
import org.openapis.openapi.models.operations.POSTListIdentityPoliciesVersionEnum;
import org.openapis.openapi.models.shared.ListIdentityPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListIdentityPoliciesRequest req = new POSTListIdentityPoliciesRequest(POSTListIdentityPoliciesActionEnum.LIST_IDENTITY_POLICIES, POSTListIdentityPoliciesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "exercitationem".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "sit";
                xAmzCredential = "rerum";
                xAmzDate = "sed";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "asperiores";
            }};            

            POSTListIdentityPoliciesResponse res = sdk.sdk.postListIdentityPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListReceiptFilters

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListReceiptFiltersActionEnum;
import org.openapis.openapi.models.operations.POSTListReceiptFiltersRequest;
import org.openapis.openapi.models.operations.POSTListReceiptFiltersResponse;
import org.openapis.openapi.models.operations.POSTListReceiptFiltersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListReceiptFiltersRequest req = new POSTListReceiptFiltersRequest(POSTListReceiptFiltersActionEnum.LIST_RECEIPT_FILTERS, POSTListReceiptFiltersVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "ab";
                xAmzCredential = "iste";
                xAmzDate = "dolore";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "in";
            }};            

            POSTListReceiptFiltersResponse res = sdk.sdk.postListReceiptFilters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListReceiptRuleSets

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListReceiptRuleSetsActionEnum;
import org.openapis.openapi.models.operations.POSTListReceiptRuleSetsRequest;
import org.openapis.openapi.models.operations.POSTListReceiptRuleSetsResponse;
import org.openapis.openapi.models.operations.POSTListReceiptRuleSetsVersionEnum;
import org.openapis.openapi.models.shared.ListReceiptRuleSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListReceiptRuleSetsRequest req = new POSTListReceiptRuleSetsRequest(POSTListReceiptRuleSetsActionEnum.LIST_RECEIPT_RULE_SETS, POSTListReceiptRuleSetsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            POSTListReceiptRuleSetsResponse res = sdk.sdk.postListReceiptRuleSets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTemplates

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTemplatesActionEnum;
import org.openapis.openapi.models.operations.POSTListTemplatesRequest;
import org.openapis.openapi.models.operations.POSTListTemplatesResponse;
import org.openapis.openapi.models.operations.POSTListTemplatesVersionEnum;
import org.openapis.openapi.models.shared.ListTemplatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTemplatesRequest req = new POSTListTemplatesRequest(POSTListTemplatesActionEnum.LIST_TEMPLATES, POSTListTemplatesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "maiores";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "sed";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "eius";
            }};            

            POSTListTemplatesResponse res = sdk.sdk.postListTemplates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListVerifiedEmailAddresses

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListVerifiedEmailAddressesActionEnum;
import org.openapis.openapi.models.operations.POSTListVerifiedEmailAddressesRequest;
import org.openapis.openapi.models.operations.POSTListVerifiedEmailAddressesResponse;
import org.openapis.openapi.models.operations.POSTListVerifiedEmailAddressesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListVerifiedEmailAddressesRequest req = new POSTListVerifiedEmailAddressesRequest(POSTListVerifiedEmailAddressesActionEnum.LIST_VERIFIED_EMAIL_ADDRESSES, POSTListVerifiedEmailAddressesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ea";
                xAmzCredential = "occaecati";
                xAmzDate = "quos";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTListVerifiedEmailAddressesResponse res = sdk.sdk.postListVerifiedEmailAddresses(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutConfigurationSetDeliveryOptions

Adds or updates the delivery options for a configuration set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutConfigurationSetDeliveryOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTPutConfigurationSetDeliveryOptionsRequest;
import org.openapis.openapi.models.operations.POSTPutConfigurationSetDeliveryOptionsResponse;
import org.openapis.openapi.models.operations.POSTPutConfigurationSetDeliveryOptionsVersionEnum;
import org.openapis.openapi.models.shared.DeliveryOptions;
import org.openapis.openapi.models.shared.PutConfigurationSetDeliveryOptionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutConfigurationSetDeliveryOptionsRequest req = new POSTPutConfigurationSetDeliveryOptionsRequest(POSTPutConfigurationSetDeliveryOptionsActionEnum.PUT_CONFIGURATION_SET_DELIVERY_OPTIONS, POSTPutConfigurationSetDeliveryOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sit";
                xAmzCredential = "non";
                xAmzDate = "officiis";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quaerat";
            }};            

            POSTPutConfigurationSetDeliveryOptionsResponse res = sdk.sdk.postPutConfigurationSetDeliveryOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPutIdentityPolicy

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTPutIdentityPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTPutIdentityPolicyRequest;
import org.openapis.openapi.models.operations.POSTPutIdentityPolicyResponse;
import org.openapis.openapi.models.operations.POSTPutIdentityPolicyVersionEnum;
import org.openapis.openapi.models.shared.PutIdentityPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTPutIdentityPolicyRequest req = new POSTPutIdentityPolicyRequest(POSTPutIdentityPolicyActionEnum.PUT_IDENTITY_POLICY, POSTPutIdentityPolicyVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "rem";
                xAmzCredential = "sit";
                xAmzDate = "nobis";
                xAmzSecurityToken = "error";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "minima";
            }};            

            POSTPutIdentityPolicyResponse res = sdk.sdk.postPutIdentityPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postReorderReceiptRuleSet

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTReorderReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTReorderReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTReorderReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTReorderReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.ReorderReceiptRuleSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTReorderReceiptRuleSetRequest req = new POSTReorderReceiptRuleSetRequest(POSTReorderReceiptRuleSetActionEnum.REORDER_RECEIPT_RULE_SET, POSTReorderReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "reiciendis".getBytes();
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            POSTReorderReceiptRuleSetResponse res = sdk.sdk.postReorderReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendBounce

<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendBounceActionEnum;
import org.openapis.openapi.models.operations.POSTSendBounceRequest;
import org.openapis.openapi.models.operations.POSTSendBounceResponse;
import org.openapis.openapi.models.operations.POSTSendBounceVersionEnum;
import org.openapis.openapi.models.shared.BounceTypeEnum;
import org.openapis.openapi.models.shared.BouncedRecipientInfo;
import org.openapis.openapi.models.shared.DsnActionEnum;
import org.openapis.openapi.models.shared.ExtensionField;
import org.openapis.openapi.models.shared.MessageDsn;
import org.openapis.openapi.models.shared.RecipientDsnFields;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendBounceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendBounceRequest req = new POSTSendBounceRequest(POSTSendBounceActionEnum.SEND_BOUNCE, POSTSendBounceVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "beatae".getBytes();
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "praesentium";
                xAmzDate = "cum";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "voluptatum";
            }};            

            POSTSendBounceResponse res = sdk.sdk.postSendBounce(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendBulkTemplatedEmail

<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendBulkTemplatedEmailActionEnum;
import org.openapis.openapi.models.operations.POSTSendBulkTemplatedEmailRequest;
import org.openapis.openapi.models.operations.POSTSendBulkTemplatedEmailResponse;
import org.openapis.openapi.models.operations.POSTSendBulkTemplatedEmailVersionEnum;
import org.openapis.openapi.models.shared.BulkEmailDestination;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendBulkTemplatedEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendBulkTemplatedEmailRequest req = new POSTSendBulkTemplatedEmailRequest(POSTSendBulkTemplatedEmailActionEnum.SEND_BULK_TEMPLATED_EMAIL, POSTSendBulkTemplatedEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "neque";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTSendBulkTemplatedEmailResponse res = sdk.sdk.postSendBulkTemplatedEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendCustomVerificationEmailActionEnum;
import org.openapis.openapi.models.operations.POSTSendCustomVerificationEmailRequest;
import org.openapis.openapi.models.operations.POSTSendCustomVerificationEmailResponse;
import org.openapis.openapi.models.operations.POSTSendCustomVerificationEmailVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendCustomVerificationEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendCustomVerificationEmailRequest req = new POSTSendCustomVerificationEmailRequest(POSTSendCustomVerificationEmailActionEnum.SEND_CUSTOM_VERIFICATION_EMAIL, POSTSendCustomVerificationEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "atque";
                xAmzCredential = "fugit";
                xAmzDate = "ut";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTSendCustomVerificationEmailResponse res = sdk.sdk.postSendCustomVerificationEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendEmail

<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendEmailActionEnum;
import org.openapis.openapi.models.operations.POSTSendEmailRequest;
import org.openapis.openapi.models.operations.POSTSendEmailResponse;
import org.openapis.openapi.models.operations.POSTSendEmailVersionEnum;
import org.openapis.openapi.models.shared.Body;
import org.openapis.openapi.models.shared.Content;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendEmailRequest req = new POSTSendEmailRequest(POSTSendEmailActionEnum.SEND_EMAIL, POSTSendEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsam";
                xAmzDate = "sit";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTSendEmailResponse res = sdk.sdk.postSendEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendRawEmail

<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendRawEmailActionEnum;
import org.openapis.openapi.models.operations.POSTSendRawEmailRequest;
import org.openapis.openapi.models.operations.POSTSendRawEmailResponse;
import org.openapis.openapi.models.operations.POSTSendRawEmailVersionEnum;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.RawMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendRawEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendRawEmailRequest req = new POSTSendRawEmailRequest(POSTSendRawEmailActionEnum.SEND_RAW_EMAIL, POSTSendRawEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sed";
                xAmzDate = "sit";
                xAmzSecurityToken = "vel";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTSendRawEmailResponse res = sdk.sdk.postSendRawEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSendTemplatedEmail

<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSendTemplatedEmailActionEnum;
import org.openapis.openapi.models.operations.POSTSendTemplatedEmailRequest;
import org.openapis.openapi.models.operations.POSTSendTemplatedEmailResponse;
import org.openapis.openapi.models.operations.POSTSendTemplatedEmailVersionEnum;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.MessageTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTemplatedEmailRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSendTemplatedEmailRequest req = new POSTSendTemplatedEmailRequest(POSTSendTemplatedEmailActionEnum.SEND_TEMPLATED_EMAIL, POSTSendTemplatedEmailVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "consequatur".getBytes();
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "dolorem";
                xAmzDate = "harum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTSendTemplatedEmailResponse res = sdk.sdk.postSendTemplatedEmail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetActiveReceiptRuleSet

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetActiveReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.POSTSetActiveReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.POSTSetActiveReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.POSTSetActiveReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetActiveReceiptRuleSetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetActiveReceiptRuleSetRequest req = new POSTSetActiveReceiptRuleSetRequest(POSTSetActiveReceiptRuleSetActionEnum.SET_ACTIVE_RECEIPT_RULE_SET, POSTSetActiveReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "nam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "amet";
            }};            

            POSTSetActiveReceiptRuleSetResponse res = sdk.sdk.postSetActiveReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIdentityDkimEnabled

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIdentityDkimEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTSetIdentityDkimEnabledRequest;
import org.openapis.openapi.models.operations.POSTSetIdentityDkimEnabledResponse;
import org.openapis.openapi.models.operations.POSTSetIdentityDkimEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityDkimEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIdentityDkimEnabledRequest req = new POSTSetIdentityDkimEnabledRequest(POSTSetIdentityDkimEnabledActionEnum.SET_IDENTITY_DKIM_ENABLED, POSTSetIdentityDkimEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "perferendis";
            }};            

            POSTSetIdentityDkimEnabledResponse res = sdk.sdk.postSetIdentityDkimEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIdentityFeedbackForwardingEnabled

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIdentityFeedbackForwardingEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTSetIdentityFeedbackForwardingEnabledRequest;
import org.openapis.openapi.models.operations.POSTSetIdentityFeedbackForwardingEnabledResponse;
import org.openapis.openapi.models.operations.POSTSetIdentityFeedbackForwardingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityFeedbackForwardingEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIdentityFeedbackForwardingEnabledRequest req = new POSTSetIdentityFeedbackForwardingEnabledRequest(POSTSetIdentityFeedbackForwardingEnabledActionEnum.SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED, POSTSetIdentityFeedbackForwardingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quidem".getBytes();
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "facere";
                xAmzCredential = "fuga";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            POSTSetIdentityFeedbackForwardingEnabledResponse res = sdk.sdk.postSetIdentityFeedbackForwardingEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIdentityHeadersInNotificationsEnabled

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIdentityHeadersInNotificationsEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTSetIdentityHeadersInNotificationsEnabledRequest;
import org.openapis.openapi.models.operations.POSTSetIdentityHeadersInNotificationsEnabledResponse;
import org.openapis.openapi.models.operations.POSTSetIdentityHeadersInNotificationsEnabledVersionEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityHeadersInNotificationsEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIdentityHeadersInNotificationsEnabledRequest req = new POSTSetIdentityHeadersInNotificationsEnabledRequest(POSTSetIdentityHeadersInNotificationsEnabledActionEnum.SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED, POSTSetIdentityHeadersInNotificationsEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "repudiandae".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "atque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "totam";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTSetIdentityHeadersInNotificationsEnabledResponse res = sdk.sdk.postSetIdentityHeadersInNotificationsEnabled(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIdentityMailFromDomain

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIdentityMailFromDomainActionEnum;
import org.openapis.openapi.models.operations.POSTSetIdentityMailFromDomainRequest;
import org.openapis.openapi.models.operations.POSTSetIdentityMailFromDomainResponse;
import org.openapis.openapi.models.operations.POSTSetIdentityMailFromDomainVersionEnum;
import org.openapis.openapi.models.shared.BehaviorOnMXFailureEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityMailFromDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIdentityMailFromDomainRequest req = new POSTSetIdentityMailFromDomainRequest(POSTSetIdentityMailFromDomainActionEnum.SET_IDENTITY_MAIL_FROM_DOMAIN, POSTSetIdentityMailFromDomainVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            POSTSetIdentityMailFromDomainResponse res = sdk.sdk.postSetIdentityMailFromDomain(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIdentityNotificationTopic

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIdentityNotificationTopicActionEnum;
import org.openapis.openapi.models.operations.POSTSetIdentityNotificationTopicRequest;
import org.openapis.openapi.models.operations.POSTSetIdentityNotificationTopicResponse;
import org.openapis.openapi.models.operations.POSTSetIdentityNotificationTopicVersionEnum;
import org.openapis.openapi.models.shared.NotificationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIdentityNotificationTopicRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIdentityNotificationTopicRequest req = new POSTSetIdentityNotificationTopicRequest(POSTSetIdentityNotificationTopicActionEnum.SET_IDENTITY_NOTIFICATION_TOPIC, POSTSetIdentityNotificationTopicVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            POSTSetIdentityNotificationTopicResponse res = sdk.sdk.postSetIdentityNotificationTopic(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetReceiptRulePosition

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetReceiptRulePositionActionEnum;
import org.openapis.openapi.models.operations.POSTSetReceiptRulePositionRequest;
import org.openapis.openapi.models.operations.POSTSetReceiptRulePositionResponse;
import org.openapis.openapi.models.operations.POSTSetReceiptRulePositionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetReceiptRulePositionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetReceiptRulePositionRequest req = new POSTSetReceiptRulePositionRequest(POSTSetReceiptRulePositionActionEnum.SET_RECEIPT_RULE_POSITION, POSTSetReceiptRulePositionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "atque";
                xAmzDate = "atque";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTSetReceiptRulePositionResponse res = sdk.sdk.postSetReceiptRulePosition(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestRenderTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTestRenderTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTTestRenderTemplateRequest;
import org.openapis.openapi.models.operations.POSTTestRenderTemplateResponse;
import org.openapis.openapi.models.operations.POSTTestRenderTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestRenderTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTestRenderTemplateRequest req = new POSTTestRenderTemplateRequest(POSTTestRenderTemplateActionEnum.TEST_RENDER_TEMPLATE, POSTTestRenderTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "labore".getBytes();
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "repudiandae";
                xAmzDate = "dicta";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "dolores";
            }};            

            POSTTestRenderTemplateResponse res = sdk.sdk.postTestRenderTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateAccountSendingEnabled

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateAccountSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateAccountSendingEnabledRequest;
import org.openapis.openapi.models.operations.POSTUpdateAccountSendingEnabledResponse;
import org.openapis.openapi.models.operations.POSTUpdateAccountSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccountSendingEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateAccountSendingEnabledRequest req = new POSTUpdateAccountSendingEnabledRequest(POSTUpdateAccountSendingEnabledActionEnum.UPDATE_ACCOUNT_SENDING_ENABLED, POSTUpdateAccountSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "laboriosam".getBytes();
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "a";
                xAmzCredential = "molestias";
                xAmzDate = "magnam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "occaecati";
            }};            

            POSTUpdateAccountSendingEnabledResponse res = sdk.sdk.postUpdateAccountSendingEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateConfigurationSetEventDestination

<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetEventDestinationActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetEventDestinationRequest;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetEventDestinationResponse;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetEventDestinationVersionEnum;
import org.openapis.openapi.models.shared.CloudWatchDestination;
import org.openapis.openapi.models.shared.CloudWatchDimensionConfiguration;
import org.openapis.openapi.models.shared.DimensionValueSourceEnum;
import org.openapis.openapi.models.shared.EventDestination;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.KinesisFirehoseDestination;
import org.openapis.openapi.models.shared.SNSDestination;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConfigurationSetEventDestinationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateConfigurationSetEventDestinationRequest req = new POSTUpdateConfigurationSetEventDestinationRequest(POSTUpdateConfigurationSetEventDestinationActionEnum.UPDATE_CONFIGURATION_SET_EVENT_DESTINATION, POSTUpdateConfigurationSetEventDestinationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "perspiciatis".getBytes();
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "eveniet";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "id";
            }};            

            POSTUpdateConfigurationSetEventDestinationResponse res = sdk.sdk.postUpdateConfigurationSetEventDestination(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateConfigurationSetReputationMetricsEnabled

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetReputationMetricsEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetReputationMetricsEnabledRequest;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetReputationMetricsEnabledResponse;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConfigurationSetReputationMetricsEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateConfigurationSetReputationMetricsEnabledRequest req = new POSTUpdateConfigurationSetReputationMetricsEnabledRequest(POSTUpdateConfigurationSetReputationMetricsEnabledActionEnum.UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED, POSTUpdateConfigurationSetReputationMetricsEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "illo";
                xAmzCredential = "corporis";
                xAmzDate = "quidem";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "non";
                xAmzSignedHeaders = "vero";
            }};            

            POSTUpdateConfigurationSetReputationMetricsEnabledResponse res = sdk.sdk.postUpdateConfigurationSetReputationMetricsEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateConfigurationSetSendingEnabled

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetSendingEnabledActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetSendingEnabledRequest;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetSendingEnabledResponse;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetSendingEnabledVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConfigurationSetSendingEnabledRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateConfigurationSetSendingEnabledRequest req = new POSTUpdateConfigurationSetSendingEnabledRequest(POSTUpdateConfigurationSetSendingEnabledActionEnum.UPDATE_CONFIGURATION_SET_SENDING_ENABLED, POSTUpdateConfigurationSetSendingEnabledVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "iure".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "totam";
                xAmzCredential = "quae";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cum";
            }};            

            POSTUpdateConfigurationSetSendingEnabledResponse res = sdk.sdk.postUpdateConfigurationSetSendingEnabled(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateConfigurationSetTrackingOptions

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetTrackingOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetTrackingOptionsRequest;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetTrackingOptionsResponse;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationSetTrackingOptionsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TrackingOptions;
import org.openapis.openapi.models.shared.UpdateConfigurationSetTrackingOptionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateConfigurationSetTrackingOptionsRequest req = new POSTUpdateConfigurationSetTrackingOptionsRequest(POSTUpdateConfigurationSetTrackingOptionsActionEnum.UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS, POSTUpdateConfigurationSetTrackingOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "necessitatibus".getBytes();
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "distinctio";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "rem";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "ad";
            }};            

            POSTUpdateConfigurationSetTrackingOptionsResponse res = sdk.sdk.postUpdateConfigurationSetTrackingOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateCustomVerificationEmailTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateCustomVerificationEmailTemplateRequest;
import org.openapis.openapi.models.operations.POSTUpdateCustomVerificationEmailTemplateResponse;
import org.openapis.openapi.models.operations.POSTUpdateCustomVerificationEmailTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCustomVerificationEmailTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateCustomVerificationEmailTemplateRequest req = new POSTUpdateCustomVerificationEmailTemplateRequest(POSTUpdateCustomVerificationEmailTemplateActionEnum.UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE, POSTUpdateCustomVerificationEmailTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "nihil";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTUpdateCustomVerificationEmailTemplateResponse res = sdk.sdk.postUpdateCustomVerificationEmailTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateReceiptRule

<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateReceiptRuleActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateReceiptRuleRequest;
import org.openapis.openapi.models.operations.POSTUpdateReceiptRuleResponse;
import org.openapis.openapi.models.operations.POSTUpdateReceiptRuleVersionEnum;
import org.openapis.openapi.models.shared.AddHeaderAction;
import org.openapis.openapi.models.shared.BounceAction;
import org.openapis.openapi.models.shared.InvocationTypeEnum;
import org.openapis.openapi.models.shared.LambdaAction;
import org.openapis.openapi.models.shared.ReceiptAction;
import org.openapis.openapi.models.shared.ReceiptRule;
import org.openapis.openapi.models.shared.S3Action;
import org.openapis.openapi.models.shared.SNSAction;
import org.openapis.openapi.models.shared.SNSActionEncodingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopAction;
import org.openapis.openapi.models.shared.StopScopeEnum;
import org.openapis.openapi.models.shared.TlsPolicyEnum;
import org.openapis.openapi.models.shared.UpdateReceiptRuleRequest;
import org.openapis.openapi.models.shared.WorkmailAction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateReceiptRuleRequest req = new POSTUpdateReceiptRuleRequest(POSTUpdateReceiptRuleActionEnum.UPDATE_RECEIPT_RULE, POSTUpdateReceiptRuleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "dolores".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "minima";
                xAmzCredential = "dolore";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "recusandae";
            }};            

            POSTUpdateReceiptRuleResponse res = sdk.sdk.postUpdateReceiptRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateTemplateRequest;
import org.openapis.openapi.models.operations.POSTUpdateTemplateResponse;
import org.openapis.openapi.models.operations.POSTUpdateTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Template;
import org.openapis.openapi.models.shared.UpdateTemplateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateTemplateRequest req = new POSTUpdateTemplateRequest(POSTUpdateTemplateActionEnum.UPDATE_TEMPLATE, POSTUpdateTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quaerat".getBytes();
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "ex";
                xAmzCredential = "ut";
                xAmzDate = "culpa";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "laudantium";
            }};            

            POSTUpdateTemplateResponse res = sdk.sdk.postUpdateTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerifyDomainDkim

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTVerifyDomainDkimActionEnum;
import org.openapis.openapi.models.operations.POSTVerifyDomainDkimRequest;
import org.openapis.openapi.models.operations.POSTVerifyDomainDkimResponse;
import org.openapis.openapi.models.operations.POSTVerifyDomainDkimVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyDomainDkimRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTVerifyDomainDkimRequest req = new POSTVerifyDomainDkimRequest(POSTVerifyDomainDkimActionEnum.VERIFY_DOMAIN_DKIM, POSTVerifyDomainDkimVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "nemo".getBytes();
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "esse";
                xAmzCredential = "provident";
                xAmzDate = "quis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            POSTVerifyDomainDkimResponse res = sdk.sdk.postVerifyDomainDkim(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerifyDomainIdentity

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTVerifyDomainIdentityActionEnum;
import org.openapis.openapi.models.operations.POSTVerifyDomainIdentityRequest;
import org.openapis.openapi.models.operations.POSTVerifyDomainIdentityResponse;
import org.openapis.openapi.models.operations.POSTVerifyDomainIdentityVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyDomainIdentityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTVerifyDomainIdentityRequest req = new POSTVerifyDomainIdentityRequest(POSTVerifyDomainIdentityActionEnum.VERIFY_DOMAIN_IDENTITY, POSTVerifyDomainIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "ullam".getBytes();
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "animi";
                xAmzCredential = "nostrum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "provident";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "animi";
            }};            

            POSTVerifyDomainIdentityResponse res = sdk.sdk.postVerifyDomainIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerifyEmailAddress

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTVerifyEmailAddressActionEnum;
import org.openapis.openapi.models.operations.POSTVerifyEmailAddressRequest;
import org.openapis.openapi.models.operations.POSTVerifyEmailAddressResponse;
import org.openapis.openapi.models.operations.POSTVerifyEmailAddressVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyEmailAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTVerifyEmailAddressRequest req = new POSTVerifyEmailAddressRequest(POSTVerifyEmailAddressActionEnum.VERIFY_EMAIL_ADDRESS, POSTVerifyEmailAddressVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "doloribus";
                xAmzDate = "ullam";
                xAmzSecurityToken = "in";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "earum";
            }};            

            POSTVerifyEmailAddressResponse res = sdk.sdk.postVerifyEmailAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerifyEmailIdentity

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTVerifyEmailIdentityActionEnum;
import org.openapis.openapi.models.operations.POSTVerifyEmailIdentityRequest;
import org.openapis.openapi.models.operations.POSTVerifyEmailIdentityResponse;
import org.openapis.openapi.models.operations.POSTVerifyEmailIdentityVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyEmailIdentityRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTVerifyEmailIdentityRequest req = new POSTVerifyEmailIdentityRequest(POSTVerifyEmailIdentityActionEnum.VERIFY_EMAIL_IDENTITY, POSTVerifyEmailIdentityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "modi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "molestias";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "cumque";
            }};            

            POSTVerifyEmailIdentityResponse res = sdk.sdk.postVerifyEmailIdentity(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
