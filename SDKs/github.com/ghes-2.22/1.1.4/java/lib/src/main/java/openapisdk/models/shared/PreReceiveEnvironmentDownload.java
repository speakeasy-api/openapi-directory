package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreReceiveEnvironmentDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloaded_at")
    public String downloadedAt;
    public PreReceiveEnvironmentDownload withDownloadedAt(String downloadedAt) {
        this.downloadedAt = downloadedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PreReceiveEnvironmentDownload withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public PreReceiveEnvironmentDownload withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreReceiveEnvironmentDownload withUrl(String url) {
        this.url = url;
        return this;
    }
}