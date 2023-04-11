import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Committees are entities that spend and raise money in an election. Their characteristics and relationships with candidates can change over time.
 *
 * @remarks
 *
 *  You might want to use filters or search endpoints to find the committee you're looking for. Then you can use other committee endpoints to explore information about the committee that interests you.
 *
 *  Financial information is organized by `committee_id`, so finding the committee you're interested in will lead you to more granular financial information.
 *
 *  The committee endpoints include all FEC filers, even if they aren't registered as a committee.
 *
 *  Officially, committees include the committees and organizations that file with the FEC. Several different types of organizations file financial reports with the FEC:
 *
 *  *Campaign committees authorized by particular candidates to raise and spend funds in their campaigns. Non-party committees (e.g., PACs), some of which may be sponsored by corporations, unions, trade or membership groups, etc. Political party committees at the national, state, and local levels. Groups and individuals making only independent expenditures Corporations, unions, and other organizations making internal communications*
 *
 *  The committee endpoints primarily use data from FEC registration Form 1 and Form 2.
 */
export declare class Committee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     *
     */
    getCandidateCandidateIdCommittees(req: operations.GetCandidateCandidateIdCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesResponse>;
    /**
     *
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
     */
    getCandidateCandidateIdCommitteesHistory(req: operations.GetCandidateCandidateIdCommitteesHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesHistoryResponse>;
    /**
     *
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
     */
    getCandidateCandidateIdCommitteesHistoryCycle(req: operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse>;
    /**
     *
     * This endpoint is useful for finding detailed information about a particular committee or
     * filer. Use the `committee_id` to find the most recent information about the committee.
     *
     */
    getCommitteeCommitteeId(req: operations.GetCommitteeCommitteeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdResponse>;
    /**
     *
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
     */
    getCommitteeCommitteeIdHistory(req: operations.GetCommitteeCommitteeIdHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdHistoryResponse>;
    /**
     *
     * Explore a filer's characteristics over time. This can be particularly useful if the
     * committees change treasurers, designation, or `committee_type`.
     *
     */
    getCommitteeCommitteeIdHistoryCycle(req: operations.GetCommitteeCommitteeIdHistoryCycleRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteeCommitteeIdHistoryCycleResponse>;
    /**
     *
     * Fetch basic information about committees and filers. Use parameters to filter for
     * particular characteristics.
     *
     *
     */
    getCommittees(req: operations.GetCommitteesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitteesResponse>;
}
