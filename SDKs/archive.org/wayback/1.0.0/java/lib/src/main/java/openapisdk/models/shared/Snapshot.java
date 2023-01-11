package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Snapshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public Snapshot withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public Snapshot withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Snapshot withUrl(String url) {
        this.url = url;
        return this;
    }
}