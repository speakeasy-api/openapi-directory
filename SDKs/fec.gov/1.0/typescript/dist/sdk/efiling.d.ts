import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
 */
export declare class Efiling {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Basic information about electronic files coming into the FEC, posted as they are received.
     */
    getEfileFilings(req: operations.GetEfileFilingsRequest, config?: AxiosRequestConfig): Promise<operations.GetEfileFilingsResponse>;
    /**
     *
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
     */
    getEfileReportsHouseSenate(req: operations.GetEfileReportsHouseSenateRequest, config?: AxiosRequestConfig): Promise<operations.GetEfileReportsHouseSenateResponse>;
    /**
     *
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
     */
    getEfileReportsPacParty(req: operations.GetEfileReportsPacPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetEfileReportsPacPartyResponse>;
    /**
     *
     * Key financial data reported periodically by committees as they are reported. This feed includes summary
     * information from the the House F3 reports, the presidential F3p reports and the PAC and party
     * F3x reports.
     *
     * Generally, committees file reports on a quarterly or monthly basis, but
     * some must also submit a report 12 days before primary elections. Therefore, during the primary
     * season, the period covered by this file may be different for different committees. These totals
     * also incorporate any changes made by committees, if any report covering the period is amended.
     *
     * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
     * label these fields while conveying clear meaning to ensure accessibility for all users.
     *
     */
    getEfileReportsPresidential(req: operations.GetEfileReportsPresidentialRequest, config?: AxiosRequestConfig): Promise<operations.GetEfileReportsPresidentialResponse>;
}
