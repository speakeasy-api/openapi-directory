import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DeleteNetworkInterface.
 */
export declare class DeleteNetworkInterfaceRequest extends SpeakeasyBase {
    dryRun?: boolean;
    networkInterfaceId: string;
}
