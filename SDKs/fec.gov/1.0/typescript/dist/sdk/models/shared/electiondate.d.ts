import { SpeakeasyBase } from "../../../internal/utils";
export declare class ElectionDate extends SpeakeasyBase {
    activeElection?: boolean;
    /**
     * Date the record was created
     */
    createDate?: Date;
    /**
     * Date of election
     */
    electionDate?: Date;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    electionDistrict?: number;
    electionNotes?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    electionParty?: string;
    /**
     * US state or territory where a candidate runs for office
     */
    electionState?: string;
    electionTypeFull?: string;
    /**
     * Election type
     *
     * @remarks
     * Convention, Primary,
     * General, Special,
     * Runoff etc.
     *
     */
    electionTypeId?: string;
    /**
     * Year of election
     */
    electionYear?: number;
    /**
     * Federal office candidate runs for: H, S or P
     */
    officeSought?: string;
    primaryGeneralDate?: Date;
    /**
     * Date the record was updated
     */
    updateDate?: Date;
}
