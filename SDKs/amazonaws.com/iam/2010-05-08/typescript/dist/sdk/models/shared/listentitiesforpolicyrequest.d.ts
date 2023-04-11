import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { PolicyUsageTypeEnum } from "./policyusagetypeenum";
export declare class ListEntitiesForPolicyRequest extends SpeakeasyBase {
    entityFilter?: EntityTypeEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    policyArn: string;
    policyUsageFilter?: PolicyUsageTypeEnum;
}
