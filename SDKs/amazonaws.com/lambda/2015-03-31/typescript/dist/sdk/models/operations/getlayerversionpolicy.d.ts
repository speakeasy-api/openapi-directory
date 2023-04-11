import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLayerVersionPolicyRequest extends SpeakeasyBase {
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerName: string;
    /**
     * The version number.
     */
    versionNumber: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLayerVersionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLayerVersionPolicyResponse?: shared.GetLayerVersionPolicyResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
