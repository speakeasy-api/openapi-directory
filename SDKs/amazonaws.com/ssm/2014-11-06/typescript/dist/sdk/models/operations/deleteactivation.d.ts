import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteActivationXAmzTargetEnum {
    AmazonSSMDeleteActivation = "AmazonSSM.DeleteActivation"
}
export declare class DeleteActivationRequest extends SpeakeasyBase {
    deleteActivationRequest: shared.DeleteActivationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteActivationXAmzTargetEnum;
}
export declare class DeleteActivationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteActivationResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidActivation
     */
    invalidActivation?: any;
    /**
     * InvalidActivationId
     */
    invalidActivationId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
}
