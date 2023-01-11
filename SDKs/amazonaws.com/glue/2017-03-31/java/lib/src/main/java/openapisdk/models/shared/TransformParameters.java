package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransformParameters
 * The algorithm-specific parameters that are associated with the machine learning transform.
**/
public class TransformParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FindMatchesParameters")
    public FindMatchesParameters findMatchesParameters;
    public TransformParameters withFindMatchesParameters(FindMatchesParameters findMatchesParameters) {
        this.findMatchesParameters = findMatchesParameters;
        return this;
    }
    @JsonProperty("TransformType")
    public TransformTypeEnum transformType;
    public TransformParameters withTransformType(TransformTypeEnum transformType) {
        this.transformType = transformType;
        return this;
    }
}