import { SpeakeasyBase } from "../../../internal/utils";
import { NfsMountOptions } from "./nfsmountoptions";
import { OnPremConfig } from "./onpremconfig";
/**
 * DescribeLocationNfsResponse
 */
export declare class DescribeLocationNfsResponse extends SpeakeasyBase {
    creationTime?: Date;
    locationArn?: string;
    locationUri?: string;
    mountOptions?: NfsMountOptions;
    /**
     * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
     */
    onPremConfig?: OnPremConfig;
}
