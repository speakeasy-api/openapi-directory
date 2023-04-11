import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the App
 */
export declare enum AppEntityAppTypeEnum {
    SDK = "sdk",
    Sso = "sso",
    RemoteServer = "remote_server",
    FolderBehavior = "folder_behavior",
    ClientApp = "client_app",
    AppIntegration = "app_integration"
}
/**
 * Associated Folder Behavior type, if any
 */
export declare enum AppEntityFolderBehaviorTypeEnum {
    Webhook = "webhook",
    FileExpiration = "file_expiration",
    AutoEncrypt = "auto_encrypt",
    LockSubfolders = "lock_subfolders",
    StorageRegion = "storage_region",
    ServePublicly = "serve_publicly",
    CreateUserFolders = "create_user_folders",
    RemoteServerSync = "remote_server_sync",
    Inbox = "inbox",
    AppendTimestamp = "append_timestamp",
    LimitFileExtensions = "limit_file_extensions",
    LimitFileRegex = "limit_file_regex",
    AmazonSns = "amazon_sns",
    Watermark = "watermark",
    RemoteServerMount = "remote_server_mount",
    SlackWebhook = "slack_webhook",
    AutoDecrypt = "auto_decrypt",
    OverrideUploadFilename = "override_upload_filename"
}
/**
 * Associated Remote Server type, if any
 */
export declare enum AppEntityRemoteServerTypeEnum {
    Ftp = "ftp",
    Sftp = "sftp",
    S3 = "s3",
    GoogleCloudStorage = "google_cloud_storage",
    Webdav = "webdav",
    Wasabi = "wasabi",
    BackblazeB2 = "backblaze_b2",
    OneDrive = "one_drive",
    Rackspace = "rackspace",
    Box = "box",
    Dropbox = "dropbox",
    GoogleDrive = "google_drive",
    Azure = "azure",
    Sharepoint = "sharepoint",
    S3Compatible = "s3_compatible",
    AzureFiles = "azure_files",
    FilesAgent = "files_agent",
    Filebase = "filebase"
}
/**
 * Associated SSO Strategy type, if any
 */
export declare enum AppEntitySsoStrategyTypeEnum {
    Google = "google",
    Auth0 = "auth0",
    Okta = "okta",
    Atlassian = "atlassian",
    Azure = "azure",
    Box = "box",
    Dropbox = "dropbox",
    Slack = "slack",
    UnusedUbuntu = "_unused_ubuntu",
    Onelogin = "onelogin",
    Saml = "saml",
    Idaptive = "idaptive",
    Ldap = "ldap",
    Scim = "scim"
}
/**
 * List Apps
 */
export declare class AppEntity extends SpeakeasyBase {
    /**
     * The type of the App
     */
    appType?: AppEntityAppTypeEnum;
    /**
     * Collection of named links to documentation
     */
    documentationLinks?: Record<string, any>;
    /**
     * Long form description of the App
     */
    extendedDescription?: string;
    /**
     * Link to external homepage
     */
    externalHomepageUrl?: string;
    /**
     * Is featured on the App listing?
     */
    featured?: boolean;
    /**
     * Associated Folder Behavior type, if any
     */
    folderBehaviorType?: AppEntityFolderBehaviorTypeEnum;
    /**
     * App icon
     */
    iconUrl?: string;
    /**
     * Logo thumbnail for the App
     */
    logoThumbnailUrl?: string;
    /**
     * Full size logo for the App
     */
    logoUrl?: string;
    /**
     * Marketing video page
     */
    marketingYoutubeUrl?: string;
    /**
     * Name of the App
     */
    name?: string;
    /**
     * Associated Remote Server type, if any
     */
    remoteServerType?: AppEntityRemoteServerTypeEnum;
    /**
     * Screenshots of the App
     */
    screenshotListUrls?: string[];
    /**
     * Short description of the App
     */
    shortDescription?: string;
    /**
     * Associated SSO Strategy type, if any
     */
    ssoStrategyType?: AppEntitySsoStrategyTypeEnum;
    /**
     * Tutorial video page
     */
    tutorialYoutubeUrl?: string;
}
