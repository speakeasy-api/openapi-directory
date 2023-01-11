package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationExportRequest
 * An *organization_export* request starts a job to export the complete data of the given Organization.
**/
public class OrganizationExportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public OrganizationExportRequest withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
}