import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLayerVersionByArnFindEnum {
    LayerVersion = "LayerVersion"
}
export declare class GetLayerVersionByArnRequest extends SpeakeasyBase {
    /**
     * The ARN of the layer version.
     */
    arn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    find: GetLayerVersionByArnFindEnum;
}
export declare class GetLayerVersionByArnResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLayerVersionResponse?: shared.GetLayerVersionResponse;
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
