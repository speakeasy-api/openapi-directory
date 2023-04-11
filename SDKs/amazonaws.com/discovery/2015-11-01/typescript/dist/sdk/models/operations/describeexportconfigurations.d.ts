import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExportConfigurationsXAmzTargetEnum {
    AWSPoseidonServiceV20151101DescribeExportConfigurations = "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"
}
export declare class DescribeExportConfigurationsRequest extends SpeakeasyBase {
    describeExportConfigurationsRequest: shared.DescribeExportConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportConfigurationsXAmzTargetEnum;
}
export declare class DescribeExportConfigurationsResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    describeExportConfigurationsResponse?: shared.DescribeExportConfigurationsResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
}
