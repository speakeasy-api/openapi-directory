package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailListCollectionResponse
 * Response object for list of email lists
**/
public class EmailListCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public EmailList[] data;
    public EmailListCollectionResponse withData(EmailList[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public User[] included;
    public EmailListCollectionResponse withIncluded(User[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public EmailListCollectionResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnedResults")
    public Long returnedResults;
    public EmailListCollectionResponse withReturnedResults(Long returnedResults) {
        this.returnedResults = returnedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public Long totalResults;
    public EmailListCollectionResponse withTotalResults(Long totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}