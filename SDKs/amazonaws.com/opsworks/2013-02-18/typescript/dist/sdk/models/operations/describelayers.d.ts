import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLayersXAmzTargetEnum {
    OpsWorks20130218DescribeLayers = "OpsWorks_20130218.DescribeLayers"
}
export declare class DescribeLayersRequest extends SpeakeasyBase {
    describeLayersRequest: shared.DescribeLayersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLayersXAmzTargetEnum;
}
export declare class DescribeLayersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLayersResult?: shared.DescribeLayersResult;
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
