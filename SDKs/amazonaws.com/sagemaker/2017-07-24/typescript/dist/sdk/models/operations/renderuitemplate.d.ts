import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RenderUiTemplateXAmzTargetEnum {
    SageMakerRenderUiTemplate = "SageMaker.RenderUiTemplate"
}
export declare class RenderUiTemplateRequest extends SpeakeasyBase {
    renderUiTemplateRequest: shared.RenderUiTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenderUiTemplateXAmzTargetEnum;
}
export declare class RenderUiTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    renderUiTemplateResponse?: shared.RenderUiTemplateResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
