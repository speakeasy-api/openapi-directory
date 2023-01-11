package openapisdk.models.shared;



/**
 * ReceiptRule
 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
**/
public class ReceiptRule {
    public ReceiptAction[] actions;
    public ReceiptRule withActions(ReceiptAction[] actions) {
        this.actions = actions;
        return this;
    }
    public Boolean enabled;
    public ReceiptRule withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public String name;
    public ReceiptRule withName(String name) {
        this.name = name;
        return this;
    }
    public String[] recipients;
    public ReceiptRule withRecipients(String[] recipients) {
        this.recipients = recipients;
        return this;
    }
    public Boolean scanEnabled;
    public ReceiptRule withScanEnabled(Boolean scanEnabled) {
        this.scanEnabled = scanEnabled;
        return this;
    }
    public TlsPolicyEnum tlsPolicy;
    public ReceiptRule withTlsPolicy(TlsPolicyEnum tlsPolicy) {
        this.tlsPolicy = tlsPolicy;
        return this;
    }
}