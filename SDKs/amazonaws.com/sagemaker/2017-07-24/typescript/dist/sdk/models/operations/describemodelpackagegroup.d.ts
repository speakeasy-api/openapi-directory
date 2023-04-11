import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelPackageGroupXAmzTargetEnum {
    SageMakerDescribeModelPackageGroup = "SageMaker.DescribeModelPackageGroup"
}
export declare class DescribeModelPackageGroupRequest extends SpeakeasyBase {
    describeModelPackageGroupInput: shared.DescribeModelPackageGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelPackageGroupXAmzTargetEnum;
}
export declare class DescribeModelPackageGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelPackageGroupOutput?: shared.DescribeModelPackageGroupOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
