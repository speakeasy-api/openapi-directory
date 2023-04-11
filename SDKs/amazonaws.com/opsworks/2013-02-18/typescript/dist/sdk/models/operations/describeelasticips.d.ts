import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeElasticIpsXAmzTargetEnum {
    OpsWorks20130218DescribeElasticIps = "OpsWorks_20130218.DescribeElasticIps"
}
export declare class DescribeElasticIpsRequest extends SpeakeasyBase {
    describeElasticIpsRequest: shared.DescribeElasticIpsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeElasticIpsXAmzTargetEnum;
}
export declare class DescribeElasticIpsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeElasticIpsResult?: shared.DescribeElasticIpsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
