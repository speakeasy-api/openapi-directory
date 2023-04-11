import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSizeConstraintSetXAmzTargetEnum {
    AWSWAFRegional20161128CreateSizeConstraintSet = "AWSWAF_Regional_20161128.CreateSizeConstraintSet"
}
export declare class CreateSizeConstraintSetRequest extends SpeakeasyBase {
    createSizeConstraintSetRequest: shared.CreateSizeConstraintSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSizeConstraintSetXAmzTargetEnum;
}
export declare class CreateSizeConstraintSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSizeConstraintSetResponse?: shared.CreateSizeConstraintSetResponse;
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
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFLimitsExceededException
     */
    wafLimitsExceededException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
