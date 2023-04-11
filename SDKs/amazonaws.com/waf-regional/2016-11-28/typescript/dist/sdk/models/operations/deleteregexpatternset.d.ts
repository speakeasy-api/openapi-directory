import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRegexPatternSetXAmzTargetEnum {
    AWSWAFRegional20161128DeleteRegexPatternSet = "AWSWAF_Regional_20161128.DeleteRegexPatternSet"
}
export declare class DeleteRegexPatternSetRequest extends SpeakeasyBase {
    deleteRegexPatternSetRequest: shared.DeleteRegexPatternSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegexPatternSetXAmzTargetEnum;
}
export declare class DeleteRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRegexPatternSetResponse?: shared.DeleteRegexPatternSetResponse;
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
