import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelPackageGroupXAmzTargetEnum {
    SageMakerDeleteModelPackageGroup = "SageMaker.DeleteModelPackageGroup"
}
export declare class DeleteModelPackageGroupRequest extends SpeakeasyBase {
    deleteModelPackageGroupInput: shared.DeleteModelPackageGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageGroupXAmzTargetEnum;
}
export declare class DeleteModelPackageGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
