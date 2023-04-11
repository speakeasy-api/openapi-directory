import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes a standby WorkSpace.
 */
export declare class StandbyWorkspace extends SpeakeasyBase {
    directoryId: string;
    primaryWorkspaceId: string;
    tags?: Tag[];
    volumeEncryptionKey?: string;
}
