import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSessionStatusXAmzTargetEnum {
    AmazonAthenaGetSessionStatus = "AmazonAthena.GetSessionStatus"
}
export declare class GetSessionStatusRequest extends SpeakeasyBase {
    getSessionStatusRequest: shared.GetSessionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSessionStatusXAmzTargetEnum;
}
export declare class GetSessionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSessionStatusResponse?: shared.GetSessionStatusResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
