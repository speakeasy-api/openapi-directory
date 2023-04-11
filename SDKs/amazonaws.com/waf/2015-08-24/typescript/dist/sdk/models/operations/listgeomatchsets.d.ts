import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGeoMatchSetsXAmzTargetEnum {
    AWSWAF20150824ListGeoMatchSets = "AWSWAF_20150824.ListGeoMatchSets"
}
export declare class ListGeoMatchSetsRequest extends SpeakeasyBase {
    listGeoMatchSetsRequest: shared.ListGeoMatchSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGeoMatchSetsXAmzTargetEnum;
}
export declare class ListGeoMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listGeoMatchSetsResponse?: shared.ListGeoMatchSetsResponse;
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
}
