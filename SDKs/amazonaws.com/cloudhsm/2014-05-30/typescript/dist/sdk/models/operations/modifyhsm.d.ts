import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyHsmXAmzTargetEnum {
    CloudHsmFrontendServiceModifyHsm = "CloudHsmFrontendService.ModifyHsm"
}
export declare class ModifyHsmRequest extends SpeakeasyBase {
    modifyHsmRequest: shared.ModifyHsmRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyHsmXAmzTargetEnum;
}
export declare class ModifyHsmResponse extends SpeakeasyBase {
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    modifyHsmResponse?: shared.ModifyHsmResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
