import { SpeakeasyBase } from "../../../internal/utils";
import { FsxProtocolNfs } from "./fsxprotocolnfs";
import { FsxProtocolSmb } from "./fsxprotocolsmb";
/**
 * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
 */
export declare class FsxProtocol extends SpeakeasyBase {
    nfs?: FsxProtocolNfs;
    smb?: FsxProtocolSmb;
}
