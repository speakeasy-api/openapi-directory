package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorResponse
 * Sadly, sometimes requests to the API are not successful. Failures can
 * occur for a wide range of reasons. In all cases, the API should return
 * an HTTP Status Code that indicates the nature of the failure,
 * with a response body in JSON format containing additional information.
 * 
 * 
 * In the event of a server error the response body will contain an error
 * phrase. These phrases are automatically generated using the
 * [node-asana-phrase
 * library](https://github.com/Asana/node-asana-phrase) and can be used by
 * Asana support to quickly look up the incident that caused the server
 * error.
**/
public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public ErrorResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
}