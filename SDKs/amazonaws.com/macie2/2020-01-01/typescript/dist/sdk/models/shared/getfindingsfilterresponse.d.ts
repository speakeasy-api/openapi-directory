import { SpeakeasyBase } from "../../../internal/utils";
import { FindingCriteria } from "./findingcriteria";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";
/**
 * Success
 */
export declare class GetFindingsFilterResponse extends SpeakeasyBase {
    action?: FindingsFilterActionEnum;
    arn?: string;
    description?: string;
    findingCriteria?: FindingCriteria;
    id?: string;
    name?: string;
    position?: number;
    tags?: Record<string, string>;
}
