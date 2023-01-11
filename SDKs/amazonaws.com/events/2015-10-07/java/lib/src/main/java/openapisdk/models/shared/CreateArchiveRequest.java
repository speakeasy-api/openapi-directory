package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateArchiveRequest {
    @JsonProperty("ArchiveName")
    public String archiveName;
    public CreateArchiveRequest withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateArchiveRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventPattern")
    public String eventPattern;
    public CreateArchiveRequest withEventPattern(String eventPattern) {
        this.eventPattern = eventPattern;
        return this;
    }
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public CreateArchiveRequest withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionDays")
    public Long retentionDays;
    public CreateArchiveRequest withRetentionDays(Long retentionDays) {
        this.retentionDays = retentionDays;
        return this;
    }
}