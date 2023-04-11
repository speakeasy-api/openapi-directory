import { SpeakeasyBase } from "../../../internal/utils";
import { LogAnomalyClass } from "./loganomalyclass";
/**
 *  A cluster of similar anomalous log events found within a log group.
 */
export declare class LogAnomalyShowcase extends SpeakeasyBase {
    logAnomalyClasses?: LogAnomalyClass[];
}
