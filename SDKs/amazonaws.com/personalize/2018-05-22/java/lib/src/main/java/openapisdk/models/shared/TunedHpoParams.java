package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TunedHpoParams
 * If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
**/
public class TunedHpoParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithmHyperParameters")
    public java.util.Map<String, String> algorithmHyperParameters;
    public TunedHpoParams withAlgorithmHyperParameters(java.util.Map<String, String> algorithmHyperParameters) {
        this.algorithmHyperParameters = algorithmHyperParameters;
        return this;
    }
}