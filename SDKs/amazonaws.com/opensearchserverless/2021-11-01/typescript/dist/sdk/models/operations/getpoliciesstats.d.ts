import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPoliciesStatsXAmzTargetEnum {
    OpenSearchServerlessGetPoliciesStats = "OpenSearchServerless.GetPoliciesStats"
}
export declare class GetPoliciesStatsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPoliciesStatsXAmzTargetEnum;
}
export declare class GetPoliciesStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPoliciesStatsResponse?: shared.GetPoliciesStatsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
