package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyParameter
 *  Name of the parameter from the Review policy. 
**/
public class PolicyParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public PolicyParameter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MapEntries")
    public ParameterMapEntry[] mapEntries;
    public PolicyParameter withMapEntries(ParameterMapEntry[] mapEntries) {
        this.mapEntries = mapEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public PolicyParameter withValues(String[] values) {
        this.values = values;
        return this;
    }
}