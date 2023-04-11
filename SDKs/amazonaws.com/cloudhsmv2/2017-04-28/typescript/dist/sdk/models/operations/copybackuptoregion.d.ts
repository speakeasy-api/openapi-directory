import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CopyBackupToRegionXAmzTargetEnum {
    BaldrApiServiceCopyBackupToRegion = "BaldrApiService.CopyBackupToRegion"
}
export declare class CopyBackupToRegionRequest extends SpeakeasyBase {
    copyBackupToRegionRequest: shared.CopyBackupToRegionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyBackupToRegionXAmzTargetEnum;
}
export declare class CopyBackupToRegionResponse extends SpeakeasyBase {
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
    /**
     * CloudHsmTagException
     */
    cloudHsmTagException?: any;
    contentType: string;
    /**
     * Success
     */
    copyBackupToRegionResponse?: shared.CopyBackupToRegionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
