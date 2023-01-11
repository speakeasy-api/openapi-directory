package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutProfileObjectTypeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowProfileCreation")
    public Boolean allowProfileCreation;
    public PutProfileObjectTypeRequestBody withAllowProfileCreation(Boolean allowProfileCreation) {
        this.allowProfileCreation = allowProfileCreation;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public PutProfileObjectTypeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public String encryptionKey;
    public PutProfileObjectTypeRequestBody withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationDays")
    public Long expirationDays;
    public PutProfileObjectTypeRequestBody withExpirationDays(Long expirationDays) {
        this.expirationDays = expirationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fields")
    public java.util.Map<String, openapisdk.models.shared.ObjectTypeField> fields;
    public PutProfileObjectTypeRequestBody withFields(java.util.Map<String, openapisdk.models.shared.ObjectTypeField> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public java.util.Map<String, openapisdk.models.shared.ObjectTypeKey[]> keys;
    public PutProfileObjectTypeRequestBody withKeys(java.util.Map<String, openapisdk.models.shared.ObjectTypeKey[]> keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public PutProfileObjectTypeRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public PutProfileObjectTypeRequestBody withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}