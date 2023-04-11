import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFeatureGroupXAmzTargetEnum {
    SageMakerCreateFeatureGroup = "SageMaker.CreateFeatureGroup"
}
export declare class CreateFeatureGroupRequest extends SpeakeasyBase {
    createFeatureGroupRequest: shared.CreateFeatureGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFeatureGroupXAmzTargetEnum;
}
export declare class CreateFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFeatureGroupResponse?: shared.CreateFeatureGroupResponse;
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
