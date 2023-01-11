package openapisdk.models.shared;



/**
 * DescribeNetworkInterfaceAttributeResultAttachment
 * The attachment (if any) of the network interface.
**/
public class DescribeNetworkInterfaceAttributeResultAttachment {
    public java.util.Map<String, Object> attachTime;
    public DescribeNetworkInterfaceAttributeResultAttachment withAttachTime(java.util.Map<String, Object> attachTime) {
        this.attachTime = attachTime;
        return this;
    }
    public java.util.Map<String, Object> attachmentId;
    public DescribeNetworkInterfaceAttributeResultAttachment withAttachmentId(java.util.Map<String, Object> attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    public java.util.Map<String, Object> deleteOnTermination;
    public DescribeNetworkInterfaceAttributeResultAttachment withDeleteOnTermination(java.util.Map<String, Object> deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    public java.util.Map<String, Object> deviceIndex;
    public DescribeNetworkInterfaceAttributeResultAttachment withDeviceIndex(java.util.Map<String, Object> deviceIndex) {
        this.deviceIndex = deviceIndex;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public DescribeNetworkInterfaceAttributeResultAttachment withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> instanceOwnerId;
    public DescribeNetworkInterfaceAttributeResultAttachment withInstanceOwnerId(java.util.Map<String, Object> instanceOwnerId) {
        this.instanceOwnerId = instanceOwnerId;
        return this;
    }
    public java.util.Map<String, Object> networkCardIndex;
    public DescribeNetworkInterfaceAttributeResultAttachment withNetworkCardIndex(java.util.Map<String, Object> networkCardIndex) {
        this.networkCardIndex = networkCardIndex;
        return this;
    }
    public java.util.Map<String, Object> status;
    public DescribeNetworkInterfaceAttributeResultAttachment withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}