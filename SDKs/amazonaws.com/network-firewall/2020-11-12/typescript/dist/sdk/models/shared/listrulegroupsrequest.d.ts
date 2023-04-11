import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceManagedStatusEnum } from "./resourcemanagedstatusenum";
import { ResourceManagedTypeEnum } from "./resourcemanagedtypeenum";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
export declare class ListRuleGroupsRequest extends SpeakeasyBase {
    managedType?: ResourceManagedTypeEnum;
    maxResults?: number;
    nextToken?: string;
    scope?: ResourceManagedStatusEnum;
    type?: RuleGroupTypeEnum;
}
