package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPeople400ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetPeople400ApplicationVndApiPlusJsonErrors[] errors;
    public GetPeople400ApplicationVndApiPlusJson withErrors(GetPeople400ApplicationVndApiPlusJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}