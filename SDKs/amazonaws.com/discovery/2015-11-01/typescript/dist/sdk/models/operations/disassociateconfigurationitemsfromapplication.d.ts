import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateConfigurationItemsFromApplicationXAmzTargetEnum {
    AWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
}
export declare class DisassociateConfigurationItemsFromApplicationRequest extends SpeakeasyBase {
    disassociateConfigurationItemsFromApplicationRequest: shared.DisassociateConfigurationItemsFromApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;
}
export declare class DisassociateConfigurationItemsFromApplicationResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateConfigurationItemsFromApplicationResponse?: Record<string, any>;
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
