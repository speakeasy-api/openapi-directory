package openapisdk.models.shared;



/**
 * ReceiptIpFilter
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
**/
public class ReceiptIpFilter {
    public String cidr;
    public ReceiptIpFilter withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    public ReceiptFilterPolicyEnum policy;
    public ReceiptIpFilter withPolicy(ReceiptFilterPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
}