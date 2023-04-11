import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceCreateLunaClient = "CloudHsmFrontendService.CreateLunaClient"
}
export declare class CreateLunaClientRequest extends SpeakeasyBase {
    createLunaClientRequest: shared.CreateLunaClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLunaClientXAmzTargetEnum;
}
export declare class CreateLunaClientResponse extends SpeakeasyBase {
    /**
     * CloudHsmInternalException
     */
    cloudHsmInternalException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    createLunaClientResponse?: shared.CreateLunaClientResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
