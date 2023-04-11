import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateConfigurationItemsToApplicationXAmzTargetEnum {
    AWSPoseidonServiceV20151101AssociateConfigurationItemsToApplication = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"
}
export declare class AssociateConfigurationItemsToApplicationRequest extends SpeakeasyBase {
    associateConfigurationItemsToApplicationRequest: shared.AssociateConfigurationItemsToApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConfigurationItemsToApplicationXAmzTargetEnum;
}
export declare class AssociateConfigurationItemsToApplicationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateConfigurationItemsToApplicationResponse?: Record<string, any>;
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
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
