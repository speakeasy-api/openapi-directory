import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetApplicationsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplications = "CodeDeploy_20141006.BatchGetApplications"
}
export declare class BatchGetApplicationsRequest extends SpeakeasyBase {
    batchGetApplicationsInput: shared.BatchGetApplicationsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetApplicationsXAmzTargetEnum;
}
export declare class BatchGetApplicationsResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    /**
     * Success
     */
    batchGetApplicationsOutput?: shared.BatchGetApplicationsOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
