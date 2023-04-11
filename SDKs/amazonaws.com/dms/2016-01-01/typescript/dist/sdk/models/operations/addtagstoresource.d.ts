import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToResourceXAmzTargetEnum {
    AmazonDMSv20160101AddTagsToResource = "AmazonDMSv20160101.AddTagsToResource"
}
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    addTagsToResourceMessage: shared.AddTagsToResourceMessage;
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
    addTagsToResourceResponse?: Record<string, any>;
    contentType: string;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
