import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStudioXAmzTargetEnum {
    ElasticMapReduceDescribeStudio = "ElasticMapReduce.DescribeStudio"
}
export declare class DescribeStudioRequest extends SpeakeasyBase {
    describeStudioInput: shared.DescribeStudioInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStudioXAmzTargetEnum;
}
export declare class DescribeStudioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStudioOutput?: shared.DescribeStudioOutput;
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
