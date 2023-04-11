import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHumanTaskUiXAmzTargetEnum {
    SageMakerCreateHumanTaskUi = "SageMaker.CreateHumanTaskUi"
}
export declare class CreateHumanTaskUiRequest extends SpeakeasyBase {
    createHumanTaskUiRequest: shared.CreateHumanTaskUiRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHumanTaskUiXAmzTargetEnum;
}
export declare class CreateHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHumanTaskUiResponse?: shared.CreateHumanTaskUiResponse;
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
