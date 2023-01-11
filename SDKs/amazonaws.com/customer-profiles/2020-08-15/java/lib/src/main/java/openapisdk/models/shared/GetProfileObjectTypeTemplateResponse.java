package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProfileObjectTypeTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowProfileCreation")
    public Boolean allowProfileCreation;
    public GetProfileObjectTypeTemplateResponse withAllowProfileCreation(Boolean allowProfileCreation) {
        this.allowProfileCreation = allowProfileCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fields")
    public java.util.Map<String, ObjectTypeField> fields;
    public GetProfileObjectTypeTemplateResponse withFields(java.util.Map<String, ObjectTypeField> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public java.util.Map<String, ObjectTypeKey[]> keys;
    public GetProfileObjectTypeTemplateResponse withKeys(java.util.Map<String, ObjectTypeKey[]> keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceName")
    public String sourceName;
    public GetProfileObjectTypeTemplateResponse withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceObject")
    public String sourceObject;
    public GetProfileObjectTypeTemplateResponse withSourceObject(String sourceObject) {
        this.sourceObject = sourceObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public GetProfileObjectTypeTemplateResponse withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}