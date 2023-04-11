import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSessionXAmzTargetEnum {
    AmazonAthenaGetSession = "AmazonAthena.GetSession"
}
export declare class GetSessionRequest extends SpeakeasyBase {
    getSessionRequest: shared.GetSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSessionXAmzTargetEnum;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSessionResponse?: shared.GetSessionResponse;
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
