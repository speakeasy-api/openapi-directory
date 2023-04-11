import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBackupXAmzTargetEnum {
    BaldrApiServiceDeleteBackup = "BaldrApiService.DeleteBackup"
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    deleteBackupRequest: shared.DeleteBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
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
    deleteBackupResponse?: shared.DeleteBackupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
