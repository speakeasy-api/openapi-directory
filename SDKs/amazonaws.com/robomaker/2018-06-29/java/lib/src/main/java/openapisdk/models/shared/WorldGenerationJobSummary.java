package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * WorldGenerationJobSummary
 * Information about a world generator job.
**/
public class WorldGenerationJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public WorldGenerationJobSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public WorldGenerationJobSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedWorldCount")
    public Long failedWorldCount;
    public WorldGenerationJobSummary withFailedWorldCount(Long failedWorldCount) {
        this.failedWorldCount = failedWorldCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WorldGenerationJobStatusEnum status;
    public WorldGenerationJobSummary withStatus(WorldGenerationJobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededWorldCount")
    public Long succeededWorldCount;
    public WorldGenerationJobSummary withSucceededWorldCount(Long succeededWorldCount) {
        this.succeededWorldCount = succeededWorldCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public WorldGenerationJobSummary withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worldCount")
    public WorldCount worldCount;
    public WorldGenerationJobSummary withWorldCount(WorldCount worldCount) {
        this.worldCount = worldCount;
        return this;
    }
}