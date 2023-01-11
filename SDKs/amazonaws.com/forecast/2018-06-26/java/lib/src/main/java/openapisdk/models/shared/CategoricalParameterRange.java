package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoricalParameterRange
 * Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
public class CategoricalParameterRange {
    @JsonProperty("Name")
    public String name;
    public CategoricalParameterRange withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public CategoricalParameterRange withValues(String[] values) {
        this.values = values;
        return this;
    }
}