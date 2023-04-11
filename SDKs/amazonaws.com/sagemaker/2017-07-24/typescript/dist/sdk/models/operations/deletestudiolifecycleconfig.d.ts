import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteStudioLifecycleConfigXAmzTargetEnum {
    SageMakerDeleteStudioLifecycleConfig = "SageMaker.DeleteStudioLifecycleConfig"
}
export declare class DeleteStudioLifecycleConfigRequest extends SpeakeasyBase {
    deleteStudioLifecycleConfigRequest: shared.DeleteStudioLifecycleConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStudioLifecycleConfigXAmzTargetEnum;
}
export declare class DeleteStudioLifecycleConfigResponse extends SpeakeasyBase {
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
