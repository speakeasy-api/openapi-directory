import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfigSummary } from "./datacaptureconfigsummary";
import { DeploymentConfig } from "./deploymentconfig";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { ExplainerConfig } from "./explainerconfig";
import { PendingDeploymentSummary } from "./pendingdeploymentsummary";
import { ProductionVariantSummary } from "./productionvariantsummary";
/**
 * Success
 */
export declare class DescribeEndpointOutput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    creationTime: Date;
    /**
     * The currently active data capture configuration used by your Endpoint.
     */
    dataCaptureConfig?: DataCaptureConfigSummary;
    endpointArn: string;
    endpointConfigName: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    explainerConfig?: ExplainerConfig;
    failureReason?: string;
    lastDeploymentConfig?: DeploymentConfig;
    lastModifiedTime: Date;
    pendingDeploymentSummary?: PendingDeploymentSummary;
    productionVariants?: ProductionVariantSummary[];
    shadowProductionVariants?: ProductionVariantSummary[];
}
