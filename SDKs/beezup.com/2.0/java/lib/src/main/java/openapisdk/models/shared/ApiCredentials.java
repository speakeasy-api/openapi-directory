package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public ApiCredential[] credentials;
    public ApiCredentials withCredentials(ApiCredential[] credentials) {
        this.credentials = credentials;
        return this;
    }
}