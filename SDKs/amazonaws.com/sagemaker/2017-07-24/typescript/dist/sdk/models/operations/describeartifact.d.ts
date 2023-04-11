import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeArtifactXAmzTargetEnum {
    SageMakerDescribeArtifact = "SageMaker.DescribeArtifact"
}
export declare class DescribeArtifactRequest extends SpeakeasyBase {
    describeArtifactRequest: shared.DescribeArtifactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeArtifactXAmzTargetEnum;
}
export declare class DescribeArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeArtifactResponse?: shared.DescribeArtifactResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
