package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObjectTypeField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public FieldContentTypeEnum contentType;
    public ObjectTypeField withContentType(FieldContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public String source;
    public ObjectTypeField withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public String target;
    public ObjectTypeField withTarget(String target) {
        this.target = target;
        return this;
    }
}