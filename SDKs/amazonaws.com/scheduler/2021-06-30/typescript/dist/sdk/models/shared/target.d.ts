import { SpeakeasyBase } from "../../../internal/utils";
import { DeadLetterConfig } from "./deadletterconfig";
import { EcsParameters } from "./ecsparameters";
import { EventBridgeParameters } from "./eventbridgeparameters";
import { KinesisParameters } from "./kinesisparameters";
import { RetryPolicy } from "./retrypolicy";
import { SageMakerPipelineParameters } from "./sagemakerpipelineparameters";
import { SqsParameters } from "./sqsparameters";
/**
 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
 */
export declare class Target extends SpeakeasyBase {
    arn: string;
    deadLetterConfig?: DeadLetterConfig;
    ecsParameters?: EcsParameters;
    eventBridgeParameters?: EventBridgeParameters;
    input?: string;
    kinesisParameters?: KinesisParameters;
    retryPolicy?: RetryPolicy;
    roleArn: string;
    sageMakerPipelineParameters?: SageMakerPipelineParameters;
    sqsParameters?: SqsParameters;
}
