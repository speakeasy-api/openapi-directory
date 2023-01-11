package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnsubscribeRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public UnsubscribeRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("TargetAddress")
    public String targetAddress;
    public UnsubscribeRequestBody withTargetAddress(String targetAddress) {
        this.targetAddress = targetAddress;
        return this;
    }
}