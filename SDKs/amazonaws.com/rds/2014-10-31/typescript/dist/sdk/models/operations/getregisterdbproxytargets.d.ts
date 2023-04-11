import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRegisterDBProxyTargetsActionEnum {
    RegisterDBProxyTargets = "RegisterDBProxyTargets"
}
export declare enum GETRegisterDBProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRegisterDBProxyTargetsRequest extends SpeakeasyBase {
    action: GETRegisterDBProxyTargetsActionEnum;
    /**
     * One or more DB cluster identifiers.
     */
    dbClusterIdentifiers?: string[];
    /**
     * One or more DB instance identifiers.
     */
    dbInstanceIdentifiers?: string[];
    /**
     * The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.
     */
    dbProxyName: string;
    /**
     * The identifier of the <code>DBProxyTargetGroup</code>.
     */
    targetGroupName?: string;
    version: GETRegisterDBProxyTargetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRegisterDBProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
