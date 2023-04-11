import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteHubContentXAmzTargetEnum {
    SageMakerDeleteHubContent = "SageMaker.DeleteHubContent"
}
export declare class DeleteHubContentRequest extends SpeakeasyBase {
    deleteHubContentRequest: shared.DeleteHubContentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHubContentXAmzTargetEnum;
}
export declare class DeleteHubContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
