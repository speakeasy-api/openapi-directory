package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistsCreateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GistsCreateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("files")
    public java.util.Map<String, GistsCreateRequestBodyFiles> files;
    public GistsCreateRequestBody withFiles(java.util.Map<String, GistsCreateRequestBodyFiles> files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Object public_;
    public GistsCreateRequestBody withPublic(Object public_) {
        this.public_ = public_;
        return this;
    }
}