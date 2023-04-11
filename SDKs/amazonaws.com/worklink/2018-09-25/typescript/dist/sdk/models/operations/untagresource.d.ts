import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UntagResourceRequest extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    resourceArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The list of tag keys to remove from the resource.
     */
    tagKeys: string[];
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagResourceResponse?: Record<string, any>;
}
