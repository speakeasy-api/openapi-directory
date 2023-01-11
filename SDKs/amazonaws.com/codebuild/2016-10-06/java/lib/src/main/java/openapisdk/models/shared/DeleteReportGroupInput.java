package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteReportGroupInput {
    @JsonProperty("arn")
    public String arn;
    public DeleteReportGroupInput withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteReports")
    public Boolean deleteReports;
    public DeleteReportGroupInput withDeleteReports(Boolean deleteReports) {
        this.deleteReports = deleteReports;
        return this;
    }
}