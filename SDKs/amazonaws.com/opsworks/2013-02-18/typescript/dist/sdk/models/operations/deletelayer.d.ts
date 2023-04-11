import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLayerXAmzTargetEnum {
    OpsWorks20130218DeleteLayer = "OpsWorks_20130218.DeleteLayer"
}
export declare class DeleteLayerRequest extends SpeakeasyBase {
    deleteLayerRequest: shared.DeleteLayerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLayerXAmzTargetEnum;
}
export declare class DeleteLayerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
