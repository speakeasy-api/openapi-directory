import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreBackupXAmzTargetEnum {
    BaldrApiServiceRestoreBackup = "BaldrApiService.RestoreBackup"
}
export declare class RestoreBackupRequest extends SpeakeasyBase {
    restoreBackupRequest: shared.RestoreBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreBackupXAmzTargetEnum;
}
export declare class RestoreBackupResponse extends SpeakeasyBase {
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
    restoreBackupResponse?: shared.RestoreBackupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
