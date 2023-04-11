import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://macie.{region}.amazonaws.com", "https://macie.{region}.amazonaws.com", "http://macie.{region}.amazonaws.com.cn", "https://macie.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon Macie Classic</fullname> <p>Amazon Macie Classic has been discontinued and is no longer available.</p> <p>A new Amazon Macie is now available with significant design improvements and additional features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/macie/} - Amazon Web Services documentation
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
     * (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
     */
    associateMemberAccount(req: operations.AssociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberAccountResponse>;
    /**
     * (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
     */
    associateS3Resources(req: operations.AssociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssociateS3ResourcesResponse>;
    /**
     * (Discontinued) Removes the specified member account from Amazon Macie Classic.
     */
    disassociateMemberAccount(req: operations.DisassociateMemberAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberAccountResponse>;
    /**
     * (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
     */
    disassociateS3Resources(req: operations.DisassociateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateS3ResourcesResponse>;
    /**
     * (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
     */
    listMemberAccounts(req: operations.ListMemberAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberAccountsResponse>;
    /**
     * (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account.
     */
    listS3Resources(req: operations.ListS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListS3ResourcesResponse>;
    /**
     * (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
     */
    updateS3Resources(req: operations.UpdateS3ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateS3ResourcesResponse>;
}
