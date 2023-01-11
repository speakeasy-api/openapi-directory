package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portal")
    public PortalResource portal;
    public Resource withPortal(PortalResource portal) {
        this.portal = portal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public ProjectResource project;
    public Resource withProject(ProjectResource project) {
        this.project = project;
        return this;
    }
}