import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToResourceXAmzTargetEnum {
    CloudHsmFrontendServiceAddTagsToResource = "CloudHsmFrontendService.AddTagsToResource"
}
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    addTagsToResourceRequest: shared.AddTagsToResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToResourceXAmzTargetEnum;
}
export declare class AddTagsToResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addTagsToResourceResponse?: shared.AddTagsToResourceResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
