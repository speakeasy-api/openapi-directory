package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopLoggingRequest
 * Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
**/
public class StopLoggingRequest {
    @JsonProperty("Name")
    public String name;
    public StopLoggingRequest withName(String name) {
        this.name = name;
        return this;
    }
}