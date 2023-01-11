package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteGeoMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteGeoMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
}