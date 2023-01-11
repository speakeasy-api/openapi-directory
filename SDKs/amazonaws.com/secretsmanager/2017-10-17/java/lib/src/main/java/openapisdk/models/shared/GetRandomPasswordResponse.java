package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRandomPasswordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RandomPassword")
    public String randomPassword;
    public GetRandomPasswordResponse withRandomPassword(String randomPassword) {
        this.randomPassword = randomPassword;
        return this;
    }
}