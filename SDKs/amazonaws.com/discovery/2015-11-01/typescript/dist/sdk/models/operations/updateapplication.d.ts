import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApplicationXAmzTargetEnum {
    AWSPoseidonServiceV20151101UpdateApplication = "AWSPoseidonService_V2015_11_01.UpdateApplication"
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    updateApplicationRequest: shared.UpdateApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    /**
     * Success
     */
    updateApplicationResponse?: Record<string, any>;
}
