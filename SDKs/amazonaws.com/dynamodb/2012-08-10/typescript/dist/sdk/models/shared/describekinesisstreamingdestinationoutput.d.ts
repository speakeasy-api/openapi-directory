import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisDataStreamDestination } from "./kinesisdatastreamdestination";
/**
 * Success
 */
export declare class DescribeKinesisStreamingDestinationOutput extends SpeakeasyBase {
    kinesisDataStreamDestinations?: KinesisDataStreamDestination[];
    tableName?: string;
}
