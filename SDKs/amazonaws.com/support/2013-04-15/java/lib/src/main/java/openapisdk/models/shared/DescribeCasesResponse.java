package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeCasesResponse
 * Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
**/
public class DescribeCasesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cases")
    public CaseDetails[] cases;
    public DescribeCasesResponse withCases(CaseDetails[] cases) {
        this.cases = cases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeCasesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}