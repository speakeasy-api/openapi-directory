package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVpceConfigurationRequest {
    @JsonProperty("arn")
    public String arn;
    public GetVpceConfigurationRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}