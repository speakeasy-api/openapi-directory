package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateIpSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateIpSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateIpSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}