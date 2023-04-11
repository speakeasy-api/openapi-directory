import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteImageVersionXAmzTargetEnum {
    SageMakerDeleteImageVersion = "SageMaker.DeleteImageVersion"
}
export declare class DeleteImageVersionRequest extends SpeakeasyBase {
    deleteImageVersionRequest: shared.DeleteImageVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageVersionXAmzTargetEnum;
}
export declare class DeleteImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteImageVersionResponse?: Record<string, any>;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
}
