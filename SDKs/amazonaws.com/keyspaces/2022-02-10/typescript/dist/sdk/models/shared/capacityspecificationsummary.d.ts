import { SpeakeasyBase } from "../../../internal/utils";
import { ThroughputModeEnum } from "./throughputmodeenum";
/**
 * <p>The read/write throughput capacity mode for a table. The options are:</p> <ul> <li> <p> <code>throughputMode:PAY_PER_REQUEST</code> and </p> </li> <li> <p> <code>throughputMode:PROVISIONED</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html">Read/write capacity modes</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 */
export declare class CapacitySpecificationSummary extends SpeakeasyBase {
    lastUpdateToPayPerRequestTimestamp?: Date;
    readCapacityUnits?: number;
    throughputMode: ThroughputModeEnum;
    writeCapacityUnits?: number;
}
