import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommunicationCostByCandidate extends SpeakeasyBase {
    candidate?: string;
    candidateId?: string;
    candidateName?: string;
    committee?: string;
    committeeId?: string;
    committeeName?: string;
    count?: number;
    cycle?: number;
    /**
     * Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
     */
    supportOpposeIndicator: string;
    total?: number;
}
