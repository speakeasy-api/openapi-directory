package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FailedBatchItem
 *  A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
**/
public class FailedBatchItem {
    @JsonProperty("errorMessage")
    public String errorMessage;
    public FailedBatchItem withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public FailedBatchItem withId(String id) {
        this.id = id;
        return this;
    }
}