import { SpeakeasyBase } from "../../../internal/utils";
import { ThroughputModeEnum } from "./throughputmodeenum";
/**
 * <p>Amazon Keyspaces has two read/write capacity modes for processing reads and writes on your tables: </p> <ul> <li> <p>On-demand (default)</p> </li> <li> <p>Provisioned</p> </li> </ul> <p>The read/write capacity mode that you choose controls how you are charged for read and write throughput and how table throughput capacity is managed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 */
export declare class CapacitySpecification extends SpeakeasyBase {
    readCapacityUnits?: number;
    throughputMode: ThroughputModeEnum;
    writeCapacityUnits?: number;
}
