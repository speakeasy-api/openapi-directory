import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionPoolConfiguration } from "./connectionpoolconfiguration";
export declare class ModifyDBProxyTargetGroupRequest extends SpeakeasyBase {
    connectionPoolConfig?: ConnectionPoolConfiguration;
    dbProxyName: string;
    newName?: string;
    targetGroupName: string;
}
