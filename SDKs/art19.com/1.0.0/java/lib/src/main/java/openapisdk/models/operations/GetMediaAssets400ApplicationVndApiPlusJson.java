package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMediaAssets400ApplicationVndApiPlusJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetMediaAssets400ApplicationVndApiPlusJsonErrors[] errors;
    public GetMediaAssets400ApplicationVndApiPlusJson withErrors(GetMediaAssets400ApplicationVndApiPlusJsonErrors[] errors) {
        this.errors = errors;
        return this;
    }
}