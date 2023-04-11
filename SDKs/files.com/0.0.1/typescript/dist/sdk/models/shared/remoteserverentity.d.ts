import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Either `in_setup` or `complete`
 */
export declare enum RemoteServerEntityAuthStatusEnum {
    NotApplicable = "not_applicable",
    InSetup = "in_setup",
    Complete = "complete",
    Reauthenticate = "reauthenticate"
}
/**
 * Local permissions for files agent. read_only, write_only, or read_write
 */
export declare enum RemoteServerEntityFilesAgentPermissionSetEnum {
    ReadWrite = "read_write",
    ReadOnly = "read_only",
    WriteOnly = "write_only"
}
/**
 * Either personal or business_other account types
 */
export declare enum RemoteServerEntityOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}
/**
 * Remote server certificate
 */
export declare enum RemoteServerEntityServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
/**
 * Remote server type.
 */
export declare enum RemoteServerEntityServerTypeEnum {
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
 * Should we require SSL?
 */
export declare enum RemoteServerEntitySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}
/**
 * Create Remote Server
 */
export declare class RemoteServerEntity extends SpeakeasyBase {
    /**
     * Describes the authorized account
     */
    authAccountName?: string;
    /**
     * Returns link to login with an Oauth provider
     */
    authSetupLink?: string;
    /**
     * Either `in_setup` or `complete`
     */
    authStatus?: RemoteServerEntityAuthStatusEnum;
    /**
     * Type of authentication method
     */
    authenticationMethod?: string;
    /**
     * AWS Access Key.
     */
    awsAccessKey?: string;
    /**
     * Azure Blob Storage Account name
     */
    azureBlobStorageAccount?: string;
    /**
     * Azure Blob Storage Container name
     */
    azureBlobStorageContainer?: string;
    /**
     * Shared Access Signature (SAS) token
     */
    azureBlobStorageSasToken?: string;
    /**
     * Azure File Storage Account name
     */
    azureFilesStorageAccount?: string;
    /**
     * Shared Access Signature (SAS) token
     */
    azureFilesStorageSasToken?: string;
    /**
     * Azure File Storage Share name
     */
    azureFilesStorageShareName?: string;
    /**
     * Backblaze B2 Cloud Storage Bucket name
     */
    backblazeB2Bucket?: string;
    /**
     * Backblaze B2 Cloud Storage S3 Endpoint
     */
    backblazeB2S3Endpoint?: string;
    /**
     * If true, this server has been disabled due to failures.  Make any change or set disabled to false to clear this flag.
     */
    disabled?: boolean;
    /**
     * `true` if remote server only accepts connections from dedicated IPs
     */
    enableDedicatedIps?: boolean;
    /**
     * Filebase Access Key.
     */
    filebaseAccessKey?: string;
    /**
     * Filebase Bucket name
     */
    filebaseBucket?: string;
    /**
     * Files Agent API Token
     */
    filesAgentApiToken?: string;
    /**
     * Local permissions for files agent. read_only, write_only, or read_write
     */
    filesAgentPermissionSet?: RemoteServerEntityFilesAgentPermissionSetEnum;
    /**
     * Agent local root path
     */
    filesAgentRoot?: string;
    /**
     * Google Cloud Storage bucket name
     */
    googleCloudStorageBucket?: string;
    /**
     * Google Cloud Project ID
     */
    googleCloudStorageProjectId?: string;
    /**
     * Hostname or IP address
     */
    hostname?: string;
    /**
     * Remote server ID
     */
    id?: number;
    /**
     * Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).
     */
    maxConnections?: number;
    /**
     * Internal name for your reference
     */
    name?: string;
    /**
     * Either personal or business_other account types
     */
    oneDriveAccountType?: RemoteServerEntityOneDriveAccountTypeEnum;
    /**
     * If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a sitewide setting which will force it to true.
     */
    pinToSiteRegion?: boolean;
    /**
     * If set, all communciations with this remote server are made through the provided region.
     */
    pinnedRegion?: string;
    /**
     * Port for remote server.  Not needed for S3.
     */
    port?: number;
    /**
     * The name of the container (top level directory) where files will sync.
     */
    rackspaceContainer?: string;
    /**
     * Three letter airport code for Rackspace region. See https://support.rackspace.com/how-to/about-regions/
     */
    rackspaceRegion?: string;
    /**
     * Rackspace username used to login to the Rackspace Cloud Control Panel.
     */
    rackspaceUsername?: string;
    /**
     * Initial home folder on remote server
     */
    remoteHomePath?: string;
    /**
     * S3 bucket name
     */
    s3Bucket?: string;
    /**
     * S3-compatible Access Key.
     */
    s3CompatibleAccessKey?: string;
    /**
     * S3-compatible Bucket name
     */
    s3CompatibleBucket?: string;
    /**
     * S3-compatible endpoint
     */
    s3CompatibleEndpoint?: string;
    /**
     * S3-compatible endpoint
     */
    s3CompatibleRegion?: string;
    /**
     * S3 region
     */
    s3Region?: string;
    /**
     * Remote server certificate
     */
    serverCertificate?: RemoteServerEntityServerCertificateEnum;
    /**
     * Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
     */
    serverHostKey?: string;
    /**
     * Remote server type.
     */
    serverType?: RemoteServerEntityServerTypeEnum;
    /**
     * Should we require SSL?
     */
    ssl?: RemoteServerEntitySslEnum;
    /**
     * Remote server username.  Not needed for S3 buckets.
     */
    username?: string;
    /**
     * Wasabi access key.
     */
    wasabiAccessKey?: string;
    /**
     * Wasabi Bucket name
     */
    wasabiBucket?: string;
    /**
     * Wasabi region
     */
    wasabiRegion?: string;
}
