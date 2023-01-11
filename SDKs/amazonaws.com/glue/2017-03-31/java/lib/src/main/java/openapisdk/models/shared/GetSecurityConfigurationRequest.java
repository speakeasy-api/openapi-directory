package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSecurityConfigurationRequest {
    @JsonProperty("Name")
    public String name;
    public GetSecurityConfigurationRequest withName(String name) {
        this.name = name;
        return this;
    }
}