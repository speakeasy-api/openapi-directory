import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListConfigurationsXAmzTargetEnum {
    AWSPoseidonServiceV20151101ListConfigurations = "AWSPoseidonService_V2015_11_01.ListConfigurations"
}
export declare class ListConfigurationsRequest extends SpeakeasyBase {
    listConfigurationsRequest: shared.ListConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConfigurationsXAmzTargetEnum;
}
export declare class ListConfigurationsResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    listConfigurationsResponse?: shared.ListConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
}
