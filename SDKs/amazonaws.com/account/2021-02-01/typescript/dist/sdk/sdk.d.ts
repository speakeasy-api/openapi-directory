import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://account.{region}.amazonaws.com", "https://account.{region}.amazonaws.com", "http://account.{region}.amazonaws.com.cn", "https://account.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Operations for Amazon Web Services Account Management
 *
 * @see {@link https://docs.aws.amazon.com/account/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
     */
    deleteAlternateContact(req: operations.DeleteAlternateContactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlternateContactResponse>;
    /**
     * Disables (opts-out) a particular Region for an account.
     */
    disableRegion(req: operations.DisableRegionRequest, config?: AxiosRequestConfig): Promise<operations.DisableRegionResponse>;
    /**
     * Enables (opts-in) a particular Region for an account.
     */
    enableRegion(req: operations.EnableRegionRequest, config?: AxiosRequestConfig): Promise<operations.EnableRegionResponse>;
    /**
     * <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
     */
    getAlternateContact(req: operations.GetAlternateContactRequest, config?: AxiosRequestConfig): Promise<operations.GetAlternateContactResponse>;
    /**
     * <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
     */
    getContactInformation(req: operations.GetContactInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetContactInformationResponse>;
    /**
     * Retrieves the opt-in status of a particular Region.
     */
    getRegionOptStatus(req: operations.GetRegionOptStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionOptStatusResponse>;
    /**
     * Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter.
     */
    listRegions(req: operations.ListRegionsRequest, config?: AxiosRequestConfig): Promise<operations.ListRegionsResponse>;
    /**
     * <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
     */
    putAlternateContact(req: operations.PutAlternateContactRequest, config?: AxiosRequestConfig): Promise<operations.PutAlternateContactResponse>;
    /**
     * <p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
     */
    putContactInformation(req: operations.PutContactInformationRequest, config?: AxiosRequestConfig): Promise<operations.PutContactInformationResponse>;
}
