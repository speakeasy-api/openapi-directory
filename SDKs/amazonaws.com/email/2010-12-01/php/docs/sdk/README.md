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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCloneReceiptRuleSetRequest();
    $request->action = GETCloneReceiptRuleSetActionEnum::CLONE_RECEIPT_RULE_SET;
    $request->originalRuleSetName = 'error';
    $request->ruleSetName = 'deserunt';
    $request->version = GETCloneReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getCloneReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateConfigurationSet

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetConfigurationSet;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateConfigurationSetRequest();
    $request->action = GETCreateConfigurationSetActionEnum::CREATE_CONFIGURATION_SET;
    $request->configurationSet = new GETCreateConfigurationSetConfigurationSet();
    $request->configurationSet->name = 'Minnie Schiller';
    $request->version = GETCreateConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getCreateConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateConfigurationSetTrackingOptions

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetTrackingOptionsTrackingOptions;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateConfigurationSetTrackingOptionsRequest();
    $request->action = GETCreateConfigurationSetTrackingOptionsActionEnum::CREATE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->configurationSetName = 'veritatis';
    $request->trackingOptions = new GETCreateConfigurationSetTrackingOptionsTrackingOptions();
    $request->trackingOptions->customRedirectDomain = 'deserunt';
    $request->version = GETCreateConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getCreateConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateCustomVerificationEmailTemplateRequest();
    $request->action = GETCreateCustomVerificationEmailTemplateActionEnum::CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->failureRedirectionURL = 'at';
    $request->fromEmailAddress = 'maiores';
    $request->successRedirectionURL = 'molestiae';
    $request->templateContent = 'quod';
    $request->templateName = 'quod';
    $request->templateSubject = 'esse';
    $request->version = GETCreateCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getCreateCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateReceiptRuleSet

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateReceiptRuleSetRequest();
    $request->action = GETCreateReceiptRuleSetActionEnum::CREATE_RECEIPT_RULE_SET;
    $request->ruleSetName = 'fugit';
    $request->version = GETCreateReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->getCreateReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateTemplateTemplate;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateTemplateRequest();
    $request->action = GETCreateTemplateActionEnum::CREATE_TEMPLATE;
    $request->template = new GETCreateTemplateTemplate();
    $request->template->htmlPart = 'modi';
    $request->template->subjectPart = 'qui';
    $request->template->templateName = 'impedit';
    $request->template->textPart = 'cum';
    $request->version = GETCreateTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getCreateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteConfigurationSet

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteConfigurationSetRequest();
    $request->action = GETDeleteConfigurationSetActionEnum::DELETE_CONFIGURATION_SET;
    $request->configurationSetName = 'sed';
    $request->version = GETDeleteConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->getDeleteConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteConfigurationSetEventDestination

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetEventDestinationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetEventDestinationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteConfigurationSetEventDestinationRequest();
    $request->action = GETDeleteConfigurationSetEventDestinationActionEnum::DELETE_CONFIGURATION_SET_EVENT_DESTINATION;
    $request->configurationSetName = 'in';
    $request->eventDestinationName = 'corporis';
    $request->version = GETDeleteConfigurationSetEventDestinationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->getDeleteConfigurationSetEventDestination($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteConfigurationSetTrackingOptions

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteConfigurationSetTrackingOptionsRequest();
    $request->action = GETDeleteConfigurationSetTrackingOptionsActionEnum::DELETE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->configurationSetName = 'est';
    $request->version = GETDeleteConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDeleteConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteCustomVerificationEmailTemplateRequest();
    $request->action = GETDeleteCustomVerificationEmailTemplateActionEnum::DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->templateName = 'enim';
    $request->version = GETDeleteCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->getDeleteCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteIdentity

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteIdentityRequest();
    $request->action = GETDeleteIdentityActionEnum::DELETE_IDENTITY;
    $request->identity = 'doloribus';
    $request->version = GETDeleteIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->getDeleteIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteIdentityPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteIdentityPolicyRequest();
    $request->action = GETDeleteIdentityPolicyActionEnum::DELETE_IDENTITY_POLICY;
    $request->identity = 'mollitia';
    $request->policyName = 'occaecati';
    $request->version = GETDeleteIdentityPolicyVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->getDeleteIdentityPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteReceiptFilter

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptFilterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptFilterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteReceiptFilterRequest();
    $request->action = GETDeleteReceiptFilterActionEnum::DELETE_RECEIPT_FILTER;
    $request->filterName = 'quis';
    $request->version = GETDeleteReceiptFilterVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->getDeleteReceiptFilter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteReceiptRule

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteReceiptRuleRequest();
    $request->action = GETDeleteReceiptRuleActionEnum::DELETE_RECEIPT_RULE;
    $request->ruleName = 'tenetur';
    $request->ruleSetName = 'ipsam';
    $request->version = GETDeleteReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDeleteReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteReceiptRuleSet

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteReceiptRuleSetRequest();
    $request->action = GETDeleteReceiptRuleSetActionEnum::DELETE_RECEIPT_RULE_SET;
    $request->ruleSetName = 'quasi';
    $request->version = GETDeleteReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDeleteReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteTemplateRequest();
    $request->action = GETDeleteTemplateActionEnum::DELETE_TEMPLATE;
    $request->templateName = 'omnis';
    $request->version = GETDeleteTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->getDeleteTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteVerifiedEmailAddress

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVerifiedEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVerifiedEmailAddressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteVerifiedEmailAddressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteVerifiedEmailAddressRequest();
    $request->action = GETDeleteVerifiedEmailAddressActionEnum::DELETE_VERIFIED_EMAIL_ADDRESS;
    $request->emailAddress = 'dicta';
    $request->version = GETDeleteVerifiedEmailAddressVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->getDeleteVerifiedEmailAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeActiveReceiptRuleSet

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeActiveReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeActiveReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeActiveReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeActiveReceiptRuleSetRequest();
    $request->action = GETDescribeActiveReceiptRuleSetActionEnum::DESCRIBE_ACTIVE_RECEIPT_RULE_SET;
    $request->version = GETDescribeActiveReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDescribeActiveReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeConfigurationSet

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationSetAttributeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeConfigurationSetRequest();
    $request->action = GETDescribeConfigurationSetActionEnum::DESCRIBE_CONFIGURATION_SET;
    $request->configurationSetAttributeNames = [
        ConfigurationSetAttributeEnum::TRACKING_OPTIONS,
        ConfigurationSetAttributeEnum::DELIVERY_OPTIONS,
        ConfigurationSetAttributeEnum::DELIVERY_OPTIONS,
        ConfigurationSetAttributeEnum::REPUTATION_OPTIONS,
    ];
    $request->configurationSetName = 'quasi';
    $request->version = GETDescribeConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->getDescribeConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReceiptRule

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReceiptRuleRequest();
    $request->action = GETDescribeReceiptRuleActionEnum::DESCRIBE_RECEIPT_RULE;
    $request->ruleName = 'est';
    $request->ruleSetName = 'quibusdam';
    $request->version = GETDescribeReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getDescribeReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeReceiptRuleSet

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeReceiptRuleSetRequest();
    $request->action = GETDescribeReceiptRuleSetActionEnum::DESCRIBE_RECEIPT_RULE_SET;
    $request->ruleSetName = 'aliquid';
    $request->version = GETDescribeReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getDescribeReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETAccountSendingEnabled

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETAccountSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETAccountSendingEnabledRequest();
    $request->action = GETGETAccountSendingEnabledActionEnum::GET_ACCOUNT_SENDING_ENABLED;
    $request->version = GETGETAccountSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getGETAccountSendingEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETCustomVerificationEmailTemplateRequest();
    $request->action = GETGETCustomVerificationEmailTemplateActionEnum::GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->templateName = 'delectus';
    $request->version = GETGETCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getGETCustomVerificationEmailTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETIdentityDkimAttributes

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityDkimAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityDkimAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityDkimAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETIdentityDkimAttributesRequest();
    $request->action = GETGETIdentityDkimAttributesActionEnum::GET_IDENTITY_DKIM_ATTRIBUTES;
    $request->identities = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->version = GETGETIdentityDkimAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->getGETIdentityDkimAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETIdentityMailFromDomainAttributes

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityMailFromDomainAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityMailFromDomainAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityMailFromDomainAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETIdentityMailFromDomainAttributesRequest();
    $request->action = GETGETIdentityMailFromDomainAttributesActionEnum::GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES;
    $request->identities = [
        'magnam',
    ];
    $request->version = GETGETIdentityMailFromDomainAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getGETIdentityMailFromDomainAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETIdentityNotificationAttributes

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityNotificationAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityNotificationAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityNotificationAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETIdentityNotificationAttributesRequest();
    $request->action = GETGETIdentityNotificationAttributesActionEnum::GET_IDENTITY_NOTIFICATION_ATTRIBUTES;
    $request->identities = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->version = GETGETIdentityNotificationAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getGETIdentityNotificationAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETIdentityPoliciesRequest();
    $request->action = GETGETIdentityPoliciesActionEnum::GET_IDENTITY_POLICIES;
    $request->identity = 'amet';
    $request->policyNames = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->version = GETGETIdentityPoliciesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->getGETIdentityPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETIdentityVerificationAttributes

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityVerificationAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityVerificationAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETIdentityVerificationAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETIdentityVerificationAttributesRequest();
    $request->action = GETGETIdentityVerificationAttributesActionEnum::GET_IDENTITY_VERIFICATION_ATTRIBUTES;
    $request->identities = [
        'labore',
        'suscipit',
    ];
    $request->version = GETGETIdentityVerificationAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getGETIdentityVerificationAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETSendQuota

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendQuotaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendQuotaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendQuotaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETSendQuotaRequest();
    $request->action = GETGETSendQuotaActionEnum::GET_SEND_QUOTA;
    $request->version = GETGETSendQuotaVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->getGETSendQuota($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETSendStatistics

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendStatisticsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETSendStatisticsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETSendStatisticsRequest();
    $request->action = GETGETSendStatisticsActionEnum::GET_SEND_STATISTICS;
    $request->version = GETGETSendStatisticsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getGETSendStatistics($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGETTemplate

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETGETTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETGETTemplateRequest();
    $request->action = GETGETTemplateActionEnum::GET_TEMPLATE;
    $request->templateName = 'odit';
    $request->version = GETGETTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->getGETTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListConfigurationSets

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListConfigurationSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListConfigurationSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListConfigurationSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListConfigurationSetsRequest();
    $request->action = GETListConfigurationSetsActionEnum::LIST_CONFIGURATION_SETS;
    $request->maxItems = 537023;
    $request->nextToken = 'facilis';
    $request->version = GETListConfigurationSetsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getListConfigurationSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListCustomVerificationEmailTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListCustomVerificationEmailTemplatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListCustomVerificationEmailTemplatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListCustomVerificationEmailTemplatesRequest();
    $request->action = GETListCustomVerificationEmailTemplatesActionEnum::LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES;
    $request->maxResults = 998848;
    $request->nextToken = 'quibusdam';
    $request->version = GETListCustomVerificationEmailTemplatesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getListCustomVerificationEmailTemplates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListIdentities

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentitiesIdentityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListIdentitiesRequest();
    $request->action = GETListIdentitiesActionEnum::LIST_IDENTITIES;
    $request->identityType = GETListIdentitiesIdentityTypeEnum::EMAIL_ADDRESS;
    $request->maxItems = 123820;
    $request->nextToken = 'quo';
    $request->version = GETListIdentitiesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getListIdentities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListIdentityPolicies

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentityPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListIdentityPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListIdentityPoliciesRequest();
    $request->action = GETListIdentityPoliciesActionEnum::LIST_IDENTITY_POLICIES;
    $request->identity = 'accusantium';
    $request->version = GETListIdentityPoliciesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getListIdentityPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListReceiptFilters

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptFiltersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptFiltersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListReceiptFiltersRequest();
    $request->action = GETListReceiptFiltersActionEnum::LIST_RECEIPT_FILTERS;
    $request->version = GETListReceiptFiltersVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getListReceiptFilters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListReceiptRuleSets

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptRuleSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptRuleSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListReceiptRuleSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListReceiptRuleSetsRequest();
    $request->action = GETListReceiptRuleSetsActionEnum::LIST_RECEIPT_RULE_SETS;
    $request->nextToken = 'aut';
    $request->version = GETListReceiptRuleSetsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getListReceiptRuleSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTemplates

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTemplatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTemplatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTemplatesRequest();
    $request->action = GETListTemplatesActionEnum::LIST_TEMPLATES;
    $request->maxItems = 521037;
    $request->nextToken = 'dignissimos';
    $request->version = GETListTemplatesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->getListTemplates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListVerifiedEmailAddresses

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListVerifiedEmailAddressesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListVerifiedEmailAddressesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListVerifiedEmailAddressesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListVerifiedEmailAddressesRequest();
    $request->action = GETListVerifiedEmailAddressesActionEnum::LIST_VERIFIED_EMAIL_ADDRESSES;
    $request->version = GETListVerifiedEmailAddressesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getListVerifiedEmailAddresses($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutConfigurationSetDeliveryOptions

Adds or updates the delivery options for a configuration set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutConfigurationSetDeliveryOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutConfigurationSetDeliveryOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutConfigurationSetDeliveryOptionsDeliveryOptions;
use \OpenAPI\OpenAPI\Models\Shared\TlsPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutConfigurationSetDeliveryOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutConfigurationSetDeliveryOptionsRequest();
    $request->action = GETPutConfigurationSetDeliveryOptionsActionEnum::PUT_CONFIGURATION_SET_DELIVERY_OPTIONS;
    $request->configurationSetName = 'facilis';
    $request->deliveryOptions = new GETPutConfigurationSetDeliveryOptionsDeliveryOptions();
    $request->deliveryOptions->tlsPolicy = TlsPolicyEnum::OPTIONAL;
    $request->version = GETPutConfigurationSetDeliveryOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getPutConfigurationSetDeliveryOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPutIdentityPolicy

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPutIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETPutIdentityPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETPutIdentityPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPutIdentityPolicyRequest();
    $request->action = GETPutIdentityPolicyActionEnum::PUT_IDENTITY_POLICY;
    $request->identity = 'rerum';
    $request->policy = 'adipisci';
    $request->policyName = 'asperiores';
    $request->version = GETPutIdentityPolicyVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->getPutIdentityPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReorderReceiptRuleSet

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETReorderReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETReorderReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETReorderReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETReorderReceiptRuleSetRequest();
    $request->action = GETReorderReceiptRuleSetActionEnum::REORDER_RECEIPT_RULE_SET;
    $request->ruleNames = [
        'libero',
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->ruleSetName = 'aliquid';
    $request->version = GETReorderReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getReorderReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSendCustomVerificationEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSendCustomVerificationEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSendCustomVerificationEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSendCustomVerificationEmailRequest();
    $request->action = GETSendCustomVerificationEmailActionEnum::SEND_CUSTOM_VERIFICATION_EMAIL;
    $request->configurationSetName = 'cum';
    $request->emailAddress = 'voluptate';
    $request->templateName = 'dignissimos';
    $request->version = GETSendCustomVerificationEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getSendCustomVerificationEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetActiveReceiptRuleSet

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetActiveReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetActiveReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetActiveReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetActiveReceiptRuleSetRequest();
    $request->action = GETSetActiveReceiptRuleSetActionEnum::SET_ACTIVE_RECEIPT_RULE_SET;
    $request->ruleSetName = 'iure';
    $request->version = GETSetActiveReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getSetActiveReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIdentityDkimEnabled

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityDkimEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityDkimEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityDkimEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIdentityDkimEnabledRequest();
    $request->action = GETSetIdentityDkimEnabledActionEnum::SET_IDENTITY_DKIM_ENABLED;
    $request->dkimEnabled = false;
    $request->identity = 'eos';
    $request->version = GETSetIdentityDkimEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getSetIdentityDkimEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIdentityFeedbackForwardingEnabled

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityFeedbackForwardingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityFeedbackForwardingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityFeedbackForwardingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIdentityFeedbackForwardingEnabledRequest();
    $request->action = GETSetIdentityFeedbackForwardingEnabledActionEnum::SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED;
    $request->forwardingEnabled = false;
    $request->identity = 'voluptate';
    $request->version = GETSetIdentityFeedbackForwardingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getSetIdentityFeedbackForwardingEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIdentityHeadersInNotificationsEnabled

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityHeadersInNotificationsEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityHeadersInNotificationsEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityHeadersInNotificationsEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIdentityHeadersInNotificationsEnabledRequest();
    $request->action = GETSetIdentityHeadersInNotificationsEnabledActionEnum::SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED;
    $request->enabled = false;
    $request->identity = 'ipsum';
    $request->notificationType = GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum::COMPLAINT;
    $request->version = GETSetIdentityHeadersInNotificationsEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getSetIdentityHeadersInNotificationsEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIdentityMailFromDomain

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityMailFromDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityMailFromDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityMailFromDomainBehaviorOnMxFailureEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityMailFromDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIdentityMailFromDomainRequest();
    $request->action = GETSetIdentityMailFromDomainActionEnum::SET_IDENTITY_MAIL_FROM_DOMAIN;
    $request->behaviorOnMXFailure = GETSetIdentityMailFromDomainBehaviorOnMxFailureEnum::REJECT_MESSAGE;
    $request->identity = 'ad';
    $request->mailFromDomain = 'saepe';
    $request->version = GETSetIdentityMailFromDomainVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->getSetIdentityMailFromDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIdentityNotificationTopic

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityNotificationTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityNotificationTopicActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityNotificationTopicNotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIdentityNotificationTopicVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIdentityNotificationTopicRequest();
    $request->action = GETSetIdentityNotificationTopicActionEnum::SET_IDENTITY_NOTIFICATION_TOPIC;
    $request->identity = 'alias';
    $request->notificationType = GETSetIdentityNotificationTopicNotificationTypeEnum::DELIVERY;
    $request->snsTopic = 'quaerat';
    $request->version = GETSetIdentityNotificationTopicVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->getSetIdentityNotificationTopic($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetReceiptRulePosition

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetReceiptRulePositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetReceiptRulePositionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetReceiptRulePositionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetReceiptRulePositionRequest();
    $request->action = GETSetReceiptRulePositionActionEnum::SET_RECEIPT_RULE_POSITION;
    $request->after = 'esse';
    $request->ruleName = 'harum';
    $request->ruleSetName = 'iusto';
    $request->version = GETSetReceiptRulePositionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getSetReceiptRulePosition($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestRenderTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTestRenderTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETTestRenderTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTestRenderTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTestRenderTemplateRequest();
    $request->action = GETTestRenderTemplateActionEnum::TEST_RENDER_TEMPLATE;
    $request->templateData = 'enim';
    $request->templateName = 'dolorem';
    $request->version = GETTestRenderTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getTestRenderTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateAccountSendingEnabled

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateAccountSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateAccountSendingEnabledRequest();
    $request->action = GETUpdateAccountSendingEnabledActionEnum::UPDATE_ACCOUNT_SENDING_ENABLED;
    $request->enabled = false;
    $request->version = GETUpdateAccountSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getUpdateAccountSendingEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateConfigurationSetReputationMetricsEnabled

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetReputationMetricsEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetReputationMetricsEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateConfigurationSetReputationMetricsEnabledRequest();
    $request->action = GETUpdateConfigurationSetReputationMetricsEnabledActionEnum::UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED;
    $request->configurationSetName = 'qui';
    $request->enabled = false;
    $request->version = GETUpdateConfigurationSetReputationMetricsEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getUpdateConfigurationSetReputationMetricsEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateConfigurationSetSendingEnabled

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateConfigurationSetSendingEnabledRequest();
    $request->action = GETUpdateConfigurationSetSendingEnabledActionEnum::UPDATE_CONFIGURATION_SET_SENDING_ENABLED;
    $request->configurationSetName = 'incidunt';
    $request->enabled = false;
    $request->version = GETUpdateConfigurationSetSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->getUpdateConfigurationSetSendingEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateConfigurationSetTrackingOptions

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetTrackingOptionsTrackingOptions;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateConfigurationSetTrackingOptionsRequest();
    $request->action = GETUpdateConfigurationSetTrackingOptionsActionEnum::UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->configurationSetName = 'temporibus';
    $request->trackingOptions = new GETUpdateConfigurationSetTrackingOptionsTrackingOptions();
    $request->trackingOptions->customRedirectDomain = 'qui';
    $request->version = GETUpdateConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->getUpdateConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateCustomVerificationEmailTemplateRequest();
    $request->action = GETUpdateCustomVerificationEmailTemplateActionEnum::UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->failureRedirectionURL = 'hic';
    $request->fromEmailAddress = 'voluptatem';
    $request->successRedirectionURL = 'cumque';
    $request->templateContent = 'soluta';
    $request->templateName = 'nobis';
    $request->templateSubject = 'et';
    $request->version = GETUpdateCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getUpdateCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTemplateTemplate;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateTemplateRequest();
    $request->action = GETUpdateTemplateActionEnum::UPDATE_TEMPLATE;
    $request->template = new GETUpdateTemplateTemplate();
    $request->template->htmlPart = 'aperiam';
    $request->template->subjectPart = 'delectus';
    $request->template->templateName = 'dolorem';
    $request->template->textPart = 'dolore';
    $request->version = GETUpdateTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->getUpdateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVerifyDomainDkim

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainDkimRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainDkimActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainDkimVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVerifyDomainDkimRequest();
    $request->action = GETVerifyDomainDkimActionEnum::VERIFY_DOMAIN_DKIM;
    $request->domain = 'itaque';
    $request->version = GETVerifyDomainDkimVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getVerifyDomainDkim($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVerifyDomainIdentity

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyDomainIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVerifyDomainIdentityRequest();
    $request->action = GETVerifyDomainIdentityActionEnum::VERIFY_DOMAIN_IDENTITY;
    $request->domain = 'cupiditate';
    $request->version = GETVerifyDomainIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->getVerifyDomainIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVerifyEmailAddress

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailAddressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailAddressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVerifyEmailAddressRequest();
    $request->action = GETVerifyEmailAddressActionEnum::VERIFY_EMAIL_ADDRESS;
    $request->emailAddress = 'vero';
    $request->version = GETVerifyEmailAddressVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getVerifyEmailAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVerifyEmailIdentity

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETVerifyEmailIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETVerifyEmailIdentityRequest();
    $request->action = GETVerifyEmailIdentityActionEnum::VERIFY_EMAIL_IDENTITY;
    $request->emailAddress = 'tenetur';
    $request->version = GETVerifyEmailIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->getVerifyEmailIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCloneReceiptRuleSet

<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCloneReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCloneReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCloneReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCloneReceiptRuleSetRequest();
    $request->action = POSTCloneReceiptRuleSetActionEnum::CLONE_RECEIPT_RULE_SET;
    $request->requestBody = 'vero';
    $request->version = POSTCloneReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->postCloneReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateConfigurationSet

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateConfigurationSetRequest();
    $request->action = POSTCreateConfigurationSetActionEnum::CREATE_CONFIGURATION_SET;
    $request->requestBody = 'aut';
    $request->version = POSTCreateConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->postCreateConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateConfigurationSetEventDestination

<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetEventDestinationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetEventDestinationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateConfigurationSetEventDestinationRequest();
    $request->action = POSTCreateConfigurationSetEventDestinationActionEnum::CREATE_CONFIGURATION_SET_EVENT_DESTINATION;
    $request->requestBody = 'iusto';
    $request->version = POSTCreateConfigurationSetEventDestinationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postCreateConfigurationSetEventDestination($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateConfigurationSetTrackingOptions

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateConfigurationSetTrackingOptionsRequest();
    $request->action = POSTCreateConfigurationSetTrackingOptionsActionEnum::CREATE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->requestBody = 'aspernatur';
    $request->version = POSTCreateConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->postCreateConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateCustomVerificationEmailTemplate

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateCustomVerificationEmailTemplateRequest();
    $request->action = POSTCreateCustomVerificationEmailTemplateActionEnum::CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->requestBody = 'dolor';
    $request->version = POSTCreateCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postCreateCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateReceiptFilter

<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptFilterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptFilterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateReceiptFilterRequest();
    $request->action = POSTCreateReceiptFilterActionEnum::CREATE_RECEIPT_FILTER;
    $request->requestBody = 'sapiente';
    $request->version = POSTCreateReceiptFilterVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->postCreateReceiptFilter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateReceiptRule

<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateReceiptRuleRequest();
    $request->action = POSTCreateReceiptRuleActionEnum::CREATE_RECEIPT_RULE;
    $request->requestBody = 'inventore';
    $request->version = POSTCreateReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postCreateReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateReceiptRuleSet

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateReceiptRuleSetRequest();
    $request->action = POSTCreateReceiptRuleSetActionEnum::CREATE_RECEIPT_RULE_SET;
    $request->requestBody = 'eaque';
    $request->version = POSTCreateReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->postCreateReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateTemplate

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateTemplateRequest();
    $request->action = POSTCreateTemplateActionEnum::CREATE_TEMPLATE;
    $request->requestBody = 'fugit';
    $request->version = POSTCreateTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->postCreateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteConfigurationSet

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteConfigurationSetRequest();
    $request->action = POSTDeleteConfigurationSetActionEnum::DELETE_CONFIGURATION_SET;
    $request->requestBody = 'velit';
    $request->version = POSTDeleteConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postDeleteConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteConfigurationSetEventDestination

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetEventDestinationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetEventDestinationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteConfigurationSetEventDestinationRequest();
    $request->action = POSTDeleteConfigurationSetEventDestinationActionEnum::DELETE_CONFIGURATION_SET_EVENT_DESTINATION;
    $request->requestBody = 'libero';
    $request->version = POSTDeleteConfigurationSetEventDestinationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->postDeleteConfigurationSetEventDestination($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteConfigurationSetTrackingOptions

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteConfigurationSetTrackingOptionsRequest();
    $request->action = POSTDeleteConfigurationSetTrackingOptionsActionEnum::DELETE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->requestBody = 'magnam';
    $request->version = POSTDeleteConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postDeleteConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteCustomVerificationEmailTemplate

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteCustomVerificationEmailTemplateRequest();
    $request->action = POSTDeleteCustomVerificationEmailTemplateActionEnum::DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->requestBody = 'quidem';
    $request->version = POSTDeleteCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postDeleteCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteIdentity

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteIdentityRequest();
    $request->action = POSTDeleteIdentityActionEnum::DELETE_IDENTITY;
    $request->requestBody = 'quisquam';
    $request->version = POSTDeleteIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->postDeleteIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteIdentityPolicy

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteIdentityPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteIdentityPolicyRequest();
    $request->action = POSTDeleteIdentityPolicyActionEnum::DELETE_IDENTITY_POLICY;
    $request->requestBody = 'quo';
    $request->version = POSTDeleteIdentityPolicyVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->postDeleteIdentityPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteReceiptFilter

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptFilterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptFilterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteReceiptFilterRequest();
    $request->action = POSTDeleteReceiptFilterActionEnum::DELETE_RECEIPT_FILTER;
    $request->requestBody = 'tempora';
    $request->version = POSTDeleteReceiptFilterVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->postDeleteReceiptFilter($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteReceiptRule

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteReceiptRuleRequest();
    $request->action = POSTDeleteReceiptRuleActionEnum::DELETE_RECEIPT_RULE;
    $request->requestBody = 'aperiam';
    $request->version = POSTDeleteReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postDeleteReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteReceiptRuleSet

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteReceiptRuleSetRequest();
    $request->action = POSTDeleteReceiptRuleSetActionEnum::DELETE_RECEIPT_RULE_SET;
    $request->requestBody = 'aliquam';
    $request->version = POSTDeleteReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->postDeleteReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteTemplate

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteTemplateRequest();
    $request->action = POSTDeleteTemplateActionEnum::DELETE_TEMPLATE;
    $request->requestBody = 'accusantium';
    $request->version = POSTDeleteTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postDeleteTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteVerifiedEmailAddress

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVerifiedEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVerifiedEmailAddressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteVerifiedEmailAddressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteVerifiedEmailAddressRequest();
    $request->action = POSTDeleteVerifiedEmailAddressActionEnum::DELETE_VERIFIED_EMAIL_ADDRESS;
    $request->requestBody = 'fuga';
    $request->version = POSTDeleteVerifiedEmailAddressVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->postDeleteVerifiedEmailAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeActiveReceiptRuleSet

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeActiveReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeActiveReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeActiveReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeActiveReceiptRuleSetRequest();
    $request->action = POSTDescribeActiveReceiptRuleSetActionEnum::DESCRIBE_ACTIVE_RECEIPT_RULE_SET;
    $request->requestBody = 'sapiente';
    $request->version = POSTDescribeActiveReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postDescribeActiveReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeConfigurationSet

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeConfigurationSetRequest();
    $request->action = POSTDescribeConfigurationSetActionEnum::DESCRIBE_CONFIGURATION_SET;
    $request->requestBody = 'esse';
    $request->version = POSTDescribeConfigurationSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postDescribeConfigurationSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReceiptRule

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReceiptRuleRequest();
    $request->action = POSTDescribeReceiptRuleActionEnum::DESCRIBE_RECEIPT_RULE;
    $request->requestBody = 'aliquid';
    $request->version = POSTDescribeReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postDescribeReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeReceiptRuleSet

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeReceiptRuleSetRequest();
    $request->action = POSTDescribeReceiptRuleSetActionEnum::DESCRIBE_RECEIPT_RULE_SET;
    $request->requestBody = 'minima';
    $request->version = POSTDescribeReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->postDescribeReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetAccountSendingEnabled

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetAccountSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetAccountSendingEnabledRequest();
    $request->action = POSTGetAccountSendingEnabledActionEnum::GET_ACCOUNT_SENDING_ENABLED;
    $request->version = POSTGetAccountSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postGetAccountSendingEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetCustomVerificationEmailTemplate

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetCustomVerificationEmailTemplateRequest();
    $request->action = POSTGetCustomVerificationEmailTemplateActionEnum::GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->requestBody = 'blanditiis';
    $request->version = POSTGetCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->postGetCustomVerificationEmailTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetIdentityDkimAttributes

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityDkimAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityDkimAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityDkimAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetIdentityDkimAttributesRequest();
    $request->action = POSTGetIdentityDkimAttributesActionEnum::GET_IDENTITY_DKIM_ATTRIBUTES;
    $request->requestBody = 'error';
    $request->version = POSTGetIdentityDkimAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->postGetIdentityDkimAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetIdentityMailFromDomainAttributes

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityMailFromDomainAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityMailFromDomainAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityMailFromDomainAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetIdentityMailFromDomainAttributesRequest();
    $request->action = POSTGetIdentityMailFromDomainAttributesActionEnum::GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES;
    $request->requestBody = 'veritatis';
    $request->version = POSTGetIdentityMailFromDomainAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postGetIdentityMailFromDomainAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetIdentityNotificationAttributes

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityNotificationAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityNotificationAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityNotificationAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetIdentityNotificationAttributesRequest();
    $request->action = POSTGetIdentityNotificationAttributesActionEnum::GET_IDENTITY_NOTIFICATION_ATTRIBUTES;
    $request->requestBody = 'earum';
    $request->version = POSTGetIdentityNotificationAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postGetIdentityNotificationAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetIdentityPolicies

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetIdentityPoliciesRequest();
    $request->action = POSTGetIdentityPoliciesActionEnum::GET_IDENTITY_POLICIES;
    $request->requestBody = 'aliquam';
    $request->version = POSTGetIdentityPoliciesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postGetIdentityPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetIdentityVerificationAttributes

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityVerificationAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityVerificationAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetIdentityVerificationAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetIdentityVerificationAttributesRequest();
    $request->action = POSTGetIdentityVerificationAttributesActionEnum::GET_IDENTITY_VERIFICATION_ATTRIBUTES;
    $request->requestBody = 'voluptatum';
    $request->version = POSTGetIdentityVerificationAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->postGetIdentityVerificationAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSendQuota

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendQuotaRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendQuotaActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendQuotaVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetSendQuotaRequest();
    $request->action = POSTGetSendQuotaActionEnum::GET_SEND_QUOTA;
    $request->version = POSTGetSendQuotaVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postGetSendQuota($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSendStatistics

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendStatisticsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetSendStatisticsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetSendStatisticsRequest();
    $request->action = POSTGetSendStatisticsActionEnum::GET_SEND_STATISTICS;
    $request->version = POSTGetSendStatisticsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->postGetSendStatistics($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTemplate

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTGetTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTGetTemplateRequest();
    $request->action = POSTGetTemplateActionEnum::GET_TEMPLATE;
    $request->requestBody = 'rem';
    $request->version = POSTGetTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->postGetTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListConfigurationSets

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListConfigurationSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListConfigurationSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListConfigurationSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListConfigurationSetsRequest();
    $request->action = POSTListConfigurationSetsActionEnum::LIST_CONFIGURATION_SETS;
    $request->requestBody = 'voluptatem';
    $request->version = POSTListConfigurationSetsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postListConfigurationSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListCustomVerificationEmailTemplates

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListCustomVerificationEmailTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListCustomVerificationEmailTemplatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListCustomVerificationEmailTemplatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListCustomVerificationEmailTemplatesRequest();
    $request->action = POSTListCustomVerificationEmailTemplatesActionEnum::LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES;
    $request->maxResults = 'dignissimos';
    $request->nextToken = 'dicta';
    $request->requestBody = 'maiores';
    $request->version = POSTListCustomVerificationEmailTemplatesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postListCustomVerificationEmailTemplates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListIdentities

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentitiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentitiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListIdentitiesRequest();
    $request->action = POSTListIdentitiesActionEnum::LIST_IDENTITIES;
    $request->maxItems = 'quaerat';
    $request->nextToken = 'consequuntur';
    $request->requestBody = 'repellendus';
    $request->version = POSTListIdentitiesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postListIdentities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListIdentityPolicies

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentityPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListIdentityPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListIdentityPoliciesRequest();
    $request->action = POSTListIdentityPoliciesActionEnum::LIST_IDENTITY_POLICIES;
    $request->requestBody = 'quaerat';
    $request->version = POSTListIdentityPoliciesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postListIdentityPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListReceiptFilters

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptFiltersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptFiltersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptFiltersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListReceiptFiltersRequest();
    $request->action = POSTListReceiptFiltersActionEnum::LIST_RECEIPT_FILTERS;
    $request->requestBody = 'suscipit';
    $request->version = POSTListReceiptFiltersVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postListReceiptFilters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListReceiptRuleSets

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptRuleSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptRuleSetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListReceiptRuleSetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListReceiptRuleSetsRequest();
    $request->action = POSTListReceiptRuleSetsActionEnum::LIST_RECEIPT_RULE_SETS;
    $request->requestBody = 'ducimus';
    $request->version = POSTListReceiptRuleSetsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->postListReceiptRuleSets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTemplates

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTemplatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTemplatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTemplatesRequest();
    $request->action = POSTListTemplatesActionEnum::LIST_TEMPLATES;
    $request->requestBody = 'in';
    $request->version = POSTListTemplatesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postListTemplates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListVerifiedEmailAddresses

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVerifiedEmailAddressesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVerifiedEmailAddressesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListVerifiedEmailAddressesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListVerifiedEmailAddressesRequest();
    $request->action = POSTListVerifiedEmailAddressesActionEnum::LIST_VERIFIED_EMAIL_ADDRESSES;
    $request->version = POSTListVerifiedEmailAddressesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postListVerifiedEmailAddresses($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutConfigurationSetDeliveryOptions

Adds or updates the delivery options for a configuration set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutConfigurationSetDeliveryOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutConfigurationSetDeliveryOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutConfigurationSetDeliveryOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutConfigurationSetDeliveryOptionsRequest();
    $request->action = POSTPutConfigurationSetDeliveryOptionsActionEnum::PUT_CONFIGURATION_SET_DELIVERY_OPTIONS;
    $request->requestBody = 'doloribus';
    $request->version = POSTPutConfigurationSetDeliveryOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postPutConfigurationSetDeliveryOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPutIdentityPolicy

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutIdentityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutIdentityPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTPutIdentityPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTPutIdentityPolicyRequest();
    $request->action = POSTPutIdentityPolicyActionEnum::PUT_IDENTITY_POLICY;
    $request->requestBody = 'asperiores';
    $request->version = POSTPutIdentityPolicyVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->postPutIdentityPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReorderReceiptRuleSet

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTReorderReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTReorderReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTReorderReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTReorderReceiptRuleSetRequest();
    $request->action = POSTReorderReceiptRuleSetActionEnum::REORDER_RECEIPT_RULE_SET;
    $request->requestBody = 'consectetur';
    $request->version = POSTReorderReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->postReorderReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendBounce

<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBounceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBounceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBounceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendBounceRequest();
    $request->action = POSTSendBounceActionEnum::SEND_BOUNCE;
    $request->requestBody = 'accusamus';
    $request->version = POSTSendBounceVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postSendBounce($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendBulkTemplatedEmail

<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBulkTemplatedEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBulkTemplatedEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendBulkTemplatedEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendBulkTemplatedEmailRequest();
    $request->action = POSTSendBulkTemplatedEmailActionEnum::SEND_BULK_TEMPLATED_EMAIL;
    $request->requestBody = 'nobis';
    $request->version = POSTSendBulkTemplatedEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->postSendBulkTemplatedEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendCustomVerificationEmail

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendCustomVerificationEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendCustomVerificationEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendCustomVerificationEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendCustomVerificationEmailRequest();
    $request->action = POSTSendCustomVerificationEmailActionEnum::SEND_CUSTOM_VERIFICATION_EMAIL;
    $request->requestBody = 'aliquam';
    $request->version = POSTSendCustomVerificationEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postSendCustomVerificationEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendEmail

<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendEmailRequest();
    $request->action = POSTSendEmailActionEnum::SEND_EMAIL;
    $request->requestBody = 'hic';
    $request->version = POSTSendEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'exercitationem';

    $response = $sdk->sdk->postSendEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendRawEmail

<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendRawEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendRawEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendRawEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendRawEmailRequest();
    $request->action = POSTSendRawEmailActionEnum::SEND_RAW_EMAIL;
    $request->requestBody = 'nobis';
    $request->version = POSTSendRawEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postSendRawEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSendTemplatedEmail

<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendTemplatedEmailRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendTemplatedEmailActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSendTemplatedEmailVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSendTemplatedEmailRequest();
    $request->action = POSTSendTemplatedEmailActionEnum::SEND_TEMPLATED_EMAIL;
    $request->requestBody = 'voluptate';
    $request->version = POSTSendTemplatedEmailVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->postSendTemplatedEmail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetActiveReceiptRuleSet

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetActiveReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetActiveReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetActiveReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetActiveReceiptRuleSetRequest();
    $request->action = POSTSetActiveReceiptRuleSetActionEnum::SET_ACTIVE_RECEIPT_RULE_SET;
    $request->requestBody = 'commodi';
    $request->version = POSTSetActiveReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postSetActiveReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIdentityDkimEnabled

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityDkimEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityDkimEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityDkimEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIdentityDkimEnabledRequest();
    $request->action = POSTSetIdentityDkimEnabledActionEnum::SET_IDENTITY_DKIM_ENABLED;
    $request->requestBody = 'debitis';
    $request->version = POSTSetIdentityDkimEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postSetIdentityDkimEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIdentityFeedbackForwardingEnabled

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityFeedbackForwardingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityFeedbackForwardingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityFeedbackForwardingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIdentityFeedbackForwardingEnabledRequest();
    $request->action = POSTSetIdentityFeedbackForwardingEnabledActionEnum::SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED;
    $request->requestBody = 'provident';
    $request->version = POSTSetIdentityFeedbackForwardingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postSetIdentityFeedbackForwardingEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIdentityHeadersInNotificationsEnabled

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityHeadersInNotificationsEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityHeadersInNotificationsEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityHeadersInNotificationsEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIdentityHeadersInNotificationsEnabledRequest();
    $request->action = POSTSetIdentityHeadersInNotificationsEnabledActionEnum::SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED;
    $request->requestBody = 'tempora';
    $request->version = POSTSetIdentityHeadersInNotificationsEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postSetIdentityHeadersInNotificationsEnabled($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIdentityMailFromDomain

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityMailFromDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityMailFromDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityMailFromDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIdentityMailFromDomainRequest();
    $request->action = POSTSetIdentityMailFromDomainActionEnum::SET_IDENTITY_MAIL_FROM_DOMAIN;
    $request->requestBody = 'praesentium';
    $request->version = POSTSetIdentityMailFromDomainVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->postSetIdentityMailFromDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIdentityNotificationTopic

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityNotificationTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityNotificationTopicActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIdentityNotificationTopicVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIdentityNotificationTopicRequest();
    $request->action = POSTSetIdentityNotificationTopicActionEnum::SET_IDENTITY_NOTIFICATION_TOPIC;
    $request->requestBody = 'nobis';
    $request->version = POSTSetIdentityNotificationTopicVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->postSetIdentityNotificationTopic($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetReceiptRulePosition

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetReceiptRulePositionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetReceiptRulePositionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetReceiptRulePositionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetReceiptRulePositionRequest();
    $request->action = POSTSetReceiptRulePositionActionEnum::SET_RECEIPT_RULE_POSITION;
    $request->requestBody = 'aperiam';
    $request->version = POSTSetReceiptRulePositionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->postSetReceiptRulePosition($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTestRenderTemplate

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestRenderTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestRenderTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTestRenderTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTestRenderTemplateRequest();
    $request->action = POSTTestRenderTemplateActionEnum::TEST_RENDER_TEMPLATE;
    $request->requestBody = 'exercitationem';
    $request->version = POSTTestRenderTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->postTestRenderTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateAccountSendingEnabled

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateAccountSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateAccountSendingEnabledRequest();
    $request->action = POSTUpdateAccountSendingEnabledActionEnum::UPDATE_ACCOUNT_SENDING_ENABLED;
    $request->requestBody = 'expedita';
    $request->version = POSTUpdateAccountSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'corrupti';

    $response = $sdk->sdk->postUpdateAccountSendingEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateConfigurationSetEventDestination

<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetEventDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetEventDestinationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetEventDestinationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateConfigurationSetEventDestinationRequest();
    $request->action = POSTUpdateConfigurationSetEventDestinationActionEnum::UPDATE_CONFIGURATION_SET_EVENT_DESTINATION;
    $request->requestBody = 'accusamus';
    $request->version = POSTUpdateConfigurationSetEventDestinationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->postUpdateConfigurationSetEventDestination($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateConfigurationSetReputationMetricsEnabled

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetReputationMetricsEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetReputationMetricsEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetReputationMetricsEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateConfigurationSetReputationMetricsEnabledRequest();
    $request->action = POSTUpdateConfigurationSetReputationMetricsEnabledActionEnum::UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED;
    $request->requestBody = 'expedita';
    $request->version = POSTUpdateConfigurationSetReputationMetricsEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postUpdateConfigurationSetReputationMetricsEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateConfigurationSetSendingEnabled

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetSendingEnabledRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetSendingEnabledActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetSendingEnabledVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateConfigurationSetSendingEnabledRequest();
    $request->action = POSTUpdateConfigurationSetSendingEnabledActionEnum::UPDATE_CONFIGURATION_SET_SENDING_ENABLED;
    $request->requestBody = 'repudiandae';
    $request->version = POSTUpdateConfigurationSetSendingEnabledVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postUpdateConfigurationSetSendingEnabled($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateConfigurationSetTrackingOptions

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetTrackingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetTrackingOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationSetTrackingOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateConfigurationSetTrackingOptionsRequest();
    $request->action = POSTUpdateConfigurationSetTrackingOptionsActionEnum::UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS;
    $request->requestBody = 'nostrum';
    $request->version = POSTUpdateConfigurationSetTrackingOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postUpdateConfigurationSetTrackingOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateCustomVerificationEmailTemplate

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateCustomVerificationEmailTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateCustomVerificationEmailTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateCustomVerificationEmailTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateCustomVerificationEmailTemplateRequest();
    $request->action = POSTUpdateCustomVerificationEmailTemplateActionEnum::UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE;
    $request->requestBody = 'dicta';
    $request->version = POSTUpdateCustomVerificationEmailTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postUpdateCustomVerificationEmailTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateReceiptRule

<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateReceiptRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateReceiptRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateReceiptRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateReceiptRuleRequest();
    $request->action = POSTUpdateReceiptRuleActionEnum::UPDATE_RECEIPT_RULE;
    $request->requestBody = 'tenetur';
    $request->version = POSTUpdateReceiptRuleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'unde';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->postUpdateReceiptRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateTemplate

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateTemplateRequest();
    $request->action = POSTUpdateTemplateActionEnum::UPDATE_TEMPLATE;
    $request->requestBody = 'provident';
    $request->version = POSTUpdateTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->postUpdateTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerifyDomainDkim

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainDkimRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainDkimActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainDkimVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTVerifyDomainDkimRequest();
    $request->action = POSTVerifyDomainDkimActionEnum::VERIFY_DOMAIN_DKIM;
    $request->requestBody = 'facere';
    $request->version = POSTVerifyDomainDkimVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->postVerifyDomainDkim($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerifyDomainIdentity

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyDomainIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTVerifyDomainIdentityRequest();
    $request->action = POSTVerifyDomainIdentityActionEnum::VERIFY_DOMAIN_IDENTITY;
    $request->requestBody = 'quasi';
    $request->version = POSTVerifyDomainIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postVerifyDomainIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerifyEmailAddress

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailAddressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailAddressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTVerifyEmailAddressRequest();
    $request->action = POSTVerifyEmailAddressActionEnum::VERIFY_EMAIL_ADDRESS;
    $request->requestBody = 'et';
    $request->version = POSTVerifyEmailAddressVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'officiis';

    $response = $sdk->sdk->postVerifyEmailAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVerifyEmailIdentity

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailIdentityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTVerifyEmailIdentityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTVerifyEmailIdentityRequest();
    $request->action = POSTVerifyEmailIdentityActionEnum::VERIFY_EMAIL_IDENTITY;
    $request->requestBody = 'officiis';
    $request->version = POSTVerifyEmailIdentityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'corrupti';

    $response = $sdk->sdk->postVerifyEmailIdentity($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
