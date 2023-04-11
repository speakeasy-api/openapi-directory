import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAppXAmzTargetEnum {
    SageMakerCreateApp = "SageMaker.CreateApp"
}
export declare class CreateAppRequest extends SpeakeasyBase {
    createAppRequest: shared.CreateAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppXAmzTargetEnum;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAppResponse?: shared.CreateAppResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
