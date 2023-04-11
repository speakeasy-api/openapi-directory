import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSnowballUsageXAmzTargetEnum {
    AWSIESnowballJobManagementServiceGetSnowballUsage = "AWSIESnowballJobManagementService.GetSnowballUsage"
}
export declare class GetSnowballUsageRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSnowballUsageXAmzTargetEnum;
}
export declare class GetSnowballUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSnowballUsageResult?: shared.GetSnowballUsageResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
