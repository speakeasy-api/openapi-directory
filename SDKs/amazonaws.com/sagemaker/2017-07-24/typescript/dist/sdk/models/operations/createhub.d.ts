import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHubXAmzTargetEnum {
    SageMakerCreateHub = "SageMaker.CreateHub"
}
export declare class CreateHubRequest extends SpeakeasyBase {
    createHubRequest: shared.CreateHubRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHubXAmzTargetEnum;
}
export declare class CreateHubResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHubResponse?: shared.CreateHubResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
