import { SpeakeasyBase } from "../../../internal/utils";
import { FilterActionEnum } from "./filteractionenum";
import { FilterCriteria } from "./filtercriteria";
/**
 * Details about a filter.
 */
export declare class Filter extends SpeakeasyBase {
    action: FilterActionEnum;
    arn: string;
    createdAt: Date;
    criteria: FilterCriteria;
    description?: string;
    name: string;
    ownerId: string;
    reason?: string;
    tags?: Record<string, string>;
    updatedAt: Date;
}
