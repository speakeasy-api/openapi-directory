package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLicenseVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Licenses")
    public License[] licenses;
    public ListLicenseVersionsResponse withLicenses(License[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLicenseVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}