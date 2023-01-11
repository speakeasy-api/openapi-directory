package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ApiKeyEntity
 * List Api Keys
**/
public class ApiKeyEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ApiKeyEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptive_label")
    public String descriptiveLabel;
    public ApiKeyEntity withDescriptiveLabel(String descriptiveLabel) {
        this.descriptiveLabel = descriptiveLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public ApiKeyEntity withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ApiKeyEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ApiKeyEntity withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_use_at")
    public OffsetDateTime lastUseAt;
    public ApiKeyEntity withLastUseAt(OffsetDateTime lastUseAt) {
        this.lastUseAt = lastUseAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiKeyEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ApiKeyEntity withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission_set")
    public ApiKeyEntityPermissionSetEnum permissionSet;
    public ApiKeyEntity withPermissionSet(ApiKeyEntityPermissionSetEnum permissionSet) {
        this.permissionSet = permissionSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public ApiKeyEntity withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public ApiKeyEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}