import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToResourceXAmzTargetEnum {
    AmazonSSMAddTagsToResource = "AmazonSSM.AddTagsToResource"
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
    addTagsToResourceResult?: Record<string, any>;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    /**
     * InvalidResourceType
     */
    invalidResourceType?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsError
     */
    tooManyTagsError?: any;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
}
