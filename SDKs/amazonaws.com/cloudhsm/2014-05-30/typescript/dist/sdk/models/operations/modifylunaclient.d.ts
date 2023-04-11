import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceModifyLunaClient = "CloudHsmFrontendService.ModifyLunaClient"
}
export declare class ModifyLunaClientRequest extends SpeakeasyBase {
    modifyLunaClientRequest: shared.ModifyLunaClientRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyLunaClientXAmzTargetEnum;
}
export declare class ModifyLunaClientResponse extends SpeakeasyBase {
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    modifyLunaClientResponse?: shared.ModifyLunaClientResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
