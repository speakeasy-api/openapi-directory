import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteActionXAmzTargetEnum {
    SageMakerDeleteAction = "SageMaker.DeleteAction"
}
export declare class DeleteActionRequest extends SpeakeasyBase {
    deleteActionRequest: shared.DeleteActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActionXAmzTargetEnum;
}
export declare class DeleteActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteActionResponse?: shared.DeleteActionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
