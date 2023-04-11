import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the scaling configuration of an Aurora Serverless v1 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare class ScalingConfiguration extends SpeakeasyBase {
    autoPause?: boolean;
    maxCapacity?: number;
    minCapacity?: number;
    secondsBeforeTimeout?: number;
    secondsUntilAutoPause?: number;
    timeoutAction?: string;
}
