package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIncidentRecordRequestBody {
    @JsonProperty("arn")
    public String arn;
    public DeleteIncidentRecordRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
}