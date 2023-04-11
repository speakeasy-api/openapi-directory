import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMLModelsXAmzTargetEnum {
    AmazonML20141212DescribeMLModels = "AmazonML_20141212.DescribeMLModels"
}
export declare class DescribeMLModelsRequest extends SpeakeasyBase {
    describeMLModelsInput: shared.DescribeMLModelsInput;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeMLModelsXAmzTargetEnum;
}
export declare class DescribeMLModelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMLModelsOutput?: shared.DescribeMLModelsOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
