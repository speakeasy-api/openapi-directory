import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeregisterInstanceEventNotificationAttributesActionEnum {
    DeregisterInstanceEventNotificationAttributes = "DeregisterInstanceEventNotificationAttributes"
}
/**
 * Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
 */
export declare class GETDeregisterInstanceEventNotificationAttributesInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
export declare enum GETDeregisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeregisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
    action: GETDeregisterInstanceEventNotificationAttributesActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Information about the tag keys to deregister.
     */
    instanceTagAttribute?: GETDeregisterInstanceEventNotificationAttributesInstanceTagAttribute;
    version: GETDeregisterInstanceEventNotificationAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeregisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
