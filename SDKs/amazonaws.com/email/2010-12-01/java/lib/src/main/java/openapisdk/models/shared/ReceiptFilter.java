package openapisdk.models.shared;



/**
 * ReceiptFilter
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
**/
public class ReceiptFilter {
    public ReceiptIpFilter ipFilter;
    public ReceiptFilter withIpFilter(ReceiptIpFilter ipFilter) {
        this.ipFilter = ipFilter;
        return this;
    }
    public String name;
    public ReceiptFilter withName(String name) {
        this.name = name;
        return this;
    }
}