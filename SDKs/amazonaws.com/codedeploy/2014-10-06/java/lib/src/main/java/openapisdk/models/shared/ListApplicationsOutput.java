package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApplicationsOutput
 * Represents the output of a ListApplications operation.
**/
public class ListApplicationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;
    public ListApplicationsOutput withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApplicationsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}