package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeploymentController
 * The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
public class DeploymentController {
    @JsonProperty("type")
    public DeploymentControllerTypeEnum type;
    public DeploymentController withType(DeploymentControllerTypeEnum type) {
        this.type = type;
        return this;
    }
}