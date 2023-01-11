package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyOwner200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public ApiKeyOwner200ApplicationJsonOperations[] operations;
    public ApiKeyOwner200ApplicationJson withOperations(ApiKeyOwner200ApplicationJsonOperations[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public ApiKeyOwner200ApplicationJsonUser user;
    public ApiKeyOwner200ApplicationJson withUser(ApiKeyOwner200ApplicationJsonUser user) {
        this.user = user;
        return this;
    }
}