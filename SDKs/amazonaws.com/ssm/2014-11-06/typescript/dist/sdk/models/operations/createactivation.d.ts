import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateActivationXAmzTargetEnum {
    AmazonSSMCreateActivation = "AmazonSSM.CreateActivation"
}
export declare class CreateActivationRequest extends SpeakeasyBase {
    createActivationRequest: shared.CreateActivationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActivationXAmzTargetEnum;
}
export declare class CreateActivationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createActivationResult?: shared.CreateActivationResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameters
     */
    invalidParameters?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
