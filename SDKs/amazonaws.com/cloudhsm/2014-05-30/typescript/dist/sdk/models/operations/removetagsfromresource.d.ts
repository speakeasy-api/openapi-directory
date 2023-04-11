import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    CloudHsmFrontendServiceRemoveTagsFromResource = "CloudHsmFrontendService.RemoveTagsFromResource"
}
export declare class RemoveTagsFromResourceRequest extends SpeakeasyBase {
    removeTagsFromResourceRequest: shared.RemoveTagsFromResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromResourceXAmzTargetEnum;
}
export declare class RemoveTagsFromResourceResponse extends SpeakeasyBase {
    /**
     * CloudHsmInternalException
     */
    cloudHsmInternalException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    removeTagsFromResourceResponse?: shared.RemoveTagsFromResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
