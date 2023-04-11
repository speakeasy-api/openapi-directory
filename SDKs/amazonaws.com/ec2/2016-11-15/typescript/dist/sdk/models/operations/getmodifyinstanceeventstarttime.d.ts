import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyInstanceEventStartTimeActionEnum {
    ModifyInstanceEventStartTime = "ModifyInstanceEventStartTime"
}
export declare enum GETModifyInstanceEventStartTimeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyInstanceEventStartTimeRequest extends SpeakeasyBase {
    action: GETModifyInstanceEventStartTimeActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the event whose date and time you are modifying.
     */
    instanceEventId: string;
    /**
     * The ID of the instance with the scheduled event.
     */
    instanceId: string;
    /**
     * The new date and time when the event will take place.
     */
    notBefore: Date;
    version: GETModifyInstanceEventStartTimeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyInstanceEventStartTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
