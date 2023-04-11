import { SpeakeasyBase } from "../../../internal/utils";
import { FsxProtocol } from "./fsxprotocol";
import { TagListEntry } from "./taglistentry";
export declare class CreateLocationFsxOpenZfsRequest extends SpeakeasyBase {
    fsxFilesystemArn: string;
    protocol: FsxProtocol;
    securityGroupArns: string[];
    subdirectory?: string;
    tags?: TagListEntry[];
}
