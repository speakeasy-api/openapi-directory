import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetGeoMatchSetXAmzTargetEnum {
    AWSWAF20150824GetGeoMatchSet = "AWSWAF_20150824.GetGeoMatchSet"
}
export declare class GetGeoMatchSetRequest extends SpeakeasyBase {
    getGeoMatchSetRequest: shared.GetGeoMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGeoMatchSetXAmzTargetEnum;
}
export declare class GetGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getGeoMatchSetResponse?: shared.GetGeoMatchSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
