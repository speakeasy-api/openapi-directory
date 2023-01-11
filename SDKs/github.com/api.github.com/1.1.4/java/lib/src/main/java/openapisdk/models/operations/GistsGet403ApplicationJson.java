package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistsGet403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block")
    public GistsGet403ApplicationJsonBlock block;
    public GistsGet403ApplicationJson withBlock(GistsGet403ApplicationJsonBlock block) {
        this.block = block;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public GistsGet403ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GistsGet403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}