import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The contract termination info
 */
export declare class TerminateContract extends SpeakeasyBase {
    /**
     * The termination reason, if your current contract is scheduled to be terminated.
     */
    contractTerminationReason?: string;
    /**
     * The contract termination reason type identifier, if your current contract is scheduled to be terminated. The value is based on the list of values /user/lov/ContractTerminationReason
     */
    contractTerminationReasonType: number;
}
