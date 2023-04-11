import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalMappingStatusEnum } from "./principalmappingstatusenum";
/**
 * Summary information on the processing of <code>PUT</code> and <code>DELETE</code> actions for mapping users to their groups.
 */
export declare class GroupOrderingIdSummary extends SpeakeasyBase {
    failureReason?: string;
    lastUpdatedAt?: Date;
    orderingId?: number;
    receivedAt?: Date;
    status?: PrincipalMappingStatusEnum;
}
