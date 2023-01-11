package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetReportDefinitionResult {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public GetReportDefinitionResult withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("destinationS3Location")
    public S3Location destinationS3Location;
    public GetReportDefinitionResult withDestinationS3Location(S3Location destinationS3Location) {
        this.destinationS3Location = destinationS3Location;
        return this;
    }
    @JsonProperty("format")
    public FormatEnum format;
    public GetReportDefinitionResult withFormat(FormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetReportDefinitionResult withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("reportDescription")
    public String reportDescription;
    public GetReportDefinitionResult withReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
        return this;
    }
    @JsonProperty("reportFrequency")
    public ReportFrequencyEnum reportFrequency;
    public GetReportDefinitionResult withReportFrequency(ReportFrequencyEnum reportFrequency) {
        this.reportFrequency = reportFrequency;
        return this;
    }
    @JsonProperty("reportId")
    public String reportId;
    public GetReportDefinitionResult withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}