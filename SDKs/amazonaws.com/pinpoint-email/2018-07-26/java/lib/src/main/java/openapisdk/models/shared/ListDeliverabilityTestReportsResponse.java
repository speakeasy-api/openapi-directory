package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeliverabilityTestReportsResponse
 * A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
**/
public class ListDeliverabilityTestReportsResponse {
    @JsonProperty("DeliverabilityTestReports")
    public DeliverabilityTestReport[] deliverabilityTestReports;
    public ListDeliverabilityTestReportsResponse withDeliverabilityTestReports(DeliverabilityTestReport[] deliverabilityTestReports) {
        this.deliverabilityTestReports = deliverabilityTestReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDeliverabilityTestReportsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}