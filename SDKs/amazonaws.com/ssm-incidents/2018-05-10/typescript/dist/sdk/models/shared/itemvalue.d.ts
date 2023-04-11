import { SpeakeasyBase } from "../../../internal/utils";
import { PagerDutyIncidentDetail } from "./pagerdutyincidentdetail";
/**
 * Describes a related item.
 */
export declare class ItemValue extends SpeakeasyBase {
    arn?: string;
    metricDefinition?: string;
    pagerDutyIncidentDetail?: PagerDutyIncidentDetail;
    url?: string;
}
