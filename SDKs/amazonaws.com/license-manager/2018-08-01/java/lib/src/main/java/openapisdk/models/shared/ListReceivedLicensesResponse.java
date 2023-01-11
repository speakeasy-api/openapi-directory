package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReceivedLicensesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Licenses")
    public GrantedLicense[] licenses;
    public ListReceivedLicensesResponse withLicenses(GrantedLicense[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListReceivedLicensesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}