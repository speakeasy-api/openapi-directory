import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteScheduledActionActionEnum {
    DeleteScheduledAction = "DeleteScheduledAction"
}
export declare enum GETDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDeleteScheduledActionRequest extends SpeakeasyBase {
    action: GETDeleteScheduledActionActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The name of the action to delete.
     */
    scheduledActionName: string;
    version: GETDeleteScheduledActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
