import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceSummaryByResourceTypeXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByResourceType = "StarlingDoveService.GetComplianceSummaryByResourceType"
}
export declare class GetComplianceSummaryByResourceTypeRequest extends SpeakeasyBase {
    getComplianceSummaryByResourceTypeRequest: shared.GetComplianceSummaryByResourceTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryByResourceTypeXAmzTargetEnum;
}
export declare class GetComplianceSummaryByResourceTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComplianceSummaryByResourceTypeResponse?: shared.GetComplianceSummaryByResourceTypeResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
