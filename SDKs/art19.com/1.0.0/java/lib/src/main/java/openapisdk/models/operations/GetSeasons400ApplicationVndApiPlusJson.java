package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSeasons400ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetSeasons400ApplicationVndApiPlusJsonErrors[] errors;
    public GetSeasons400ApplicationVndApiPlusJson withErrors(GetSeasons400ApplicationVndApiPlusJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}