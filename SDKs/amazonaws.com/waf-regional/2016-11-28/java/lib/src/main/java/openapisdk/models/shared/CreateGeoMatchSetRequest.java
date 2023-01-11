package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGeoMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateGeoMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateGeoMatchSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}