package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Key
 * Key
**/
public class Key {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Key withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Key withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Key withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("key_id")
    public String keyId;
    public Key withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("read_only")
    public Boolean readOnly;
    public Key withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Key withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Key withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("verified")
    public Boolean verified;
    public Key withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}