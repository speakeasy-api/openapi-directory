import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the scaling configuration of an Aurora Serverless v2 DB cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html">Using Amazon Aurora Serverless v2</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare class ServerlessV2ScalingConfiguration extends SpeakeasyBase {
    maxCapacity?: number;
    minCapacity?: number;
}
