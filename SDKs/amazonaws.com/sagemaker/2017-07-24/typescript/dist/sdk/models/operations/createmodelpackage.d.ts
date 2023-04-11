import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelPackageXAmzTargetEnum {
    SageMakerCreateModelPackage = "SageMaker.CreateModelPackage"
}
export declare class CreateModelPackageRequest extends SpeakeasyBase {
    createModelPackageInput: shared.CreateModelPackageInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelPackageXAmzTargetEnum;
}
export declare class CreateModelPackageResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createModelPackageOutput?: shared.CreateModelPackageOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
