package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAwsOrganizationsAccessStatusOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessStatus")
    public AccessStatusEnum accessStatus;
    public GetAwsOrganizationsAccessStatusOutput withAccessStatus(AccessStatusEnum accessStatus) {
        this.accessStatus = accessStatus;
        return this;
    }
}