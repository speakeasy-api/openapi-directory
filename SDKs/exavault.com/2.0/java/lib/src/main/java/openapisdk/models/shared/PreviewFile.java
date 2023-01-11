package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewFile
 * Object with preview image properties.
**/
public class PreviewFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public PreviewFileAttributes attributes;
    public PreviewFile withAttributes(PreviewFileAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PreviewFile withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PreviewFile withType(String type) {
        this.type = type;
        return this;
    }
}