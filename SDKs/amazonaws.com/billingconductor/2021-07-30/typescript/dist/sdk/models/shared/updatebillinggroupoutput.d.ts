import { SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupStatusEnum } from "./billinggroupstatusenum";
/**
 * Success
 */
export declare class UpdateBillingGroupOutput extends SpeakeasyBase {
    arn?: string;
    description?: string;
    lastModifiedTime?: number;
    name?: string;
    pricingPlanArn?: string;
    primaryAccountId?: string;
    size?: number;
    status?: BillingGroupStatusEnum;
    statusReason?: string;
}
