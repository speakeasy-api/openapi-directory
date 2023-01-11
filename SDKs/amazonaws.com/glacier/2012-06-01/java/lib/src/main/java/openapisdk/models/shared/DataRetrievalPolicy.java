package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataRetrievalPolicy
 * Data retrieval policy.
**/
public class DataRetrievalPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rules")
    public DataRetrievalRule[] rules;
    public DataRetrievalPolicy withRules(DataRetrievalRule[] rules) {
        this.rules = rules;
        return this;
    }
}