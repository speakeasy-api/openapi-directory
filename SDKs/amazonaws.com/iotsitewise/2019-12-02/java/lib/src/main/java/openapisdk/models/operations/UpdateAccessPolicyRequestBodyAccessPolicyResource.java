package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAccessPolicyRequestBodyAccessPolicyResource
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
public class UpdateAccessPolicyRequestBodyAccessPolicyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portal")
    public openapisdk.models.shared.PortalResource portal;
    public UpdateAccessPolicyRequestBodyAccessPolicyResource withPortal(openapisdk.models.shared.PortalResource portal) {
        this.portal = portal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public openapisdk.models.shared.ProjectResource project;
    public UpdateAccessPolicyRequestBodyAccessPolicyResource withProject(openapisdk.models.shared.ProjectResource project) {
        this.project = project;
        return this;
    }
}