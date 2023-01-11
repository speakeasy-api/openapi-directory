package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Aspect
 * This type contains the name and values of a category aspect.
**/
public class Aspect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedName")
    public String localizedName;
    public Aspect withLocalizedName(String localizedName) {
        this.localizedName = localizedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedValues")
    public String[] localizedValues;
    public Aspect withLocalizedValues(String[] localizedValues) {
        this.localizedValues = localizedValues;
        return this;
    }
}