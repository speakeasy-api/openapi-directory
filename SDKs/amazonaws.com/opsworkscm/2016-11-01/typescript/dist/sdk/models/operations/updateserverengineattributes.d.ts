import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServerEngineAttributesXAmzTargetEnum {
    OpsWorksCMV20161101UpdateServerEngineAttributes = "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes"
}
export declare class UpdateServerEngineAttributesRequest extends SpeakeasyBase {
    updateServerEngineAttributesRequest: shared.UpdateServerEngineAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServerEngineAttributesXAmzTargetEnum;
}
export declare class UpdateServerEngineAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateServerEngineAttributesResponse?: shared.UpdateServerEngineAttributesResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
