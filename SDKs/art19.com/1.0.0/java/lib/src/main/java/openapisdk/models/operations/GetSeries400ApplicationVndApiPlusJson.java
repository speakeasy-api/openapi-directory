package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSeries400ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetSeries400ApplicationVndApiPlusJsonErrors[] errors;
    public GetSeries400ApplicationVndApiPlusJson withErrors(GetSeries400ApplicationVndApiPlusJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}