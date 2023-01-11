package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IpSetDescriptor
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>
**/
public class IpSetDescriptor {
    @JsonProperty("Type")
    public IpSetDescriptorTypeEnum type;
    public IpSetDescriptor withType(IpSetDescriptorTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public IpSetDescriptor withValue(String value) {
        this.value = value;
        return this;
    }
}