package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteNotificationRuleRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public DeleteNotificationRuleRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}