import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRollbackInstanceRefreshActionEnum {
    RollbackInstanceRefresh = "RollbackInstanceRefresh"
}
export declare enum GETRollbackInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETRollbackInstanceRefreshRequest extends SpeakeasyBase {
    action: GETRollbackInstanceRefreshActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: string;
    version: GETRollbackInstanceRefreshVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRollbackInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
