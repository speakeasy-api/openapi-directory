package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArchivedResult {
    @JsonProperty("snapshot")
    public Snapshot snapshot;
    public ArchivedResult withSnapshot(Snapshot snapshot) {
        this.snapshot = snapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public ArchivedResult withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public ArchivedResult withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ArchivedResult withUrl(String url) {
        this.url = url;
        return this;
    }
}