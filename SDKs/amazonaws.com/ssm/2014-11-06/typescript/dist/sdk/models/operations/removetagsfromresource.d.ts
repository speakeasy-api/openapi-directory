import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    AmazonSSMRemoveTagsFromResource = "AmazonSSM.RemoveTagsFromResource"
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
    /**
     * Success
     */
    removeTagsFromResourceResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
}
