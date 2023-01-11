package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ArchiveRuleSummary
 * Contains information about an archive rule.
**/
public class ArchiveRuleSummary {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ArchiveRuleSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("filter")
    public java.util.Map<String, Criterion> filter;
    public ArchiveRuleSummary withFilter(java.util.Map<String, Criterion> filter) {
        this.filter = filter;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public ArchiveRuleSummary withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public ArchiveRuleSummary withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}