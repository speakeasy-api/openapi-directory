import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteGeoMatchSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteGeoMatchSet = "AWSWAF_Regional_20161128.DeleteGeoMatchSet"
}
export declare class DeleteGeoMatchSetRequest extends SpeakeasyBase {
    deleteGeoMatchSetRequest: shared.DeleteGeoMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGeoMatchSetXAmzTargetEnum;
}
export declare class DeleteGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGeoMatchSetResponse?: shared.DeleteGeoMatchSetResponse;
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
     * WAFNonEmptyEntityException
     */
    wafNonEmptyEntityException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
    /**
     * WAFReferencedItemException
     */
    wafReferencedItemException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
