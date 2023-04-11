import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This object determines if a user is a member of a portfolio.
 */
export declare class PortfolioMemberships {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a portfolio membership
     *
     * @remarks
     * Returns the complete portfolio record for a single portfolio membership.
     */
    getPortfolioMembership(req: operations.GetPortfolioMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipResponse>;
    /**
     * Get multiple portfolio memberships
     *
     * @remarks
     * Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
     */
    getPortfolioMemberships(req: operations.GetPortfolioMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipsResponse>;
    /**
     * Get memberships from a portfolio
     *
     * @remarks
     * Returns the compact portfolio membership records for the portfolio.
     */
    getPortfolioMembershipsForPortfolio(req: operations.GetPortfolioMembershipsForPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioMembershipsForPortfolioResponse>;
}
