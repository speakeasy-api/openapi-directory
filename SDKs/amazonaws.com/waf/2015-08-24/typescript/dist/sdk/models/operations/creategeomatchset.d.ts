import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGeoMatchSetXAmzTargetEnum {
    AWSWAF20150824CreateGeoMatchSet = "AWSWAF_20150824.CreateGeoMatchSet"
}
export declare class CreateGeoMatchSetRequest extends SpeakeasyBase {
    createGeoMatchSetRequest: shared.CreateGeoMatchSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGeoMatchSetXAmzTargetEnum;
}
export declare class CreateGeoMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGeoMatchSetResponse?: shared.CreateGeoMatchSetResponse;
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
