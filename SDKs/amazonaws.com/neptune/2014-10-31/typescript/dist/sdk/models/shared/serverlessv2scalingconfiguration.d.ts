import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the scaling configuration of a Neptune Serverless DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-serverless-using.html">Using Amazon Neptune Serverless</a> in the <i>Amazon Neptune User Guide</i>.</p>
 */
export declare class ServerlessV2ScalingConfiguration extends SpeakeasyBase {
    maxCapacity?: number;
    minCapacity?: number;
}
