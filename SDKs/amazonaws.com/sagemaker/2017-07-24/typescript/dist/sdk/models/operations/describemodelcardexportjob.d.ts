import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelCardExportJobXAmzTargetEnum {
    SageMakerDescribeModelCardExportJob = "SageMaker.DescribeModelCardExportJob"
}
export declare class DescribeModelCardExportJobRequest extends SpeakeasyBase {
    describeModelCardExportJobRequest: shared.DescribeModelCardExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelCardExportJobXAmzTargetEnum;
}
export declare class DescribeModelCardExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelCardExportJobResponse?: shared.DescribeModelCardExportJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
