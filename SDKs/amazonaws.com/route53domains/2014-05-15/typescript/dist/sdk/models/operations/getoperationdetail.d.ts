import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOperationDetailXAmzTargetEnum {
    Route53DomainsV20140515GetOperationDetail = "Route53Domains_v20140515.GetOperationDetail"
}
export declare class GetOperationDetailRequest extends SpeakeasyBase {
    getOperationDetailRequest: shared.GetOperationDetailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOperationDetailXAmzTargetEnum;
}
export declare class GetOperationDetailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOperationDetailResponse?: shared.GetOperationDetailResponse;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
