package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworks400ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetNetworks400ApplicationVndApiPlusJsonErrors[] errors;
    public GetNetworks400ApplicationVndApiPlusJson withErrors(GetNetworks400ApplicationVndApiPlusJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}