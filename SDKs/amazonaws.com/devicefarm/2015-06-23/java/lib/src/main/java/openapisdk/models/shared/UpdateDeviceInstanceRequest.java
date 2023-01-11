package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceInstanceRequest {
    @JsonProperty("arn")
    public String arn;
    public UpdateDeviceInstanceRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public UpdateDeviceInstanceRequest withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileArn")
    public String profileArn;
    public UpdateDeviceInstanceRequest withProfileArn(String profileArn) {
        this.profileArn = profileArn;
        return this;
    }
}