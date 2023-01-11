package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCsvHeaderRequest
 * Represents the request to get the header information for the .csv file for the user import job.
**/
public class GetCsvHeaderRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetCsvHeaderRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}