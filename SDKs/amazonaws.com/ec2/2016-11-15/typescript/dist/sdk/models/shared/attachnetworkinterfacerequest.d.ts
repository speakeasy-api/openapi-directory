import { SpeakeasyBase } from "../../../internal/utils";
import { EnaSrdSpecification } from "./enasrdspecification";
/**
 * Contains the parameters for AttachNetworkInterface.
 */
export declare class AttachNetworkInterfaceRequest extends SpeakeasyBase {
    deviceIndex: number;
    dryRun?: boolean;
    enaSrdSpecification?: EnaSrdSpecification;
    instanceId: string;
    networkCardIndex?: number;
    networkInterfaceId: string;
}
