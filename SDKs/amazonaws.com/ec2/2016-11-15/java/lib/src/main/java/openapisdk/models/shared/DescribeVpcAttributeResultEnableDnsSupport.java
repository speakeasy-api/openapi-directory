package openapisdk.models.shared;



/**
 * DescribeVpcAttributeResultEnableDnsSupport
 * Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
**/
public class DescribeVpcAttributeResultEnableDnsSupport {
    public java.util.Map<String, Object> value;
    public DescribeVpcAttributeResultEnableDnsSupport withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}