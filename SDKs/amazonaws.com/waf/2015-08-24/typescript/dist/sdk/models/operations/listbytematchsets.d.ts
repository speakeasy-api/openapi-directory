import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListByteMatchSetsXAmzTargetEnum {
    AWSWAF20150824ListByteMatchSets = "AWSWAF_20150824.ListByteMatchSets"
}
export declare class ListByteMatchSetsRequest extends SpeakeasyBase {
    listByteMatchSetsRequest: shared.ListByteMatchSetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListByteMatchSetsXAmzTargetEnum;
}
export declare class ListByteMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listByteMatchSetsResponse?: shared.ListByteMatchSetsResponse;
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
