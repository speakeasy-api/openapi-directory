import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationFileFormatEnum } from "./destinationfileformatenum";
/**
 * Describes the destination options for a flow log.
 */
export declare class DestinationOptionsRequest extends SpeakeasyBase {
    fileFormat?: DestinationFileFormatEnum;
    hiveCompatiblePartitions?: boolean;
    perHourPartition?: boolean;
}
