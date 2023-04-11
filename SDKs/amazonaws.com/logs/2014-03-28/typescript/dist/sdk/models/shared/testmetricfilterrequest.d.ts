import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestMetricFilterRequest extends SpeakeasyBase {
    /**
     * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
     */
    filterPattern: string;
    logEventMessages: string[];
}
