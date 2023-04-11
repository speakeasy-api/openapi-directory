import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { Tag } from "./tag";
export declare class CreateEndpointInput extends SpeakeasyBase {
    /**
     * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
     */
    deploymentConfig?: DeploymentConfig;
    endpointConfigName: string;
    endpointName: string;
    tags?: Tag[];
}
