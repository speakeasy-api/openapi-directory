package openapisdk.models.shared;



/**
 * DescribeVpcAttributeResultEnableDnsHostnames
 * Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
**/
public class DescribeVpcAttributeResultEnableDnsHostnames {
    public java.util.Map<String, Object> value;
    public DescribeVpcAttributeResultEnableDnsHostnames withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}