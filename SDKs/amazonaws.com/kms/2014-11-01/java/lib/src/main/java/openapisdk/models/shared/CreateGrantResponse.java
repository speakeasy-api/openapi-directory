package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGrantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantId")
    public String grantId;
    public CreateGrantResponse withGrantId(String grantId) {
        this.grantId = grantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrantToken")
    public String grantToken;
    public CreateGrantResponse withGrantToken(String grantToken) {
        this.grantToken = grantToken;
        return this;
    }
}