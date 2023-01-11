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
 * IncidentRecordSummary
 * Details describing an incident record.
**/
public class IncidentRecordSummary {
    @JsonProperty("arn")
    public String arn;
    public IncidentRecordSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public IncidentRecordSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonProperty("impact")
    public Long impact;
    public IncidentRecordSummary withImpact(Long impact) {
        this.impact = impact;
        return this;
    }
    @JsonProperty("incidentRecordSource")
    public IncidentRecordSource incidentRecordSource;
    public IncidentRecordSummary withIncidentRecordSource(IncidentRecordSource incidentRecordSource) {
        this.incidentRecordSource = incidentRecordSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("resolvedTime")
    public OffsetDateTime resolvedTime;
    public IncidentRecordSummary withResolvedTime(OffsetDateTime resolvedTime) {
        this.resolvedTime = resolvedTime;
        return this;
    }
    @JsonProperty("status")
    public IncidentRecordStatusEnum status;
    public IncidentRecordSummary withStatus(IncidentRecordStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IncidentRecordSummary withTitle(String title) {
        this.title = title;
        return this;
    }
}