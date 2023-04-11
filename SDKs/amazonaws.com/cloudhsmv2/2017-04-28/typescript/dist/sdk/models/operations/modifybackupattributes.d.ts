import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyBackupAttributesXAmzTargetEnum {
    BaldrApiServiceModifyBackupAttributes = "BaldrApiService.ModifyBackupAttributes"
}
export declare class ModifyBackupAttributesRequest extends SpeakeasyBase {
    modifyBackupAttributesRequest: shared.ModifyBackupAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyBackupAttributesXAmzTargetEnum;
}
export declare class ModifyBackupAttributesResponse extends SpeakeasyBase {
    /**
     * CloudHsmAccessDeniedException
     */
    cloudHsmAccessDeniedException?: any;
    /**
     * CloudHsmInternalFailureException
     */
    cloudHsmInternalFailureException?: any;
    /**
     * CloudHsmInvalidRequestException
     */
    cloudHsmInvalidRequestException?: any;
    /**
     * CloudHsmResourceNotFoundException
     */
    cloudHsmResourceNotFoundException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    modifyBackupAttributesResponse?: shared.ModifyBackupAttributesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
