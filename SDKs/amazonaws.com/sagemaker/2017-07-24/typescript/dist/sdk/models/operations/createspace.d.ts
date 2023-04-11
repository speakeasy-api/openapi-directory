import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSpaceXAmzTargetEnum {
    SageMakerCreateSpace = "SageMaker.CreateSpace"
}
export declare class CreateSpaceRequest extends SpeakeasyBase {
    createSpaceRequest: shared.CreateSpaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSpaceXAmzTargetEnum;
}
export declare class CreateSpaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSpaceResponse?: shared.CreateSpaceResponse;
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
