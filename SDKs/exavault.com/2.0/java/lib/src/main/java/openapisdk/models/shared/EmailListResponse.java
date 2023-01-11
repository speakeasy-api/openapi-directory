package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailListResponse
 * Response object for a single email list.
**/
public class EmailListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public EmailList data;
    public EmailListResponse withData(EmailList data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public User[] included;
    public EmailListResponse withIncluded(User[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Integer responseStatus;
    public EmailListResponse withResponseStatus(Integer responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}