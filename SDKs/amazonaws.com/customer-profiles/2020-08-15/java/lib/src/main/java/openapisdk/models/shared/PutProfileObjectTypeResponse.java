package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PutProfileObjectTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowProfileCreation")
    public Boolean allowProfileCreation;
    public PutProfileObjectTypeResponse withAllowProfileCreation(Boolean allowProfileCreation) {
        this.allowProfileCreation = allowProfileCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public PutProfileObjectTypeResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public PutProfileObjectTypeResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public String encryptionKey;
    public PutProfileObjectTypeResponse withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationDays")
    public Long expirationDays;
    public PutProfileObjectTypeResponse withExpirationDays(Long expirationDays) {
        this.expirationDays = expirationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fields")
    public java.util.Map<String, ObjectTypeField> fields;
    public PutProfileObjectTypeResponse withFields(java.util.Map<String, ObjectTypeField> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Keys")
    public java.util.Map<String, ObjectTypeKey[]> keys;
    public PutProfileObjectTypeResponse withKeys(java.util.Map<String, ObjectTypeKey[]> keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public PutProfileObjectTypeResponse withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public PutProfileObjectTypeResponse withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public PutProfileObjectTypeResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateId")
    public String templateId;
    public PutProfileObjectTypeResponse withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}