import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLayerXAmzTargetEnum {
    OpsWorks20130218CreateLayer = "OpsWorks_20130218.CreateLayer"
}
export declare class CreateLayerRequest extends SpeakeasyBase {
    createLayerRequest: shared.CreateLayerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLayerXAmzTargetEnum;
}
export declare class CreateLayerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLayerResult?: shared.CreateLayerResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
