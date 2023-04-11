import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteHumanTaskUiXAmzTargetEnum {
    SageMakerDeleteHumanTaskUi = "SageMaker.DeleteHumanTaskUi"
}
export declare class DeleteHumanTaskUiRequest extends SpeakeasyBase {
    deleteHumanTaskUiRequest: shared.DeleteHumanTaskUiRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHumanTaskUiXAmzTargetEnum;
}
export declare class DeleteHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteHumanTaskUiResponse?: Record<string, any>;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
