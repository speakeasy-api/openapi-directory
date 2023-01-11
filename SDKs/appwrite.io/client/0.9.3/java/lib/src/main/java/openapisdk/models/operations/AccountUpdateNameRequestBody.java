package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountUpdateNameRequestBody {
    @JsonProperty("name")
    public String name;
    public AccountUpdateNameRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}