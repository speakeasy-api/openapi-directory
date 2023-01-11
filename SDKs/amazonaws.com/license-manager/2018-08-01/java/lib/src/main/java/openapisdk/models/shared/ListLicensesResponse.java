package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicensesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Licenses")
    public License[] licenses;
    public ListLicensesResponse withLicenses(License[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicensesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}