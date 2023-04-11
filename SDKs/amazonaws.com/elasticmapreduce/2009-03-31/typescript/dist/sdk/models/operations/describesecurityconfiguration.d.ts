import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceDescribeSecurityConfiguration = "ElasticMapReduce.DescribeSecurityConfiguration"
}
export declare class DescribeSecurityConfigurationRequest extends SpeakeasyBase {
    describeSecurityConfigurationInput: shared.DescribeSecurityConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecurityConfigurationXAmzTargetEnum;
}
export declare class DescribeSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSecurityConfigurationOutput?: shared.DescribeSecurityConfigurationOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
