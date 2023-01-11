package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IpSetSummary
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p>
**/
public class IpSetSummary {
    @JsonProperty("IPSetId")
    public String ipSetId;
    public IpSetSummary withIpSetId(String ipSetId) {
        this.ipSetId = ipSetId;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public IpSetSummary withName(String name) {
        this.name = name;
        return this;
    }
}