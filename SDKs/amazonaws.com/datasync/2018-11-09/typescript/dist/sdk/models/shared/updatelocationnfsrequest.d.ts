import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
export declare class UpdateLocationNfsRequest extends SpeakeasyBase {
    locationArn: string;
    /**
     * Specifies how DataSync can access a location using the NFS protocol.
     */
    mountOptions?: NfsMountOptions;
    /**
     * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
     */
    onPremConfig?: OnPremConfig;
    subdirectory?: string;
}
