package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeNotificationRuleRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public DescribeNotificationRuleRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}