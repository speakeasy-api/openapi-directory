package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutReportDefinitionRequestBody {
    @JsonProperty("destinationS3Location")
    public PutReportDefinitionRequestBodyDestinationS3Location destinationS3Location;
    public PutReportDefinitionRequestBody withDestinationS3Location(PutReportDefinitionRequestBodyDestinationS3Location destinationS3Location) {
        this.destinationS3Location = destinationS3Location;
        return this;
    }
    @JsonProperty("format")
    public PutReportDefinitionRequestBodyFormatEnum format;
    public PutReportDefinitionRequestBody withFormat(PutReportDefinitionRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("reportDescription")
    public String reportDescription;
    public PutReportDefinitionRequestBody withReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
        return this;
    }
    @JsonProperty("reportFrequency")
    public PutReportDefinitionRequestBodyReportFrequencyEnum reportFrequency;
    public PutReportDefinitionRequestBody withReportFrequency(PutReportDefinitionRequestBodyReportFrequencyEnum reportFrequency) {
        this.reportFrequency = reportFrequency;
        return this;
    }
    @JsonProperty("reportId")
    public String reportId;
    public PutReportDefinitionRequestBody withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}