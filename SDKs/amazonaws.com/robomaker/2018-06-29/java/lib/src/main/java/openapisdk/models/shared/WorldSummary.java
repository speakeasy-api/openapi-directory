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
 * WorldSummary
 * Information about a world.
**/
public class WorldSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public WorldSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public WorldSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generationJob")
    public String generationJob;
    public WorldSummary withGenerationJob(String generationJob) {
        this.generationJob = generationJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public WorldSummary withTemplate(String template) {
        this.template = template;
        return this;
    }
}