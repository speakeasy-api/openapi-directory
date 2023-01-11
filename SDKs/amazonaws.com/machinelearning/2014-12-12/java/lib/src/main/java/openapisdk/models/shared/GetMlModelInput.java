package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMlModelInput {
    @JsonProperty("MLModelId")
    public String mlModelId;
    public GetMlModelInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Verbose")
    public Boolean verbose;
    public GetMlModelInput withVerbose(Boolean verbose) {
        this.verbose = verbose;
        return this;
    }
}