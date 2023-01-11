package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartLoggingRequest
 * The request to CloudTrail to start logging Amazon Web Services API calls for an account.
**/
public class StartLoggingRequest {
    @JsonProperty("Name")
    public String name;
    public StartLoggingRequest withName(String name) {
        this.name = name;
        return this;
    }
}