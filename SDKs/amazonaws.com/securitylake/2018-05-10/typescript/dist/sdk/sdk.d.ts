import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://securitylake.{region}.amazonaws.com", "https://securitylake.{region}.amazonaws.com", "http://securitylake.{region}.amazonaws.com.cn", "https://securitylake.{region}.amazonaws.com.cn"];
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
 * <note> <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a>("Betas and Previews").</p> </note> <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to automatically centralize security data from cloud, on-premises, and custom sources into a data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations is an account management service that lets you consolidate multiple Amazon Web Services accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. Security Lake helps you analyze security data for a more complete understanding of your security posture across the entire organization. It can also help you improve the protection of your workloads, applications, and data.</p> <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you retain ownership over your data. </p> <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls from the Security Lake console and code calls to the Security Lake API operations. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail you can determine the request that was made to Security Lake, the IP address from which the request was made, who made the request, when it was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p> <p>Security Lake automates the collection of security-related log and event data from integrated Amazon Web Services and third-party services. It also helps you manage the lifecycle of data with customizable retention and replication settings. Security Lake converts ingested data into Apache Parquet format and a standard open-source schema called the Open Cybersecurity Schema Framework (OCSF).</p> <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for incident response and security data analytics.</p>
 *
 * @see {@link https://docs.aws.amazon.com/securitylake/} - Amazon Web Services documentation
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
     * <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API enables all Security Lake member accounts for all sources. Similarly, when you do not specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a service.</p> <p>You can use this API only to enable natively supported Amazon Web Services as a source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom source. </p>
     */
    createAwsLogSource(req: operations.CreateAwsLogSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateAwsLogSourceResponse>;
    /**
     * Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source in addition to an associated Glue table and an Glue crawler.
     */
    createCustomLogSource(req: operations.CreateCustomLogSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomLogSourceResponse>;
    /**
     * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to specify all Regions or specify the Regions where you want to enable Security Lake. To specify particular Regions, use the <code>Regions</code> parameter and then configure these Regions using the <code>configurations</code> parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.</p> <p>When you enable Security Lake, it starts ingesting security data after the <code>CreateAwsLogSource</code> call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html">Amazon Security Lake User Guide</a>.</p>
     */
    createDatalake(req: operations.CreateDatalakeRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatalakeResponse>;
    /**
     * Automatically enables Amazon Security Lake for new member accounts in your organization. Security Lake is not automatically enabled for any existing member accounts in your organization.
     */
    createDatalakeAutoEnable(req: operations.CreateDatalakeAutoEnableRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatalakeAutoEnableResponse>;
    /**
     * Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
     */
    createDatalakeDelegatedAdmin(req: operations.CreateDatalakeDelegatedAdminRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatalakeDelegatedAdminResponse>;
    /**
     * Creates the specified notification subscription in Amazon Security Lake for the organization you specify.
     */
    createDatalakeExceptionsSubscription(req: operations.CreateDatalakeExceptionsSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatalakeExceptionsSubscriptionResponse>;
    /**
     * Creates a subscription permission for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.
     */
    createSubscriber(req: operations.CreateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriberResponse>;
    /**
     * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
     */
    createSubscriptionNotificationConfiguration(req: operations.CreateSubscriptionNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionNotificationConfigurationResponse>;
    /**
     * <p>Removes a natively supported Amazon Web Service as an Amazon Security Lake source. When you remove the source, Security Lake stops collecting data from that source, and subscribers can no longer consume new data from the source. Subscribers can still consume data that Security Lake collected from the source before disablement.</p> <p>You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts. At least one of the three dimensions is a mandatory input to this API. However, you can supply any combination of the three dimensions to this API. </p> <p>By default, a dimension refers to the entire set. This is overridden when you supply any one of the inputs. For instance, when you do not specify members, the API disables all Security Lake member accounts for sources. Similarly, when you do not specify Regions, Security Lake is disabled for all the Regions where Security Lake is available as a service.</p> <p>When you don't provide a dimension, Security Lake assumes that the missing dimension refers to the entire set. For example, if you don't provide specific accounts, the API applies to the entire set of accounts in your organization.</p>
     */
    deleteAwsLogSource(req: operations.DeleteAwsLogSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAwsLogSourceResponse>;
    /**
     * Removes a custom log source from Amazon Security Lake.
     */
    deleteCustomLogSource(req: operations.DeleteCustomLogSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomLogSourceResponse>;
    /**
     * <p>When you delete Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions. Also, this API automatically takes steps to remove the account from Security Lake . </p> <p>This operation disables security data collection from sources, deletes data stored, and stops making data accessible to subscribers. Security Lake also deletes all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. The <code>DeleteDatalake</code> operation does not delete the Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/disable-security-lake.html">Amazon Security Lake User Guide</a>.</p>
     */
    deleteDatalake(req: operations.DeleteDatalakeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatalakeResponse>;
    /**
     *  <code>DeleteDatalakeAutoEnable</code> removes automatic enablement of configuration settings for new member accounts (but keeps settings for the delegated administrator) from Amazon Security Lake. You must run this API using credentials of the delegated administrator. When you run this API, new member accounts that are added after the organization enables Security Lake won't contribute to the data lake.
     */
    deleteDatalakeAutoEnable(req: operations.DeleteDatalakeAutoEnableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatalakeAutoEnableResponse>;
    /**
     * Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.
     */
    deleteDatalakeDelegatedAdmin(req: operations.DeleteDatalakeDelegatedAdminRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatalakeDelegatedAdminResponse>;
    /**
     * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
     */
    deleteDatalakeExceptionsSubscription(req: operations.DeleteDatalakeExceptionsSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatalakeExceptionsSubscriptionResponse>;
    /**
     * Deletes the subscription permission for accounts that are already enabled in Amazon Security Lake. You can delete a subscriber and remove access to data in the current Amazon Web Services Region.
     */
    deleteSubscriber(req: operations.DeleteSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriberResponse>;
    /**
     * Deletes the specified notification subscription in Amazon Security Lake for the organization you specify.
     */
    deleteSubscriptionNotificationConfiguration(req: operations.DeleteSubscriptionNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionNotificationConfigurationResponse>;
    /**
     * Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether Security Lake is enabled for the current Region. This API does not take input parameters.
     */
    getDatalake(req: operations.GetDatalakeRequest, config?: AxiosRequestConfig): Promise<operations.GetDatalakeResponse>;
    /**
     * Retrieves the configuration that will be automatically set up for accounts added to the organization after the organization has onboarded to Amazon Security Lake. This API does not take input parameters.
     */
    getDatalakeAutoEnable(req: operations.GetDatalakeAutoEnableRequest, config?: AxiosRequestConfig): Promise<operations.GetDatalakeAutoEnableResponse>;
    /**
     * Retrieves the expiration period and time-to-live (TTL) for which the exception message will remain. Exceptions are stored by default, for 2 weeks from when a record was created in Amazon Security Lake. This API does not take input parameters.
     */
    getDatalakeExceptionsExpiry(req: operations.GetDatalakeExceptionsExpiryRequest, config?: AxiosRequestConfig): Promise<operations.GetDatalakeExceptionsExpiryResponse>;
    /**
     * Retrieves the details of exception notifications for the account in Amazon Security Lake.
     */
    getDatalakeExceptionsSubscription(req: operations.GetDatalakeExceptionsSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetDatalakeExceptionsSubscriptionResponse>;
    /**
     * Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from.
     */
    getDatalakeStatus(req: operations.GetDatalakeStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDatalakeStatusResponse>;
    /**
     * Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.
     */
    getSubscriber(req: operations.GetSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriberResponse>;
    /**
     * Lists the Amazon Security Lake exceptions that you can use to find the source of problems and fix them.
     */
    listDatalakeExceptions(req: operations.ListDatalakeExceptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatalakeExceptionsResponse>;
    /**
     * Retrieves the log sources in the current Amazon Web Services Region.
     */
    listLogSources(req: operations.ListLogSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListLogSourcesResponse>;
    /**
     * List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.
     */
    listSubscribers(req: operations.ListSubscribersRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribersResponse>;
    /**
     * Specifies where to store your security data and for how long. You can add a rollup Region to consolidate data from multiple Amazon Web Services Regions.
     */
    updateDatalake(req: operations.UpdateDatalakeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatalakeResponse>;
    /**
     * Update the expiration period for the exception message to your preferred time, and control the time-to-live (TTL) for the exception message to remain. Exceptions are stored by default for 2 weeks from when a record was created in Amazon Security Lake.
     */
    updateDatalakeExceptionsExpiry(req: operations.UpdateDatalakeExceptionsExpiryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatalakeExceptionsExpiryResponse>;
    /**
     * Updates the specified notification subscription in Amazon Security Lake for the organization you specify.
     */
    updateDatalakeExceptionsSubscription(req: operations.UpdateDatalakeExceptionsSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatalakeExceptionsSubscriptionResponse>;
    /**
     * Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from.
     */
    updateSubscriber(req: operations.UpdateSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriberResponse>;
    /**
     * Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.
     */
    updateSubscriptionNotificationConfiguration(req: operations.UpdateSubscriptionNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionNotificationConfigurationResponse>;
}
