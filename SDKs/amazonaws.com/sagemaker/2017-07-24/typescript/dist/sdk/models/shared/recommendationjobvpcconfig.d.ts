import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Inference Recommender provisions SageMaker endpoints with access to VPC in the inference recommendation job.
 */
export declare class RecommendationJobVpcConfig extends SpeakeasyBase {
    securityGroupIds: string[];
    subnets: string[];
}
