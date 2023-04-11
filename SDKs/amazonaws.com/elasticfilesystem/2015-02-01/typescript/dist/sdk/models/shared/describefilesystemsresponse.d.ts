import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemDescription } from "./filesystemdescription";
/**
 * Success
 */
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    fileSystems?: FileSystemDescription[];
    marker?: string;
    nextMarker?: string;
}
