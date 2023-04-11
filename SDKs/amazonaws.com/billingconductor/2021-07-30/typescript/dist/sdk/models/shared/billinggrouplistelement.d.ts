import { SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupStatusEnum } from "./billinggroupstatusenum";
import { ComputationPreference } from "./computationpreference";
/**
 * A representation of a billing group.
 */
export declare class BillingGroupListElement extends SpeakeasyBase {
    arn?: string;
    /**
     *  The preferences and settings that will be used to compute the Amazon Web Services charges for a billing group.
     */
    computationPreference?: ComputationPreference;
    creationTime?: number;
    description?: string;
    lastModifiedTime?: number;
    name?: string;
    primaryAccountId?: string;
    size?: number;
    status?: BillingGroupStatusEnum;
    statusReason?: string;
}
