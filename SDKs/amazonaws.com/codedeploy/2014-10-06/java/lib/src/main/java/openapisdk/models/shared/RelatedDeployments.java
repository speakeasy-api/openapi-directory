package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelatedDeployments
 * Information about deployments related to the specified deployment.
**/
public class RelatedDeployments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoUpdateOutdatedInstancesDeploymentIds")
    public String[] autoUpdateOutdatedInstancesDeploymentIds;
    public RelatedDeployments withAutoUpdateOutdatedInstancesDeploymentIds(String[] autoUpdateOutdatedInstancesDeploymentIds) {
        this.autoUpdateOutdatedInstancesDeploymentIds = autoUpdateOutdatedInstancesDeploymentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoUpdateOutdatedInstancesRootDeploymentId")
    public String autoUpdateOutdatedInstancesRootDeploymentId;
    public RelatedDeployments withAutoUpdateOutdatedInstancesRootDeploymentId(String autoUpdateOutdatedInstancesRootDeploymentId) {
        this.autoUpdateOutdatedInstancesRootDeploymentId = autoUpdateOutdatedInstancesRootDeploymentId;
        return this;
    }
}