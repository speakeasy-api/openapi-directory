import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetJobUnlockCodeXAmzTargetEnum {
    AWSIESnowballJobManagementServiceGetJobUnlockCode = "AWSIESnowballJobManagementService.GetJobUnlockCode"
}
export declare class GetJobUnlockCodeRequest extends SpeakeasyBase {
    getJobUnlockCodeRequest: shared.GetJobUnlockCodeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobUnlockCodeXAmzTargetEnum;
}
export declare class GetJobUnlockCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getJobUnlockCodeResult?: shared.GetJobUnlockCodeResult;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
