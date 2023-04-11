import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourceSetXAmzTargetEnum {
    AWSFMS20180101GetResourceSet = "AWSFMS_20180101.GetResourceSet"
}
export declare class GetResourceSetRequest extends SpeakeasyBase {
    getResourceSetRequest: shared.GetResourceSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceSetXAmzTargetEnum;
}
export declare class GetResourceSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourceSetResponse?: shared.GetResourceSetResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
