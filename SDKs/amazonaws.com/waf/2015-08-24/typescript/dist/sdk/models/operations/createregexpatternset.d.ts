import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRegexPatternSetXAmzTargetEnum {
    AWSWAF20150824CreateRegexPatternSet = "AWSWAF_20150824.CreateRegexPatternSet"
}
export declare class CreateRegexPatternSetRequest extends SpeakeasyBase {
    createRegexPatternSetRequest: shared.CreateRegexPatternSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRegexPatternSetXAmzTargetEnum;
}
export declare class CreateRegexPatternSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRegexPatternSetResponse?: shared.CreateRegexPatternSetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFDisallowedNameException
     */
    wafDisallowedNameException?: any;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
