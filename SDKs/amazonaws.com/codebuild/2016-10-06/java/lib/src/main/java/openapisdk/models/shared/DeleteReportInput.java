package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteReportInput {
    @JsonProperty("arn")
    public String arn;
    public DeleteReportInput withArn(String arn) {
        this.arn = arn;
        return this;
    }
}