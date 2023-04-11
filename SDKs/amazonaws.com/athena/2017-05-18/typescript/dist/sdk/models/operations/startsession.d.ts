import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSessionXAmzTargetEnum {
    AmazonAthenaStartSession = "AmazonAthena.StartSession"
}
export declare class StartSessionRequest extends SpeakeasyBase {
    startSessionRequest: shared.StartSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSessionXAmzTargetEnum;
}
export declare class StartSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * SessionAlreadyExistsException
     */
    sessionAlreadyExistsException?: any;
    /**
     * Success
     */
    startSessionResponse?: shared.StartSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
