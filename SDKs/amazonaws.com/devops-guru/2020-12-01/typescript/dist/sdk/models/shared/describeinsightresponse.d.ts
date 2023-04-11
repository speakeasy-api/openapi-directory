import { SpeakeasyBase } from "../../../internal/utils";
import { ProactiveInsight } from "./proactiveinsight";
import { ReactiveInsight } from "./reactiveinsight";
/**
 * Success
 */
export declare class DescribeInsightResponse extends SpeakeasyBase {
    proactiveInsight?: ProactiveInsight;
    reactiveInsight?: ReactiveInsight;
}
