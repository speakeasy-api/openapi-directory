import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DetachNetworkInterface.
 */
export declare class DetachNetworkInterfaceRequest extends SpeakeasyBase {
    attachmentId: string;
    dryRun?: boolean;
    force?: boolean;
}
