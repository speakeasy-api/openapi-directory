import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceDetailsByResourceXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByResource = "StarlingDoveService.GetComplianceDetailsByResource"
}
export declare class GetComplianceDetailsByResourceRequest extends SpeakeasyBase {
    getComplianceDetailsByResourceRequest: shared.GetComplianceDetailsByResourceRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceDetailsByResourceXAmzTargetEnum;
}
export declare class GetComplianceDetailsByResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComplianceDetailsByResourceResponse?: shared.GetComplianceDetailsByResourceResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
