package openapisdk.models.shared;



/**
 * ContentTypeProfileConfig
 * The configuration for a field-level encryption content type-profile mapping. 
**/
public class ContentTypeProfileConfig {
    public ContentTypeProfiles contentTypeProfiles;
    public ContentTypeProfileConfig withContentTypeProfiles(ContentTypeProfiles contentTypeProfiles) {
        this.contentTypeProfiles = contentTypeProfiles;
        return this;
    }
    public Boolean forwardWhenContentTypeIsUnknown;
    public ContentTypeProfileConfig withForwardWhenContentTypeIsUnknown(Boolean forwardWhenContentTypeIsUnknown) {
        this.forwardWhenContentTypeIsUnknown = forwardWhenContentTypeIsUnknown;
        return this;
    }
}