import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelPackageGroupXAmzTargetEnum {
    SageMakerCreateModelPackageGroup = "SageMaker.CreateModelPackageGroup"
}
export declare class CreateModelPackageGroupRequest extends SpeakeasyBase {
    createModelPackageGroupInput: shared.CreateModelPackageGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelPackageGroupXAmzTargetEnum;
}
export declare class CreateModelPackageGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createModelPackageGroupOutput?: shared.CreateModelPackageGroupOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
