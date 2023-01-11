package openapisdk.models.shared;



public class ExtensionConfigIntent {
    public ExtensionConfigIntentAddMedia addMedia;
    public ExtensionConfigIntent withAddMedia(ExtensionConfigIntentAddMedia addMedia) {
        this.addMedia = addMedia;
        return this;
    }
    public java.util.Map<String, Object> hdr;
    public ExtensionConfigIntent withHdr(java.util.Map<String, Object> hdr) {
        this.hdr = hdr;
        return this;
    }
    public ExtensionConfigIntentPlayMedia playMedia;
    public ExtensionConfigIntent withPlayMedia(ExtensionConfigIntentPlayMedia playMedia) {
        this.playMedia = playMedia;
        return this;
    }
    public ExtensionConfigIntentUpdateMediaAffinity updateMediaAffinity;
    public ExtensionConfigIntent withUpdateMediaAffinity(ExtensionConfigIntentUpdateMediaAffinity updateMediaAffinity) {
        this.updateMediaAffinity = updateMediaAffinity;
        return this;
    }
}