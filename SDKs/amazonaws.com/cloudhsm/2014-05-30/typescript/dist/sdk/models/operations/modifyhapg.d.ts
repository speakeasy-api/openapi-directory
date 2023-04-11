import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyHapgXAmzTargetEnum {
    CloudHsmFrontendServiceModifyHapg = "CloudHsmFrontendService.ModifyHapg"
}
export declare class ModifyHapgRequest extends SpeakeasyBase {
    modifyHapgRequest: shared.ModifyHapgRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyHapgXAmzTargetEnum;
}
export declare class ModifyHapgResponse extends SpeakeasyBase {
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
    modifyHapgResponse?: shared.ModifyHapgResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
