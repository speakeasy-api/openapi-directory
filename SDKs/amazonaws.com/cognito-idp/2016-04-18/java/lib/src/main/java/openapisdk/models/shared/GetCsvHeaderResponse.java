package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCsvHeaderResponse
 * Represents the response from the server to the request to get the header information for the .csv file for the user import job.
**/
public class GetCsvHeaderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CSVHeader")
    public String[] csvHeader;
    public GetCsvHeaderResponse withCsvHeader(String[] csvHeader) {
        this.csvHeader = csvHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetCsvHeaderResponse withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}