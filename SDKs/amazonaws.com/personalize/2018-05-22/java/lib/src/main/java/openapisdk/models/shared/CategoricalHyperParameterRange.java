package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CategoricalHyperParameterRange
 * Provides the name and range of a categorical hyperparameter.
**/
public class CategoricalHyperParameterRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CategoricalHyperParameterRange withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public CategoricalHyperParameterRange withValues(String[] values) {
        this.values = values;
        return this;
    }
}