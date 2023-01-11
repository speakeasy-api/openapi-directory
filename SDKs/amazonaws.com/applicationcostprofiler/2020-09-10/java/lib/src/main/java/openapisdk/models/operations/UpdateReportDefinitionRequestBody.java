package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateReportDefinitionRequestBody {
    @JsonProperty("destinationS3Location")
    public UpdateReportDefinitionRequestBodyDestinationS3Location destinationS3Location;
    public UpdateReportDefinitionRequestBody withDestinationS3Location(UpdateReportDefinitionRequestBodyDestinationS3Location destinationS3Location) {
        this.destinationS3Location = destinationS3Location;
        return this;
    }
    @JsonProperty("format")
    public UpdateReportDefinitionRequestBodyFormatEnum format;
    public UpdateReportDefinitionRequestBody withFormat(UpdateReportDefinitionRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("reportDescription")
    public String reportDescription;
    public UpdateReportDefinitionRequestBody withReportDescription(String reportDescription) {
        this.reportDescription = reportDescription;
        return this;
    }
    @JsonProperty("reportFrequency")
    public UpdateReportDefinitionRequestBodyReportFrequencyEnum reportFrequency;
    public UpdateReportDefinitionRequestBody withReportFrequency(UpdateReportDefinitionRequestBodyReportFrequencyEnum reportFrequency) {
        this.reportFrequency = reportFrequency;
        return this;
    }
}