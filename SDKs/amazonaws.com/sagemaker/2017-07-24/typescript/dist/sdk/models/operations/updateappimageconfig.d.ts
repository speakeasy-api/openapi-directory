import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAppImageConfigXAmzTargetEnum {
    SageMakerUpdateAppImageConfig = "SageMaker.UpdateAppImageConfig"
}
export declare class UpdateAppImageConfigRequest extends SpeakeasyBase {
    updateAppImageConfigRequest: shared.UpdateAppImageConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAppImageConfigXAmzTargetEnum;
}
export declare class UpdateAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateAppImageConfigResponse?: shared.UpdateAppImageConfigResponse;
}
