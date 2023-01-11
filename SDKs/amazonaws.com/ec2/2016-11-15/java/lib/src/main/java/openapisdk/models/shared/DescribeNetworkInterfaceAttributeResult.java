package openapisdk.models.shared;



/**
 * DescribeNetworkInterfaceAttributeResult
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
public class DescribeNetworkInterfaceAttributeResult {
    public DescribeNetworkInterfaceAttributeResultAttachment attachment;
    public DescribeNetworkInterfaceAttributeResult withAttachment(DescribeNetworkInterfaceAttributeResultAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    public DescribeNetworkInterfaceAttributeResultDescription description;
    public DescribeNetworkInterfaceAttributeResult withDescription(DescribeNetworkInterfaceAttributeResultDescription description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> groups;
    public DescribeNetworkInterfaceAttributeResult withGroups(java.util.Map<String, Object> groups) {
        this.groups = groups;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public DescribeNetworkInterfaceAttributeResult withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public DescribeNetworkInterfaceAttributeResultSourceDestCheck sourceDestCheck;
    public DescribeNetworkInterfaceAttributeResult withSourceDestCheck(DescribeNetworkInterfaceAttributeResultSourceDestCheck sourceDestCheck) {
        this.sourceDestCheck = sourceDestCheck;
        return this;
    }
}