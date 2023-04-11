import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEnvironmentOutputsXAmzTargetEnum {
    AwsProton20200720ListEnvironmentOutputs = "AwsProton20200720.ListEnvironmentOutputs"
}
export declare class ListEnvironmentOutputsRequest extends SpeakeasyBase {
    listEnvironmentOutputsInput: shared.ListEnvironmentOutputsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentOutputsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListEnvironmentOutputsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listEnvironmentOutputsOutput?: shared.ListEnvironmentOutputsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
