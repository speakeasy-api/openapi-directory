package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGrantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Grant")
    public Grant grant;
    public GetGrantResponse withGrant(Grant grant) {
        this.grant = grant;
        return this;
    }
}