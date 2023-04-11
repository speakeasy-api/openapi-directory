import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportConfigurationsXAmzTargetEnum {
    AWSPoseidonServiceV20151101ExportConfigurations = "AWSPoseidonService_V2015_11_01.ExportConfigurations"
}
export declare class ExportConfigurationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportConfigurationsXAmzTargetEnum;
}
export declare class ExportConfigurationsResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    exportConfigurationsResponse?: shared.ExportConfigurationsResponse;
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
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
