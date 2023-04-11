import { SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";
export declare class CreateLocationFsxLustreRequest extends SpeakeasyBase {
    fsxFilesystemArn: string;
    securityGroupArns: string[];
    subdirectory?: string;
    tags?: TagListEntry[];
}
