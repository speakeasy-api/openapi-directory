package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkOriginConfiguration
 * The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.
**/
public class NetworkOriginConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internetConfiguration")
    public java.util.Map<String, Object> internetConfiguration;
    public NetworkOriginConfiguration withInternetConfiguration(java.util.Map<String, Object> internetConfiguration) {
        this.internetConfiguration = internetConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public NetworkOriginConfiguration withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}