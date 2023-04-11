import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInfo } from "./endpointinfo";
import { EndpointInputConfiguration } from "./endpointinputconfiguration";
import { RecommendationJobContainerConfig } from "./recommendationjobcontainerconfig";
import { RecommendationJobResourceLimit } from "./recommendationjobresourcelimit";
import { RecommendationJobVpcConfig } from "./recommendationjobvpcconfig";
import { TrafficPattern } from "./trafficpattern";
/**
 * The input configuration of the recommendation job.
 */
export declare class RecommendationJobInputConfig extends SpeakeasyBase {
    containerConfig?: RecommendationJobContainerConfig;
    endpointConfigurations?: EndpointInputConfiguration[];
    endpoints?: EndpointInfo[];
    jobDurationInSeconds?: number;
    modelName?: string;
    modelPackageVersionArn?: string;
    resourceLimit?: RecommendationJobResourceLimit;
    trafficPattern?: TrafficPattern;
    volumeKmsKeyId?: string;
    vpcConfig?: RecommendationJobVpcConfig;
}
