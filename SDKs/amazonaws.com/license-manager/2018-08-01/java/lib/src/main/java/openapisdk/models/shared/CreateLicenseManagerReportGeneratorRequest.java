package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseManagerReportGeneratorRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateLicenseManagerReportGeneratorRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateLicenseManagerReportGeneratorRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("ReportContext")
    public ReportContext reportContext;
    public CreateLicenseManagerReportGeneratorRequest withReportContext(ReportContext reportContext) {
        this.reportContext = reportContext;
        return this;
    }
    @JsonProperty("ReportFrequency")
    public ReportFrequency reportFrequency;
    public CreateLicenseManagerReportGeneratorRequest withReportFrequency(ReportFrequency reportFrequency) {
        this.reportFrequency = reportFrequency;
        return this;
    }
    @JsonProperty("ReportGeneratorName")
    public String reportGeneratorName;
    public CreateLicenseManagerReportGeneratorRequest withReportGeneratorName(String reportGeneratorName) {
        this.reportGeneratorName = reportGeneratorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateLicenseManagerReportGeneratorRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Type")
    public ReportTypeEnum[] type;
    public CreateLicenseManagerReportGeneratorRequest withType(ReportTypeEnum[] type) {
        this.type = type;
        return this;
    }
}