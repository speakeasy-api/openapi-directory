import { SpeakeasyBase } from "../../../internal/utils";
import { SmbMountOptions } from "./smbmountoptions";
export declare class UpdateLocationSmbRequest extends SpeakeasyBase {
    agentArns?: string[];
    domain?: string;
    locationArn: string;
    /**
     * Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.
     */
    mountOptions?: SmbMountOptions;
    password?: string;
    subdirectory?: string;
    user?: string;
}
