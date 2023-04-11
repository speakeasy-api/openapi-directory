import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGUISessionAccessDetailsXAmzTargetEnum {
    Lightsail20161128CreateGUISessionAccessDetails = "Lightsail_20161128.CreateGUISessionAccessDetails"
}
export declare class CreateGUISessionAccessDetailsRequest extends SpeakeasyBase {
    createGUISessionAccessDetailsRequest: shared.CreateGUISessionAccessDetailsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGUISessionAccessDetailsXAmzTargetEnum;
}
export declare class CreateGUISessionAccessDetailsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createGUISessionAccessDetailsResult?: shared.CreateGUISessionAccessDetailsResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
