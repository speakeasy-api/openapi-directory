package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParameterMapEntry
 *  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. 
**/
public class ParameterMapEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ParameterMapEntry withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public ParameterMapEntry withValues(String[] values) {
        this.values = values;
        return this;
    }
}