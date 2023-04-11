import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStudioLifecycleConfigXAmzTargetEnum {
    SageMakerCreateStudioLifecycleConfig = "SageMaker.CreateStudioLifecycleConfig"
}
export declare class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
    createStudioLifecycleConfigRequest: shared.CreateStudioLifecycleConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStudioLifecycleConfigXAmzTargetEnum;
}
export declare class CreateStudioLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStudioLifecycleConfigResponse?: shared.CreateStudioLifecycleConfigResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
