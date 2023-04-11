import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyHostsActionEnum {
    ModifyHosts = "ModifyHosts"
}
/**
 * Specify whether to enable or disable auto-placement.
 */
export declare enum GETModifyHostsAutoPlacementEnum {
    On = "on",
    Off = "off"
}
/**
 * Indicates whether to enable or disable host maintenance for the Dedicated Host. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html"> Host maintenance</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare enum GETModifyHostsHostMaintenanceEnum {
    On = "on",
    Off = "off"
}
/**
 * Indicates whether to enable or disable host recovery for the Dedicated Host. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a> in the <i>Amazon EC2 User Guide</i>.
 */
export declare enum GETModifyHostsHostRecoveryEnum {
    On = "on",
    Off = "off"
}
export declare enum GETModifyHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyHostsRequest extends SpeakeasyBase {
    action: GETModifyHostsActionEnum;
    /**
     * Specify whether to enable or disable auto-placement.
     */
    autoPlacement?: GETModifyHostsAutoPlacementEnum;
    /**
     * The IDs of the Dedicated Hosts to modify.
     */
    hostId: string[];
    /**
     * Indicates whether to enable or disable host maintenance for the Dedicated Host. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-maintenance.html"> Host maintenance</a> in the <i>Amazon EC2 User Guide</i>.
     */
    hostMaintenance?: GETModifyHostsHostMaintenanceEnum;
    /**
     * Indicates whether to enable or disable host recovery for the Dedicated Host. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host recovery</a> in the <i>Amazon EC2 User Guide</i>.
     */
    hostRecovery?: GETModifyHostsHostRecoveryEnum;
    /**
     * <p>Specifies the instance family to be supported by the Dedicated Host. Specify this parameter to modify a Dedicated Host to support multiple instance types within its current instance family.</p> <p>If you want to modify a Dedicated Host to support a specific instance type only, omit this parameter and specify <b>InstanceType</b> instead. You cannot specify <b>InstanceFamily</b> and <b>InstanceType</b> in the same request.</p>
     */
    instanceFamily?: string;
    /**
     * <p>Specifies the instance type to be supported by the Dedicated Host. Specify this parameter to modify a Dedicated Host to support only a specific instance type.</p> <p>If you want to modify a Dedicated Host to support multiple instance types in its current instance family, omit this parameter and specify <b>InstanceFamily</b> instead. You cannot specify <b>InstanceType</b> and <b>InstanceFamily</b> in the same request.</p>
     */
    instanceType?: string;
    version: GETModifyHostsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
