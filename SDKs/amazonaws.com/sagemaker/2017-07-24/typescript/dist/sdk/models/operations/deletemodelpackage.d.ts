import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelPackageXAmzTargetEnum {
    SageMakerDeleteModelPackage = "SageMaker.DeleteModelPackage"
}
export declare class DeleteModelPackageRequest extends SpeakeasyBase {
    deleteModelPackageInput: shared.DeleteModelPackageInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelPackageXAmzTargetEnum;
}
export declare class DeleteModelPackageResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
