import { SpeakeasyBase } from "../../../internal/utils";
import { DelegationStatusEnum } from "./delegationstatusenum";
/**
 *  The metadata that's associated with the delegation.
 */
export declare class DelegationMetadata extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    controlSetName?: string;
    creationTime?: Date;
    id?: string;
    roleArn?: string;
    status?: DelegationStatusEnum;
}
