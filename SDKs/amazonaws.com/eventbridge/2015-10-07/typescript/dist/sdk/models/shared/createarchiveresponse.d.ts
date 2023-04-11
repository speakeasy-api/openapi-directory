import { SpeakeasyBase } from "../../../internal/utils";
import { ArchiveStateEnum } from "./archivestateenum";
/**
 * Success
 */
export declare class CreateArchiveResponse extends SpeakeasyBase {
    archiveArn?: string;
    creationTime?: Date;
    state?: ArchiveStateEnum;
    stateReason?: string;
}
