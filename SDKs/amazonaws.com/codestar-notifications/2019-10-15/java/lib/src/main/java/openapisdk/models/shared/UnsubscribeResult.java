package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnsubscribeResult {
    @JsonProperty("Arn")
    public String arn;
    public UnsubscribeResult withArn(String arn) {
        this.arn = arn;
        return this;
    }
}