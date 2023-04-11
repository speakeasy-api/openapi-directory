import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNamespaceDeletionStatusXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetNamespaceDeletionStatus = "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus"
}
export declare class GetNamespaceDeletionStatusRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamespaceDeletionStatusXAmzTargetEnum;
}
export declare class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getNamespaceDeletionStatusResponse?: shared.GetNamespaceDeletionStatusResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
