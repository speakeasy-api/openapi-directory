import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelJobXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCancelJob = "AWSIESnowballJobManagementService.CancelJob"
}
export declare class CancelJobRequest extends SpeakeasyBase {
    cancelJobRequest: shared.CancelJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelJobXAmzTargetEnum;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelJobResult?: Record<string, any>;
    contentType: string;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * KMSRequestFailedException
     */
    kmsRequestFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
