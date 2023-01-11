package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreReceiveEnvironmentDownloadStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloaded_at")
    public String downloadedAt;
    public PreReceiveEnvironmentDownloadStatus withDownloadedAt(String downloadedAt) {
        this.downloadedAt = downloadedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PreReceiveEnvironmentDownloadStatus withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public PreReceiveEnvironmentDownloadStatus withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreReceiveEnvironmentDownloadStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}