package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEnrollmentStatusesForOrganizationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountEnrollmentStatuses")
    public AccountEnrollmentStatus[] accountEnrollmentStatuses;
    public GetEnrollmentStatusesForOrganizationResponse withAccountEnrollmentStatuses(AccountEnrollmentStatus[] accountEnrollmentStatuses) {
        this.accountEnrollmentStatuses = accountEnrollmentStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEnrollmentStatusesForOrganizationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}