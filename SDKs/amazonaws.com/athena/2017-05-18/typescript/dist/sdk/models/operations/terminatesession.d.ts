import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateSessionXAmzTargetEnum {
    AmazonAthenaTerminateSession = "AmazonAthena.TerminateSession"
}
export declare class TerminateSessionRequest extends SpeakeasyBase {
    terminateSessionRequest: shared.TerminateSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateSessionXAmzTargetEnum;
}
export declare class TerminateSessionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateSessionResponse?: shared.TerminateSessionResponse;
}
