import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCodeRepositoryXAmzTargetEnum {
    SageMakerDescribeCodeRepository = "SageMaker.DescribeCodeRepository"
}
export declare class DescribeCodeRepositoryRequest extends SpeakeasyBase {
    describeCodeRepositoryInput: shared.DescribeCodeRepositoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCodeRepositoryXAmzTargetEnum;
}
export declare class DescribeCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCodeRepositoryOutput?: shared.DescribeCodeRepositoryOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
