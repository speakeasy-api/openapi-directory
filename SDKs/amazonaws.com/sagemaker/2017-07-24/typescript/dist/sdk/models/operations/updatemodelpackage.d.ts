import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateModelPackageXAmzTargetEnum {
    SageMakerUpdateModelPackage = "SageMaker.UpdateModelPackage"
}
export declare class UpdateModelPackageRequest extends SpeakeasyBase {
    updateModelPackageInput: shared.UpdateModelPackageInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateModelPackageXAmzTargetEnum;
}
export declare class UpdateModelPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateModelPackageOutput?: shared.UpdateModelPackageOutput;
}
