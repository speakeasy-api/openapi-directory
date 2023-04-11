import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopGUISessionXAmzTargetEnum {
    Lightsail20161128StopGUISession = "Lightsail_20161128.StopGUISession"
}
export declare class StopGUISessionRequest extends SpeakeasyBase {
    stopGUISessionRequest: shared.StopGUISessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopGUISessionXAmzTargetEnum;
}
export declare class StopGUISessionResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    stopGUISessionResult?: shared.StopGUISessionResult;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
