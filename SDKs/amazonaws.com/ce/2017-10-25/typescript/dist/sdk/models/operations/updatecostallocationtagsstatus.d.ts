import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCostAllocationTagsStatusXAmzTargetEnum {
    AWSInsightsIndexServiceUpdateCostAllocationTagsStatus = "AWSInsightsIndexService.UpdateCostAllocationTagsStatus"
}
export declare class UpdateCostAllocationTagsStatusRequest extends SpeakeasyBase {
    updateCostAllocationTagsStatusRequest: shared.UpdateCostAllocationTagsStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCostAllocationTagsStatusXAmzTargetEnum;
}
export declare class UpdateCostAllocationTagsStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCostAllocationTagsStatusResponse?: shared.UpdateCostAllocationTagsStatusResponse;
}
