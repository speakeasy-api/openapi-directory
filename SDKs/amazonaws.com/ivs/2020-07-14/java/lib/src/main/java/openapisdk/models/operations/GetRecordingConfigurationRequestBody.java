package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRecordingConfigurationRequestBody {
    @JsonProperty("arn")
    public String arn;
    public GetRecordingConfigurationRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}