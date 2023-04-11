import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Reports of communication costs by corporations and membership organizations from the FEC [F7 forms](https://www.fec.gov/pdf/forms/fecform7.pdf).
 */
export declare class CommunicationCost {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * 52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.
     *
     */
    getCommunicationCosts(req: operations.GetCommunicationCostsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationCostsResponse>;
    /**
     * Communication cost aggregated by candidate ID and committee ID.
     */
    getCommunicationCostsAggregates(req: operations.GetCommunicationCostsAggregatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationCostsAggregatesResponse>;
    /**
     * Communication cost aggregated by candidate ID and committee ID.
     */
    getCommunicationCostsByCandidate(req: operations.GetCommunicationCostsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationCostsByCandidateResponse>;
    /**
     *
     * Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.
     *
     */
    getCommunicationCostsTotalsByCandidate(req: operations.GetCommunicationCostsTotalsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunicationCostsTotalsByCandidateResponse>;
}
