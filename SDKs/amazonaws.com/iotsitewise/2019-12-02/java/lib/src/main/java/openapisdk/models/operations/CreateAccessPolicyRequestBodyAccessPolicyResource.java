package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAccessPolicyRequestBodyAccessPolicyResource
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
public class CreateAccessPolicyRequestBodyAccessPolicyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portal")
    public openapisdk.models.shared.PortalResource portal;
    public CreateAccessPolicyRequestBodyAccessPolicyResource withPortal(openapisdk.models.shared.PortalResource portal) {
        this.portal = portal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public openapisdk.models.shared.ProjectResource project;
    public CreateAccessPolicyRequestBodyAccessPolicyResource withProject(openapisdk.models.shared.ProjectResource project) {
        this.project = project;
        return this;
    }
}