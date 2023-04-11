import { SpeakeasyBase } from "../../../internal/utils";
import { NfsVersionEnum } from "./nfsversionenum";
/**
 * The configuration for an NFS data repository association (DRA) created during the creation of the Amazon File Cache resource.
 */
export declare class FileCacheNFSConfiguration extends SpeakeasyBase {
    dnsIps?: string[];
    version: NfsVersionEnum;
}
