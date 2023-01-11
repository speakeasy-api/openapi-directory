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
 * AttackDetail
 * The details of a DDoS attack.
**/
public class AttackDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackCounters")
    public SummarizedCounter[] attackCounters;
    public AttackDetail withAttackCounters(SummarizedCounter[] attackCounters) {
        this.attackCounters = attackCounters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackId")
    public String attackId;
    public AttackDetail withAttackId(String attackId) {
        this.attackId = attackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttackProperties")
    public AttackProperty[] attackProperties;
    public AttackDetail withAttackProperties(AttackProperty[] attackProperties) {
        this.attackProperties = attackProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public AttackDetail withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mitigations")
    public Mitigation[] mitigations;
    public AttackDetail withMitigations(Mitigation[] mitigations) {
        this.mitigations = mitigations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public AttackDetail withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public AttackDetail withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubResources")
    public SubResourceSummary[] subResources;
    public AttackDetail withSubResources(SubResourceSummary[] subResources) {
        this.subResources = subResources;
        return this;
    }
}