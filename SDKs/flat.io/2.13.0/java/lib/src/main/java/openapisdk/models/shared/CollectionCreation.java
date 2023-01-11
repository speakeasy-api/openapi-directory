package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollectionCreation {
    @JsonProperty("privacy")
    public CollectionPrivacyEnum privacy;
    public CollectionCreation withPrivacy(CollectionPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CollectionCreation withTitle(String title) {
        this.title = title;
        return this;
    }
}