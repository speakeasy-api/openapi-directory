import { SpeakeasyBase } from "../../../internal/utils";
import { AutoExportPolicy } from "./autoexportpolicy";
import { NfsVersionEnum } from "./nfsversionenum";
/**
 * The configuration for a data repository association that links an Amazon File Cache resource to an NFS data repository.
 */
export declare class NFSDataRepositoryConfiguration extends SpeakeasyBase {
    autoExportPolicy?: AutoExportPolicy;
    dnsIps?: string[];
    version: NfsVersionEnum;
}
