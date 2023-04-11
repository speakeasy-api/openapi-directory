import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFeatureGroupXAmzTargetEnum {
    SageMakerDeleteFeatureGroup = "SageMaker.DeleteFeatureGroup"
}
export declare class DeleteFeatureGroupRequest extends SpeakeasyBase {
    deleteFeatureGroupRequest: shared.DeleteFeatureGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFeatureGroupXAmzTargetEnum;
}
export declare class DeleteFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
