import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDescribeModelPackageXAmzTargetEnum {
    SageMakerBatchDescribeModelPackage = "SageMaker.BatchDescribeModelPackage"
}
export declare class BatchDescribeModelPackageRequest extends SpeakeasyBase {
    batchDescribeModelPackageInput: shared.BatchDescribeModelPackageInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDescribeModelPackageXAmzTargetEnum;
}
export declare class BatchDescribeModelPackageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDescribeModelPackageOutput?: shared.BatchDescribeModelPackageOutput;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
