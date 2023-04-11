import { SpeakeasyBase } from "../../../internal/utils";
import { SmbVersionEnum } from "./smbversionenum";
/**
 * Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server.
 */
export declare class SmbMountOptions extends SpeakeasyBase {
    version?: SmbVersionEnum;
}
