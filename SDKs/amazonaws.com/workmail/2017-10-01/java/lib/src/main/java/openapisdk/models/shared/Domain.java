package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Domain
 * <p>The domain to associate with an Amazon WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
**/
public class Domain {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public Domain withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostedZoneId")
    public String hostedZoneId;
    public Domain withHostedZoneId(String hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
}