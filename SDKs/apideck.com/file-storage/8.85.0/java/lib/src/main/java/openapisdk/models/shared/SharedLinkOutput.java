package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SharedLinkOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SharedLinkOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public SharedLinkOutput withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public SharedLinkOutput withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_protected")
    public Boolean passwordProtected;
    public SharedLinkOutput withPasswordProtected(Boolean passwordProtected) {
        this.passwordProtected = passwordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public SharedLinkScopeEnum scope;
    public SharedLinkOutput withScope(SharedLinkScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public SharedLinkTarget target;
    public SharedLinkOutput withTarget(SharedLinkTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SharedLinkOutput withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SharedLinkOutput withUrl(String url) {
        this.url = url;
        return this;
    }
}