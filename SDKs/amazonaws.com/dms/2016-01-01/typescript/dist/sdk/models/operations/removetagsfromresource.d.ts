import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsFromResourceXAmzTargetEnum {
    AmazonDMSv20160101RemoveTagsFromResource = "AmazonDMSv20160101.RemoveTagsFromResource"
}
export declare class RemoveTagsFromResourceRequest extends SpeakeasyBase {
    removeTagsFromResourceMessage: shared.RemoveTagsFromResourceMessage;
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
     * Success
     */
    removeTagsFromResourceResponse?: Record<string, any>;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
