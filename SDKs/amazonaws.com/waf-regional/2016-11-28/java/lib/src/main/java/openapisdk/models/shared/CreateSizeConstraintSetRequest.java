package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSizeConstraintSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateSizeConstraintSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateSizeConstraintSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}