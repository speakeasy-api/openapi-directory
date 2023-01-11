package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateArchiveRequest {
    @JsonProperty("ArchiveName")
    public String archiveName;
    public UpdateArchiveRequest withArchiveName(String archiveName) {
        this.archiveName = archiveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateArchiveRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventPattern")
    public String eventPattern;
    public UpdateArchiveRequest withEventPattern(String eventPattern) {
        this.eventPattern = eventPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionDays")
    public Long retentionDays;
    public UpdateArchiveRequest withRetentionDays(Long retentionDays) {
        this.retentionDays = retentionDays;
        return this;
    }
}