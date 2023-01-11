package openapisdk.models.shared;



public class DescribeVpcAttributeResult {
    public DescribeVpcAttributeResultEnableDnsHostnames enableDnsHostnames;
    public DescribeVpcAttributeResult withEnableDnsHostnames(DescribeVpcAttributeResultEnableDnsHostnames enableDnsHostnames) {
        this.enableDnsHostnames = enableDnsHostnames;
        return this;
    }
    public DescribeVpcAttributeResultEnableDnsSupport enableDnsSupport;
    public DescribeVpcAttributeResult withEnableDnsSupport(DescribeVpcAttributeResultEnableDnsSupport enableDnsSupport) {
        this.enableDnsSupport = enableDnsSupport;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public DescribeVpcAttributeResult withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}