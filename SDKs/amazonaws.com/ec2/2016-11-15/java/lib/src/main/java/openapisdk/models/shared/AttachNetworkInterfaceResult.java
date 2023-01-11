package openapisdk.models.shared;



/**
 * AttachNetworkInterfaceResult
 * Contains the output of AttachNetworkInterface.
**/
public class AttachNetworkInterfaceResult {
    public java.util.Map<String, Object> attachmentId;
    public AttachNetworkInterfaceResult withAttachmentId(java.util.Map<String, Object> attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    public java.util.Map<String, Object> networkCardIndex;
    public AttachNetworkInterfaceResult withNetworkCardIndex(java.util.Map<String, Object> networkCardIndex) {
        this.networkCardIndex = networkCardIndex;
        return this;
    }
}