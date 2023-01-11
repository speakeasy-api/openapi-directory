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
 * ReportDefinition
 * The configuration of a report in AWS Application Cost Profiler.
**/
public class ReportDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ReportDefinition withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationS3Location")
    public S3Location destinationS3Location;
    public ReportDefinition withDestinationS3Location(S3Location destinationS3Location) {
        this.destinationS3Location = destinationS3Location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public FormatEnum format;
    public ReportDefinition withFormat(FormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public ReportDefinition withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDescription")
    public String reportDescription;
    public ReportDefinition withReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportFrequency")
    public ReportFrequencyEnum reportFrequency;
    public ReportDefinition withReportFrequency(ReportFrequencyEnum reportFrequency) {
        this.reportFrequency = reportFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportId")
    public String reportId;
    public ReportDefinition withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}