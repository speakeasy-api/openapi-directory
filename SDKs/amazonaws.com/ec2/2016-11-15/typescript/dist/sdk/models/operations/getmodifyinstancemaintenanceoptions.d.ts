import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyInstanceMaintenanceOptionsActionEnum {
    ModifyInstanceMaintenanceOptions = "ModifyInstanceMaintenanceOptions"
}
/**
 * Disables the automatic recovery behavior of your instance or sets it to default.
 */
export declare enum GETModifyInstanceMaintenanceOptionsAutoRecoveryEnum {
    Disabled = "disabled",
    Default = "default"
}
export declare enum GETModifyInstanceMaintenanceOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyInstanceMaintenanceOptionsRequest extends SpeakeasyBase {
    action: GETModifyInstanceMaintenanceOptionsActionEnum;
    /**
     * Disables the automatic recovery behavior of your instance or sets it to default.
     */
    autoRecovery?: GETModifyInstanceMaintenanceOptionsAutoRecoveryEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    version: GETModifyInstanceMaintenanceOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyInstanceMaintenanceOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
