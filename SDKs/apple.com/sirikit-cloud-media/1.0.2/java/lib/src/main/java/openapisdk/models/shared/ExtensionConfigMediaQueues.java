package openapisdk.models.shared;



public class ExtensionConfigMediaQueues {
    public java.util.Map<String, Object> hdr;
    public ExtensionConfigMediaQueues withHdr(java.util.Map<String, Object> hdr) {
        this.hdr = hdr;
        return this;
    }
    public ExtensionConfigMediaQueuesPlayMedia playMedia;
    public ExtensionConfigMediaQueues withPlayMedia(ExtensionConfigMediaQueuesPlayMedia playMedia) {
        this.playMedia = playMedia;
        return this;
    }
    public ExtensionConfigMediaQueuesUpdateActivity updateActivity;
    public ExtensionConfigMediaQueues withUpdateActivity(ExtensionConfigMediaQueuesUpdateActivity updateActivity) {
        this.updateActivity = updateActivity;
        return this;
    }
}