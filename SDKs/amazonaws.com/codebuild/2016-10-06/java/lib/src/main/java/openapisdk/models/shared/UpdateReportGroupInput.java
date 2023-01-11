package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateReportGroupInput {
    @JsonProperty("arn")
    public String arn;
    public UpdateReportGroupInput withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportConfig")
    public ReportExportConfig exportConfig;
    public UpdateReportGroupInput withExportConfig(ReportExportConfig exportConfig) {
        this.exportConfig = exportConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public UpdateReportGroupInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}