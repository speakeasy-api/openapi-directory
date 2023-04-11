import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelPackageXAmzTargetEnum {
    SageMakerDescribeModelPackage = "SageMaker.DescribeModelPackage"
}
export declare class DescribeModelPackageRequest extends SpeakeasyBase {
    describeModelPackageInput: shared.DescribeModelPackageInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelPackageXAmzTargetEnum;
}
export declare class DescribeModelPackageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelPackageOutput?: shared.DescribeModelPackageOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
