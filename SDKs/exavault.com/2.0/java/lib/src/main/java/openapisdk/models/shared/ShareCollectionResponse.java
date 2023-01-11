package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Share[] data;
    public ShareCollectionResponse withData(Share[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object[] included;
    public ShareCollectionResponse withIncluded(Object[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public ShareCollectionResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnedResults")
    public Long returnedResults;
    public ShareCollectionResponse withReturnedResults(Long returnedResults) {
        this.returnedResults = returnedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Long totalResults;
    public ShareCollectionResponse withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}