import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSessionXAmzTargetEnum {
    AmazonSSMStartSession = "AmazonSSM.StartSession"
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
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * Success
     */
    startSessionResponse?: shared.StartSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotConnected
     */
    targetNotConnected?: any;
}
