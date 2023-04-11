import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteTargetGroupActionEnum {
    DeleteTargetGroup = "DeleteTargetGroup"
}
export declare enum GETDeleteTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDeleteTargetGroupRequest extends SpeakeasyBase {
    action: GETDeleteTargetGroupActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    targetGroupArn: string;
    version: GETDeleteTargetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
