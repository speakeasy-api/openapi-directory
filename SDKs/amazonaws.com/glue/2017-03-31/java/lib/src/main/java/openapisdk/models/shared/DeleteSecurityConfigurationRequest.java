package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSecurityConfigurationRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteSecurityConfigurationRequest withName(String name) {
        this.name = name;
        return this;
    }
}