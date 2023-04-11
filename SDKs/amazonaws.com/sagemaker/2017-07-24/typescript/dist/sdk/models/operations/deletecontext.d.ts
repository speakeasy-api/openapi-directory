import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteContextXAmzTargetEnum {
    SageMakerDeleteContext = "SageMaker.DeleteContext"
}
export declare class DeleteContextRequest extends SpeakeasyBase {
    deleteContextRequest: shared.DeleteContextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteContextXAmzTargetEnum;
}
export declare class DeleteContextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteContextResponse?: shared.DeleteContextResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
