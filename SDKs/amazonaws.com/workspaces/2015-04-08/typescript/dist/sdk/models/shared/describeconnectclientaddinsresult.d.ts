import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectClientAddIn } from "./connectclientaddin";
/**
 * Success
 */
export declare class DescribeConnectClientAddInsResult extends SpeakeasyBase {
    addIns?: ConnectClientAddIn[];
    nextToken?: string;
}
