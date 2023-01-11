package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public User[] data;
    public UserCollectionResponse withData(User[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object[] included;
    public UserCollectionResponse withIncluded(Object[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public UserCollectionResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnedResults")
    public Long returnedResults;
    public UserCollectionResponse withReturnedResults(Long returnedResults) {
        this.returnedResults = returnedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Long totalResults;
    public UserCollectionResponse withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}