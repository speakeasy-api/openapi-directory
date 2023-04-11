import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBProxyTargetGroupActionEnum {
    ModifyDBProxyTargetGroup = "ModifyDBProxyTargetGroup"
}
/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
 */
export declare class GETModifyDBProxyTargetGroupConnectionPoolConfig extends SpeakeasyBase {
    connectionBorrowTimeout?: number;
    initQuery?: string;
    maxConnectionsPercent?: number;
    maxIdleConnectionsPercent?: number;
    sessionPinningFilters?: string[];
}
export declare enum GETModifyDBProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyDBProxyTargetGroupRequest extends SpeakeasyBase {
    action: GETModifyDBProxyTargetGroupActionEnum;
    /**
     * The settings that determine the size and behavior of the connection pool for the target group.
     */
    connectionPoolConfig?: GETModifyDBProxyTargetGroupConnectionPoolConfig;
    /**
     * The name of the proxy.
     */
    dbProxyName: string;
    /**
     * The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
     */
    newName?: string;
    /**
     * The name of the target group to modify.
     */
    targetGroupName: string;
    version: GETModifyDBProxyTargetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBProxyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
