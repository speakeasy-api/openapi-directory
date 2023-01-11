package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistsGetComment403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block")
    public GistsGetComment403ApplicationJsonBlock block;
    public GistsGetComment403ApplicationJson withBlock(GistsGetComment403ApplicationJsonBlock block) {
        this.block = block;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public GistsGetComment403ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GistsGetComment403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}