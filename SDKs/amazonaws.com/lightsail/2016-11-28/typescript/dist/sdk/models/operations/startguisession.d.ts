import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartGUISessionXAmzTargetEnum {
    Lightsail20161128StartGUISession = "Lightsail_20161128.StartGUISession"
}
export declare class StartGUISessionRequest extends SpeakeasyBase {
    startGUISessionRequest: shared.StartGUISessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartGUISessionXAmzTargetEnum;
}
export declare class StartGUISessionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    startGUISessionResult?: shared.StartGUISessionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
