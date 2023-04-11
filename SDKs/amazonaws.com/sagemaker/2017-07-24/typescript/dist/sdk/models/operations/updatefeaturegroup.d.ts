import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFeatureGroupXAmzTargetEnum {
    SageMakerUpdateFeatureGroup = "SageMaker.UpdateFeatureGroup"
}
export declare class UpdateFeatureGroupRequest extends SpeakeasyBase {
    updateFeatureGroupRequest: shared.UpdateFeatureGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFeatureGroupXAmzTargetEnum;
}
export declare class UpdateFeatureGroupResponse extends SpeakeasyBase {
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
    updateFeatureGroupResponse?: shared.UpdateFeatureGroupResponse;
}
