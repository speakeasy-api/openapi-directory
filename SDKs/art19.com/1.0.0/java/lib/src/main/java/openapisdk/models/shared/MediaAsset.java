package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MediaAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public MediaAssetAttributes attributes;
    public MediaAsset withAttributes(MediaAssetAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MediaAsset withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MediaAsset withType(String type) {
        this.type = type;
        return this;
    }
}