import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteLunaClient = "CloudHsmFrontendService.DeleteLunaClient"
}
export declare class DeleteLunaClientRequest extends SpeakeasyBase {
    deleteLunaClientRequest: shared.DeleteLunaClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLunaClientXAmzTargetEnum;
}
export declare class DeleteLunaClientResponse extends SpeakeasyBase {
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
    deleteLunaClientResponse?: shared.DeleteLunaClientResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
