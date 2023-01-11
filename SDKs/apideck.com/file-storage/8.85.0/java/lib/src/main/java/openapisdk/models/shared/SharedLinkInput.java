package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SharedLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public SharedLinkInput withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public SharedLinkInput withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public SharedLinkScopeEnum scope;
    public SharedLinkInput withScope(SharedLinkScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("target_id")
    public String targetId;
    public SharedLinkInput withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}