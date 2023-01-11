package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionsPublicKey
 * The public key used for setting Actions Secrets.
**/
public class ActionsPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public ActionsPublicKey withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ActionsPublicKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public ActionsPublicKey withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("key_id")
    public String keyId;
    public ActionsPublicKey withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ActionsPublicKey withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActionsPublicKey withUrl(String url) {
        this.url = url;
        return this;
    }
}