import { ActionNotificationExportResults } from "./actionnotificationexportresults";
import { ActionNotificationExports } from "./actionnotificationexports";
import { ActionWebhookFailures } from "./actionwebhookfailures";
import { ApiKey } from "./apikey";
import { ApiKeys } from "./apikeys";
import { Apps } from "./apps";
import { As2IncomingMessages } from "./as2incomingmessages";
import { As2OutgoingMessages } from "./as2outgoingmessages";
import { As2Partners } from "./as2partners";
import { As2Stations } from "./as2stations";
import { AutomationRuns } from "./automationruns";
import { Automations } from "./automations";
import { BandwidthSnapshots } from "./bandwidthsnapshots";
import { Behaviors } from "./behaviors";
import { BundleDownloads } from "./bundledownloads";
import { BundleNotifications } from "./bundlenotifications";
import { BundleRecipients } from "./bundlerecipients";
import { BundleRegistrations } from "./bundleregistrations";
import { Bundles } from "./bundles";
import { Clickwraps } from "./clickwraps";
import { DnsRecords } from "./dnsrecords";
import { ExternalEvents } from "./externalevents";
import { FileActions } from "./fileactions";
import { FileCommentReactions } from "./filecommentreactions";
import { FileComments } from "./filecomments";
import { FileMigrations } from "./filemigrations";
import { Files } from "./files";
import { Folders } from "./folders";
import { FormFieldSets } from "./formfieldsets";
import { Groups } from "./groups";
import { GroupUsers } from "./groupusers";
import { History } from "./history";
import { HistoryExportResults } from "./historyexportresults";
import { HistoryExports } from "./historyexports";
import { InboxRecipients } from "./inboxrecipients";
import { InboxRegistrations } from "./inboxregistrations";
import { InboxUploads } from "./inboxuploads";
import { Invoices } from "./invoices";
import { IpAddresses } from "./ipaddresses";
import { Locks } from "./locks";
import { MessageCommentReactions } from "./messagecommentreactions";
import { MessageComments } from "./messagecomments";
import { MessageReactions } from "./messagereactions";
import { Messages } from "./messages";
import { Notifications } from "./notifications";
import { Payments } from "./payments";
import { Permissions } from "./permissions";
import { Priorities } from "./priorities";
import { Projects } from "./projects";
import { PublicKeys } from "./publickeys";
import { RemoteBandwidthSnapshots } from "./remotebandwidthsnapshots";
import { RemoteServers } from "./remoteservers";
import { Requests } from "./requests";
import { Sessions } from "./sessions";
import { SettingsChanges } from "./settingschanges";
import { SftpHostKeys } from "./sftphostkeys";
import { Site } from "./site";
import { SsoStrategies } from "./ssostrategies";
import { Styles } from "./styles";
import { UsageDailySnapshots } from "./usagedailysnapshots";
import { UsageSnapshots } from "./usagesnapshots";
import { User } from "./user";
import { UserCipherUses } from "./usercipheruses";
import { UserRequests } from "./userrequests";
import { Users } from "./users";
import { WebhookTests } from "./webhooktests";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//app.files.com/api/rest/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    /**
     * Operations about action_notification_export_results
     */
    actionNotificationExportResults: ActionNotificationExportResults;
    /**
     * Operations about action_notification_exports
     */
    actionNotificationExports: ActionNotificationExports;
    /**
     * Operations about action_webhook_failures
     */
    actionWebhookFailures: ActionWebhookFailures;
    /**
     * Operations about api_keys
     */
    apiKey: ApiKey;
    /**
     * Operations about api_keys
     */
    apiKeys: ApiKeys;
    /**
     * Operations about apps
     */
    apps: Apps;
    /**
     * Operations about as2_incoming_messages
     */
    as2IncomingMessages: As2IncomingMessages;
    /**
     * Operations about as2_outgoing_messages
     */
    as2OutgoingMessages: As2OutgoingMessages;
    /**
     * Operations about as2_partners
     */
    as2Partners: As2Partners;
    /**
     * Operations about as2_stations
     */
    as2Stations: As2Stations;
    /**
     * Operations about automation_runs
     */
    automationRuns: AutomationRuns;
    /**
     * Operations about automations
     */
    automations: Automations;
    /**
     * Operations about bandwidth_snapshots
     */
    bandwidthSnapshots: BandwidthSnapshots;
    /**
     * Operations about behaviors
     */
    behaviors: Behaviors;
    /**
     * Operations about bundle_downloads
     */
    bundleDownloads: BundleDownloads;
    /**
     * Operations about bundle_notifications
     */
    bundleNotifications: BundleNotifications;
    /**
     * Operations about bundle_recipients
     */
    bundleRecipients: BundleRecipients;
    /**
     * Operations about bundle_registrations
     */
    bundleRegistrations: BundleRegistrations;
    /**
     * Operations about bundles
     */
    bundles: Bundles;
    /**
     * Operations about clickwraps
     */
    clickwraps: Clickwraps;
    /**
     * Operations about dns_records
     */
    dnsRecords: DnsRecords;
    /**
     * Operations about external_events
     */
    externalEvents: ExternalEvents;
    /**
     * Operations about file_actions
     */
    fileActions: FileActions;
    /**
     * Operations about file_comment_reactions
     */
    fileCommentReactions: FileCommentReactions;
    /**
     * Operations about file_comments
     */
    fileComments: FileComments;
    /**
     * Operations about file_migrations
     */
    fileMigrations: FileMigrations;
    /**
     * Operations about files
     */
    files: Files;
    /**
     * Operations about folders
     */
    folders: Folders;
    /**
     * Operations about form_field_sets
     */
    formFieldSets: FormFieldSets;
    /**
     * Operations about group_users
     */
    groupUsers: GroupUsers;
    /**
     * Operations about groups
     */
    groups: Groups;
    /**
     * Operations about histories
     */
    history: History;
    /**
     * Operations about history_export_results
     */
    historyExportResults: HistoryExportResults;
    /**
     * Operations about history_exports
     */
    historyExports: HistoryExports;
    /**
     * Operations about inbox_recipients
     */
    inboxRecipients: InboxRecipients;
    /**
     * Operations about inbox_registrations
     */
    inboxRegistrations: InboxRegistrations;
    /**
     * Operations about inbox_uploads
     */
    inboxUploads: InboxUploads;
    /**
     * Operations about invoices
     */
    invoices: Invoices;
    /**
     * Operations about ip_addresses
     */
    ipAddresses: IpAddresses;
    /**
     * Operations about locks
     */
    locks: Locks;
    /**
     * Operations about message_comment_reactions
     */
    messageCommentReactions: MessageCommentReactions;
    /**
     * Operations about message_comments
     */
    messageComments: MessageComments;
    /**
     * Operations about message_reactions
     */
    messageReactions: MessageReactions;
    /**
     * Operations about messages
     */
    messages: Messages;
    /**
     * Operations about notifications
     */
    notifications: Notifications;
    /**
     * Operations about payments
     */
    payments: Payments;
    /**
     * Operations about permissions
     */
    permissions: Permissions;
    /**
     * Operations about priorities
     */
    priorities: Priorities;
    /**
     * Operations about projects
     */
    projects: Projects;
    /**
     * Operations about public_keys
     */
    publicKeys: PublicKeys;
    /**
     * Operations about remote_bandwidth_snapshots
     */
    remoteBandwidthSnapshots: RemoteBandwidthSnapshots;
    /**
     * Operations about remote_servers
     */
    remoteServers: RemoteServers;
    /**
     * Operations about requests
     */
    requests: Requests;
    /**
     * Operations about sessions
     */
    sessions: Sessions;
    /**
     * Operations about settings_changes
     */
    settingsChanges: SettingsChanges;
    /**
     * Operations about sftp_host_keys
     */
    sftpHostKeys: SftpHostKeys;
    /**
     * Operations about sites
     */
    site: Site;
    /**
     * Operations about sso_strategies
     */
    ssoStrategies: SsoStrategies;
    /**
     * Operations about styles
     */
    styles: Styles;
    /**
     * Operations about usage_daily_snapshots
     */
    usageDailySnapshots: UsageDailySnapshots;
    /**
     * Operations about usage_snapshots
     */
    usageSnapshots: UsageSnapshots;
    /**
     * Operations about users
     */
    user: User;
    /**
     * Operations about user_cipher_uses
     */
    userCipherUses: UserCipherUses;
    /**
     * Operations about user_requests
     */
    userRequests: UserRequests;
    /**
     * Operations about users
     */
    users: Users;
    /**
     * Operations about webhook_tests
     */
    webhookTests: WebhookTests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
