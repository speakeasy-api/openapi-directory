import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ViewBillingXAmzTargetEnum {
    Route53DomainsV20140515ViewBilling = "Route53Domains_v20140515.ViewBilling"
}
export declare class ViewBillingRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    viewBillingRequest: shared.ViewBillingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ViewBillingXAmzTargetEnum;
}
export declare class ViewBillingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    viewBillingResponse?: shared.ViewBillingResponse;
}
