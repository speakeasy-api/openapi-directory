import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateImageVersionXAmzTargetEnum {
    SageMakerUpdateImageVersion = "SageMaker.UpdateImageVersion"
}
export declare class UpdateImageVersionRequest extends SpeakeasyBase {
    updateImageVersionRequest: shared.UpdateImageVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateImageVersionXAmzTargetEnum;
}
export declare class UpdateImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateImageVersionResponse?: shared.UpdateImageVersionResponse;
}
