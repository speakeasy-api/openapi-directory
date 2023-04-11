import { SpeakeasyBase } from "../../../internal/utils";
import { LockConfiguration } from "./lockconfiguration";
import { LockStateEnum } from "./lockstateenum";
import { ResourceTag } from "./resourcetag";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { RetentionPeriod } from "./retentionperiod";
import { RuleStatusEnum } from "./rulestatusenum";
/**
 * Success
 */
export declare class UnlockRuleResponse extends SpeakeasyBase {
    description?: string;
    identifier?: string;
    lockConfiguration?: LockConfiguration;
    lockEndTime?: Date;
    lockState?: LockStateEnum;
    resourceTags?: ResourceTag[];
    resourceType?: ResourceTypeEnum;
    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    retentionPeriod?: RetentionPeriod;
    status?: RuleStatusEnum;
}
