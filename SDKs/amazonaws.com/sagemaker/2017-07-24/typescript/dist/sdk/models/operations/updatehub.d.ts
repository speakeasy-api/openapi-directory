import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHubXAmzTargetEnum {
    SageMakerUpdateHub = "SageMaker.UpdateHub"
}
export declare class UpdateHubRequest extends SpeakeasyBase {
    updateHubRequest: shared.UpdateHubRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHubXAmzTargetEnum;
}
export declare class UpdateHubResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateHubResponse?: shared.UpdateHubResponse;
}
