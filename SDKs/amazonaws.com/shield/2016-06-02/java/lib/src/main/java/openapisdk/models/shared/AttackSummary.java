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
 * AttackSummary
 * Summarizes all DDoS attacks for a specified time period.
**/
public class AttackSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackId")
    public String attackId;
    public AttackSummary withAttackId(String attackId) {
        this.attackId = attackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackVectors")
    public AttackVectorDescription[] attackVectors;
    public AttackSummary withAttackVectors(AttackVectorDescription[] attackVectors) {
        this.attackVectors = attackVectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public AttackSummary withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public AttackSummary withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public AttackSummary withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}