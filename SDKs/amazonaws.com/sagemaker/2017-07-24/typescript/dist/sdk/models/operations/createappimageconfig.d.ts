import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAppImageConfigXAmzTargetEnum {
    SageMakerCreateAppImageConfig = "SageMaker.CreateAppImageConfig"
}
export declare class CreateAppImageConfigRequest extends SpeakeasyBase {
    createAppImageConfigRequest: shared.CreateAppImageConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppImageConfigXAmzTargetEnum;
}
export declare class CreateAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAppImageConfigResponse?: shared.CreateAppImageConfigResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
