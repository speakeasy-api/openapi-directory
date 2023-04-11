import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:
 *
 * @remarks
 *
 *  _The communication refers to a clearly identified federal candidate._
 *
 *  _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._
 *
 *  _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._
 */
export declare class Electioneering {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:
     *
     * _The communication refers to a clearly identified federal candidate._
     *
     * _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._
     *
     * _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._
     *
     */
    getElectioneering(req: operations.GetElectioneeringRequest, config?: AxiosRequestConfig): Promise<operations.GetElectioneeringResponse>;
    /**
     * Electioneering communications costs aggregates
     */
    getElectioneeringAggregates(req: operations.GetElectioneeringAggregatesRequest, config?: AxiosRequestConfig): Promise<operations.GetElectioneeringAggregatesResponse>;
    /**
     * Electioneering costs aggregated by candidate
     */
    getElectioneeringByCandidate(req: operations.GetElectioneeringByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetElectioneeringByCandidateResponse>;
    /**
     *
     * Total electioneering communications spent on candidates by cycle
     * or candidate election year
     *
     */
    getElectioneeringTotalsByCandidate(req: operations.GetElectioneeringTotalsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetElectioneeringTotalsByCandidateResponse>;
}
