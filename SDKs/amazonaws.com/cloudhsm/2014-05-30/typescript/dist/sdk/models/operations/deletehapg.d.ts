import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteHapgXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteHapg = "CloudHsmFrontendService.DeleteHapg"
}
export declare class DeleteHapgRequest extends SpeakeasyBase {
    deleteHapgRequest: shared.DeleteHapgRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHapgXAmzTargetEnum;
}
export declare class DeleteHapgResponse extends SpeakeasyBase {
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
    deleteHapgResponse?: shared.DeleteHapgResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
