package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteOrganizationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DeleteOrganizationResponse withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public DeleteOrganizationResponse withState(String state) {
        this.state = state;
        return this;
    }
}