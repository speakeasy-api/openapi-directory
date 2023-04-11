import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRetentionConfigurationsXAmzTargetEnum {
    StarlingDoveServiceDescribeRetentionConfigurations = "StarlingDoveService.DescribeRetentionConfigurations"
}
export declare class DescribeRetentionConfigurationsRequest extends SpeakeasyBase {
    describeRetentionConfigurationsRequest: shared.DescribeRetentionConfigurationsRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRetentionConfigurationsXAmzTargetEnum;
}
export declare class DescribeRetentionConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRetentionConfigurationsResponse?: shared.DescribeRetentionConfigurationsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchRetentionConfigurationException
     */
    noSuchRetentionConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
