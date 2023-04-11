import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Local permissions for files agent. read_only, write_only, or read_write
 */
export declare enum PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum {
    ReadWrite = "read_write",
    ReadOnly = "read_only",
    WriteOnly = "write_only"
}
/**
 * Either personal or business_other account types
 */
export declare enum PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum {
    Personal = "personal",
    BusinessOther = "business_other"
}
/**
 * Remote server certificate
 */
export declare enum PatchRemoteServersIdRequestBodyServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
/**
 * Remote server type.
 */
export declare enum PatchRemoteServersIdRequestBodyServerTypeEnum {
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
export declare enum PatchRemoteServersIdRequestBodySslEnum {
    IfAvailable = "if_available",
    Require = "require",
    RequireImplicit = "require_implicit",
    Never = "never"
}
export declare class PatchRemoteServersIdRequestBody extends SpeakeasyBase {
    /**
     * AWS Access Key.
     */
    awsAccessKey?: string;
    /**
     * AWS secret key.
     */
    awsSecretKey?: string;
    /**
     * Azure Blob Storage secret key.
     */
    azureBlobStorageAccessKey?: string;
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
     * Azure File Storage access key.
     */
    azureFilesStorageAccessKey?: string;
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
     * Backblaze B2 Cloud Storage applicationKey.
     */
    backblazeB2ApplicationKey?: string;
    /**
     * Backblaze B2 Cloud Storage Bucket name
     */
    backblazeB2Bucket?: string;
    /**
     * Backblaze B2 Cloud Storage keyID.
     */
    backblazeB2KeyId?: string;
    /**
     * Backblaze B2 Cloud Storage S3 Endpoint
     */
    backblazeB2S3Endpoint?: string;
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
     * Filebase secret key
     */
    filebaseSecretKey?: string;
    /**
     * Local permissions for files agent. read_only, write_only, or read_write
     */
    filesAgentPermissionSet?: PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum;
    /**
     * Agent local root path
     */
    filesAgentRoot?: string;
    /**
     * Google Cloud Storage bucket name
     */
    googleCloudStorageBucket?: string;
    /**
     * A JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey
     */
    googleCloudStorageCredentialsJson?: string;
    /**
     * Google Cloud Project ID
     */
    googleCloudStorageProjectId?: string;
    /**
     * Hostname or IP address
     */
    hostname?: string;
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
    oneDriveAccountType?: PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;
    /**
     * Password if needed.
     */
    password?: string;
    /**
     * If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a sitewide setting which will force it to true.
     */
    pinToSiteRegion?: boolean;
    /**
     * Port for remote server.  Not needed for S3.
     */
    port?: number;
    /**
     * Private key if needed.
     */
    privateKey?: string;
    /**
     * Passphrase for private key if needed.
     */
    privateKeyPassphrase?: string;
    /**
     * Rackspace API key from the Rackspace Cloud Control Panel.
     */
    rackspaceApiKey?: string;
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
     * Reset authenticated account
     */
    resetAuthentication?: boolean;
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
     * S3-compatible secret key
     */
    s3CompatibleSecretKey?: string;
    /**
     * S3 region
     */
    s3Region?: string;
    /**
     * Remote server certificate
     */
    serverCertificate?: PatchRemoteServersIdRequestBodyServerCertificateEnum;
    /**
     * Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
     */
    serverHostKey?: string;
    /**
     * Remote server type.
     */
    serverType?: PatchRemoteServersIdRequestBodyServerTypeEnum;
    /**
     * Should we require SSL?
     */
    ssl?: PatchRemoteServersIdRequestBodySslEnum;
    /**
     * SSL client certificate.
     */
    sslCertificate?: string;
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
    /**
     * Wasabi secret key.
     */
    wasabiSecretKey?: string;
}
export declare class PatchRemoteServersIdRequest extends SpeakeasyBase {
    requestBody?: PatchRemoteServersIdRequestBody;
    /**
     * Remote Server ID.
     */
    id: number;
}
export declare class PatchRemoteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The RemoteServers object.
     */
    remoteServerEntity?: shared.RemoteServerEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
