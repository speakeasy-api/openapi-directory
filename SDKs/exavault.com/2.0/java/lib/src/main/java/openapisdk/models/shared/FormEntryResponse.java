package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormEntryResponse
 * Response object of the form data.
**/
public class FormEntryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public FormEntry[] data;
    public FormEntryResponse withData(FormEntry[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public FormEntryResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnedResults")
    public Long returnedResults;
    public FormEntryResponse withReturnedResults(Long returnedResults) {
        this.returnedResults = returnedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Long totalResults;
    public FormEntryResponse withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}