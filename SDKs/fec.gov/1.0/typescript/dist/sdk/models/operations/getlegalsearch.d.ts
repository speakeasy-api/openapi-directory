import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetLegalSearchAoCategoryEnum {
    F = "F",
    V = "V",
    D = "D",
    R = "R",
    W = "W",
    C = "C",
    S = "S"
}
export declare enum GetLegalSearchAoRequestorTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Fifteen = "15",
    Sixteen = "16"
}
export declare enum GetLegalSearchCaseDocCategoryIDEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
export declare class GetLegalSearchRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Admin fine committee ID
     *
     */
    afCommitteeId?: string;
    /**
     *
     * @remarks
     * Final Determination fine amount
     *
     */
    afFdFineAmount?: number;
    /**
     *
     * @remarks
     * The latest Final Determination date
     *
     */
    afMaxFdDate?: Date;
    /**
     *
     * @remarks
     * The latest Reason to Believe date
     *
     */
    afMaxRtbDate?: Date;
    /**
     *
     * @remarks
     * The earliest Final Determination date
     *
     */
    afMinFdDate?: Date;
    /**
     *
     * @remarks
     * The earliest Reason to Believe date
     *
     */
    afMinRtbDate?: Date;
    /**
     *
     * @remarks
     * Admin fine committee name
     *
     */
    afName?: string[];
    /**
     *
     * @remarks
     * Admin fine report year
     *
     */
    afReportYear?: string;
    /**
     *
     * @remarks
     * Reason to Believe fine amount
     *
     */
    afRtbFineAmount?: number;
    /**
     *
     * @remarks
     * Category of the document
     *
     */
    aoCategory?: GetLegalSearchAoCategoryEnum[];
    /**
     *
     * @remarks
     * Require all citations to be in document (default behavior is any)
     *
     */
    aoCitationRequireAll?: boolean;
    /**
     *
     * @remarks
     * Name of commenter or representative
     *
     */
    aoEntityName?: string[];
    /**
     *
     * @remarks
     * AO is pending
     *
     */
    aoIsPending?: boolean;
    /**
     *
     * @remarks
     * Latest issue date of advisory opinion
     *
     */
    aoMaxIssueDate?: Date;
    /**
     *
     * @remarks
     * Latest request date of advisory opinion
     *
     */
    aoMaxRequestDate?: Date;
    /**
     *
     * @remarks
     * Earliest issue date of advisory opinion
     *
     */
    aoMinIssueDate?: Date;
    /**
     *
     * @remarks
     * Earliest request date of advisory opinion
     *
     */
    aoMinRequestDate?: Date;
    /**
     *
     * @remarks
     * Force advisory opinion name
     *
     */
    aoName?: string[];
    /**
     *
     * @remarks
     * Force advisory opinion number
     *
     */
    aoNo?: string[];
    /**
     *
     * @remarks
     * Regulatory citations
     *
     */
    aoRegulatoryCitation?: string[];
    /**
     *
     * @remarks
     * The requestor of the advisory opinion
     *
     */
    aoRequestor?: string;
    /**
     *
     * @remarks
     * Code of the advisory opinion requestor type.
     *
     */
    aoRequestorType?: GetLegalSearchAoRequestorTypeEnum[];
    /**
     *
     * @remarks
     * Status of AO (pending, withdrawn, or final)
     *
     */
    aoStatus?: string;
    /**
     *
     * @remarks
     * Statutory citations
     *
     */
    aoStatutoryCitation?: string[];
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * Require all citations to be in document (default behavior is any)
     *
     */
    caseCitationRequireAll?: boolean;
    /**
     *
     * @remarks
     * Cases dispositions
     *
     */
    caseDispositions?: string[];
    /**
     * Select one or more case_doc_category_id to filter by corresponding CASE_DOCUMENT_CATEGORY:
     *
     * @remarks
     *         - 1 - Conciliation Agreements
     *         - 2 - Complaint, Responses, Designation of Counsel and Extensions of Timee
     *         - 3 - General Counsel Reports, Briefs, Notifications and Responses
     *         - 4 - Certifications
     *         - 5 - Civil Penalties, Disgorgements and Other Payments
     *         - 6 - Statements of Reasons
     *
     */
    caseDocCategoryId?: GetLegalSearchCaseDocCategoryIDEnum[];
    /**
     *
     * @remarks
     * Cases election cycles
     *
     */
    caseElectionCycles?: number;
    /**
     *
     * @remarks
     * The latest date closed of case
     *
     */
    caseMaxCloseDate?: Date;
    /**
     *
     * @remarks
     * The latest date opened of case
     *
     */
    caseMaxOpenDate?: Date;
    /**
     *
     * @remarks
     * The earliest date closed of case
     *
     */
    caseMinCloseDate?: Date;
    /**
     *
     * @remarks
     * The earliest date opened of case
     *
     */
    caseMinOpenDate?: Date;
    /**
     *
     * @remarks
     * Enforcement matter case number
     *
     */
    caseNo?: string[];
    /**
     *
     * @remarks
     * Regulatory citations
     *
     */
    caseRegulatoryCitation?: string[];
    /**
     *
     * @remarks
     * Cases respondents
     *
     */
    caseRespondents?: string;
    /**
     *
     * @remarks
     * Statutory citations
     *
     */
    caseStatutoryCitation?: string[];
    /**
     *
     * @remarks
     * Get results starting from this index
     *
     */
    fromHit?: number;
    /**
     *
     * @remarks
     * Number of results to return (max 10)
     *
     */
    hitsReturned?: number;
    /**
     *
     * @remarks
     * Type of MUR : current or archived
     *
     */
    murType?: string;
    /**
     *
     * @remarks
     * Text to search legal documents for
     *
     */
    q?: string;
    /**
     *
     * @remarks
     * Provide a field to sort by. Use `-` for descending order. ex: `-case_no`
     *
     */
    sort?: string;
    /**
     * Legal Document type to refine search by
     *
     * @remarks
     *     - statutes
     *     - regulations
     *     - advisory_opinions
     *     - murs
     *     - admin_fines
     *
     */
    type?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJSONAdminFinesDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdminFines extends SpeakeasyBase {
    challengeOutcome?: string;
    challengeReceiptDate?: Date;
    checkAmount?: number;
    commissionVotes?: GetLegalSearchDefaultApplicationJSONAdminFinesCommissionVotes[];
    committeeId?: string;
    docId?: string;
    documentHighlights?: Record<string, any>;
    documents?: GetLegalSearchDefaultApplicationJSONAdminFinesDocuments[];
    finalDeterminationAmount?: number;
    finalDeterminationDate?: Date;
    highlights?: string[];
    name?: string;
    no?: string;
    petitionCourtDecisionDate?: Date;
    petitionCourtFilingDate?: Date;
    reasonToBelieveActionDate?: Date;
    reasonToBelieveFineAmount?: number;
    reportType?: string;
    reportYear?: string;
    treasuryReferralAmount?: number;
    treasuryReferralDate?: Date;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations extends SpeakeasyBase {
    text?: string;
    title?: string;
    type?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrsDispositions extends SpeakeasyBase {
    citations?: GetLegalSearchDefaultApplicationJSONAdrsDispositionsCitations[];
    disposition?: string;
    penalty?: number;
    respondent?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrsDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrsParticipants extends SpeakeasyBase {
    citations?: Record<string, any>;
    name?: string;
    role?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdrs extends SpeakeasyBase {
    closeDate?: Date;
    commissionVotes?: GetLegalSearchDefaultApplicationJSONAdrsCommissionVotes[];
    dispositions?: GetLegalSearchDefaultApplicationJSONAdrsDispositions[];
    docId?: string;
    documentHighlights?: Record<string, any>;
    documents?: GetLegalSearchDefaultApplicationJSONAdrsDocuments[];
    electionCycles?: number;
    highlights?: string[];
    name?: string;
    no?: string;
    openDate?: Date;
    participants?: GetLegalSearchDefaultApplicationJSONAdrsParticipants[];
    respondents?: string[];
    subjects?: string[];
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations extends SpeakeasyBase {
    name?: string;
    no?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy extends SpeakeasyBase {
    name?: string;
    no?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments extends SpeakeasyBase {
    category?: string;
    date?: Date;
    description?: string;
    documentId?: number;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities extends SpeakeasyBase {
    name?: string;
    role?: string;
    type?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations extends SpeakeasyBase {
    part?: number;
    section?: number;
    title?: number;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations extends SpeakeasyBase {
    section?: string;
    title?: number;
}
export declare class GetLegalSearchDefaultApplicationJSONAdvisoryOpinions extends SpeakeasyBase {
    aoCitations?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAoCitations[];
    aosCitedBy?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsAosCitedBy[];
    commenterNames?: string[];
    documentHighlights?: Record<string, any>;
    documents?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsDocuments[];
    entities?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsEntities[];
    highlights?: string[];
    isPending?: boolean;
    issueDate?: Date;
    name?: string;
    no?: string;
    regulatoryCitations?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsRegulatoryCitations[];
    representativeNames?: string[];
    requestDate?: Date;
    requestorNames?: string[];
    requestorTypes?: string[];
    status?: string;
    statutoryCitations?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinionsStatutoryCitations[];
    summary?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONMursCommissionVotes extends SpeakeasyBase {
    action?: string;
    voteDate?: Date;
}
export declare class GetLegalSearchDefaultApplicationJSONMursDispositionsCitations extends SpeakeasyBase {
    text?: string;
    title?: string;
    type?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONMursDispositions extends SpeakeasyBase {
    citations?: GetLegalSearchDefaultApplicationJSONMursDispositionsCitations[];
    disposition?: string;
    penalty?: number;
    respondent?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONMursDocuments extends SpeakeasyBase {
    category?: string;
    description?: string;
    documentDate?: Date;
    documentId?: number;
    length?: number;
    url?: string;
}
export declare enum GetLegalSearchDefaultApplicationJSONMursMurTypeEnum {
    Current = "current",
    Archived = "archived"
}
export declare class GetLegalSearchDefaultApplicationJSONMursParticipants extends SpeakeasyBase {
    citations?: Record<string, any>;
    name?: string;
    role?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONMurs extends SpeakeasyBase {
    closeDate?: Date;
    commissionVotes?: GetLegalSearchDefaultApplicationJSONMursCommissionVotes[];
    dispositions?: GetLegalSearchDefaultApplicationJSONMursDispositions[];
    docId?: string;
    documentHighlights?: Record<string, any>;
    documents?: GetLegalSearchDefaultApplicationJSONMursDocuments[];
    electionCycles?: number;
    highlights?: string[];
    murType?: GetLegalSearchDefaultApplicationJSONMursMurTypeEnum;
    name?: string;
    no?: string;
    openDate?: Date;
    participants?: GetLegalSearchDefaultApplicationJSONMursParticipants[];
    respondents?: string[];
    subjects?: string[];
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONRegulations extends SpeakeasyBase {
    docId?: string;
    documentHighlights?: Record<string, any>;
    highlights?: string[];
    name?: string;
    no?: string;
    url?: string;
}
export declare class GetLegalSearchDefaultApplicationJSONStatutes extends SpeakeasyBase {
    chapter?: string;
    docId?: string;
    documentHighlights?: Record<string, any>;
    highlights?: string[];
    name?: string;
    no?: string;
    title?: string;
    url?: string;
}
/**
 * Legal search results
 */
export declare class GetLegalSearchDefaultApplicationJSON extends SpeakeasyBase {
    adminFines?: GetLegalSearchDefaultApplicationJSONAdminFines[];
    adrs?: GetLegalSearchDefaultApplicationJSONAdrs[];
    advisoryOpinions?: GetLegalSearchDefaultApplicationJSONAdvisoryOpinions[];
    murs?: GetLegalSearchDefaultApplicationJSONMurs[];
    regulations?: GetLegalSearchDefaultApplicationJSONRegulations[];
    statutes?: GetLegalSearchDefaultApplicationJSONStatutes[];
    /**
     * Total number of Admin Fines matching the search criteria
     */
    totalAdminFines?: number;
    /**
     * Total number of ADRs matching the search criteria
     */
    totalAdrs?: number;
    /**
     * Total number of Advisory Opinions matching the search criteria
     */
    totalAdvisoryOpinions?: number;
    /**
     * Total number of legal documents matching the search criteria
     */
    totalAll?: number;
    /**
     * Total number of MURs matching the search criteria
     */
    totalMurs?: number;
    /**
     * Total number of Regulations matching the search criteria
     */
    totalRegulations?: number;
    /**
     * Total number of Statutes matching the search criteria
     */
    totalStatutes?: number;
}
export declare class GetLegalSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Legal search results
     */
    getLegalSearchDefaultApplicationJSONObject?: GetLegalSearchDefaultApplicationJSON;
}
