import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyScopeTypeEnum } from "./policyscopetypeenum";
import { PolicyUsageTypeEnum } from "./policyusagetypeenum";
export declare class ListPoliciesRequest extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
    onlyAttached?: boolean;
    pathPrefix?: string;
    policyUsageFilter?: PolicyUsageTypeEnum;
    scope?: PolicyScopeTypeEnum;
}
