package openapisdk.models.shared;



public class ExtensionConfigIntentUpdateMediaAffinity {
    public java.util.Map<String, Object> hdr;
    public ExtensionConfigIntentUpdateMediaAffinity withHdr(java.util.Map<String, Object> hdr) {
        this.hdr = hdr;
        return this;
    }
    public ExtensionConfigIntentUpdateMediaAffinityOptEnum[] opt;
    public ExtensionConfigIntentUpdateMediaAffinity withOpt(ExtensionConfigIntentUpdateMediaAffinityOptEnum[] opt) {
        this.opt = opt;
        return this;
    }
    public String url;
    public ExtensionConfigIntentUpdateMediaAffinity withUrl(String url) {
        this.url = url;
        return this;
    }
}