package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectionModification
 * Edit the collection metadata
**/
public class CollectionModification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CollectionPrivacyEnum privacy;
    public CollectionModification withPrivacy(CollectionPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CollectionModification withTitle(String title) {
        this.title = title;
        return this;
    }
}