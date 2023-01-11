package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBackupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateBackupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public CreateBackupRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateBackupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}