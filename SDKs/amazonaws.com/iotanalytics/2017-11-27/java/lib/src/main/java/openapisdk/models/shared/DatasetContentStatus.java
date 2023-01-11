package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetContentStatus
 * The state of the dataset contents and the reason they are in this state.
**/
public class DatasetContentStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public DatasetContentStatus withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DatasetContentStateEnum state;
    public DatasetContentStatus withState(DatasetContentStateEnum state) {
        this.state = state;
        return this;
    }
}