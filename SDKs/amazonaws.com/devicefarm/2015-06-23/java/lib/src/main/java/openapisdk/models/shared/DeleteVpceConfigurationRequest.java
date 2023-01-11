package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVpceConfigurationRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteVpceConfigurationRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}