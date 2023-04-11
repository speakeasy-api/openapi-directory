import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetOnPremisesInstances = "CodeDeploy_20141006.BatchGetOnPremisesInstances"
}
export declare class BatchGetOnPremisesInstancesRequest extends SpeakeasyBase {
    batchGetOnPremisesInstancesInput: shared.BatchGetOnPremisesInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetOnPremisesInstancesXAmzTargetEnum;
}
export declare class BatchGetOnPremisesInstancesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetOnPremisesInstancesOutput?: shared.BatchGetOnPremisesInstancesOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
    contentType: string;
    /**
     * InstanceNameRequiredException
     */
    instanceNameRequiredException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
