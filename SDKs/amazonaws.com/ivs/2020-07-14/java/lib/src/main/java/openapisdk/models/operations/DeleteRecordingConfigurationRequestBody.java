package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRecordingConfigurationRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeleteRecordingConfigurationRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}