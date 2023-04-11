import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Success
 */
export declare class ReplicationConfigurationDescription extends SpeakeasyBase {
    creationTime: Date;
    destinations: Destination[];
    originalSourceFileSystemArn: string;
    sourceFileSystemArn: string;
    sourceFileSystemId: string;
    sourceFileSystemRegion: string;
}
