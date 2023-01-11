package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRecordHistorySearchFilter
 * The search filter to use when listing history records.
**/
public class ListRecordHistorySearchFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public ListRecordHistorySearchFilter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public ListRecordHistorySearchFilter withValue(String value) {
        this.value = value;
        return this;
    }
}