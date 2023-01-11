package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoteServerEntity
 * Create Remote Server
**/
public class RemoteServerEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_account_name")
    public String authAccountName;
    public RemoteServerEntity withAuthAccountName(String authAccountName) {
        this.authAccountName = authAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_setup_link")
    public String authSetupLink;
    public RemoteServerEntity withAuthSetupLink(String authSetupLink) {
        this.authSetupLink = authSetupLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_status")
    public RemoteServerEntityAuthStatusEnum authStatus;
    public RemoteServerEntity withAuthStatus(RemoteServerEntityAuthStatusEnum authStatus) {
        this.authStatus = authStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_method")
    public String authenticationMethod;
    public RemoteServerEntity withAuthenticationMethod(String authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azure_blob_storage_account")
    public String azureBlobStorageAccount;
    public RemoteServerEntity withAzureBlobStorageAccount(String azureBlobStorageAccount) {
        this.azureBlobStorageAccount = azureBlobStorageAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azure_blob_storage_container")
    public String azureBlobStorageContainer;
    public RemoteServerEntity withAzureBlobStorageContainer(String azureBlobStorageContainer) {
        this.azureBlobStorageContainer = azureBlobStorageContainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backblaze_b2_bucket")
    public String backblazeB2Bucket;
    public RemoteServerEntity withBackblazeB2Bucket(String backblazeB2Bucket) {
        this.backblazeB2Bucket = backblazeB2Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backblaze_b2_s3_endpoint")
    public String backblazeB2S3Endpoint;
    public RemoteServerEntity withBackblazeB2S3Endpoint(String backblazeB2S3Endpoint) {
        this.backblazeB2S3Endpoint = backblazeB2S3Endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_dedicated_ips")
    public Boolean enableDedicatedIps;
    public RemoteServerEntity withEnableDedicatedIps(Boolean enableDedicatedIps) {
        this.enableDedicatedIps = enableDedicatedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_cloud_storage_bucket")
    public String googleCloudStorageBucket;
    public RemoteServerEntity withGoogleCloudStorageBucket(String googleCloudStorageBucket) {
        this.googleCloudStorageBucket = googleCloudStorageBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_cloud_storage_project_id")
    public String googleCloudStorageProjectId;
    public RemoteServerEntity withGoogleCloudStorageProjectId(String googleCloudStorageProjectId) {
        this.googleCloudStorageProjectId = googleCloudStorageProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public RemoteServerEntity withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public RemoteServerEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_connections")
    public Integer maxConnections;
    public RemoteServerEntity withMaxConnections(Integer maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RemoteServerEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("one_drive_account_type")
    public RemoteServerEntityOneDriveAccountTypeEnum oneDriveAccountType;
    public RemoteServerEntity withOneDriveAccountType(RemoteServerEntityOneDriveAccountTypeEnum oneDriveAccountType) {
        this.oneDriveAccountType = oneDriveAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public RemoteServerEntity withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rackspace_container")
    public String rackspaceContainer;
    public RemoteServerEntity withRackspaceContainer(String rackspaceContainer) {
        this.rackspaceContainer = rackspaceContainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rackspace_region")
    public String rackspaceRegion;
    public RemoteServerEntity withRackspaceRegion(String rackspaceRegion) {
        this.rackspaceRegion = rackspaceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rackspace_username")
    public String rackspaceUsername;
    public RemoteServerEntity withRackspaceUsername(String rackspaceUsername) {
        this.rackspaceUsername = rackspaceUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_home_path")
    public String remoteHomePath;
    public RemoteServerEntity withRemoteHomePath(String remoteHomePath) {
        this.remoteHomePath = remoteHomePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3_bucket")
    public String s3Bucket;
    public RemoteServerEntity withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3_compatible_bucket")
    public String s3CompatibleBucket;
    public RemoteServerEntity withS3CompatibleBucket(String s3CompatibleBucket) {
        this.s3CompatibleBucket = s3CompatibleBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3_compatible_endpoint")
    public String s3CompatibleEndpoint;
    public RemoteServerEntity withS3CompatibleEndpoint(String s3CompatibleEndpoint) {
        this.s3CompatibleEndpoint = s3CompatibleEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3_compatible_region")
    public String s3CompatibleRegion;
    public RemoteServerEntity withS3CompatibleRegion(String s3CompatibleRegion) {
        this.s3CompatibleRegion = s3CompatibleRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3_region")
    public String s3Region;
    public RemoteServerEntity withS3Region(String s3Region) {
        this.s3Region = s3Region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server_certificate")
    public RemoteServerEntityServerCertificateEnum serverCertificate;
    public RemoteServerEntity withServerCertificate(RemoteServerEntityServerCertificateEnum serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server_host_key")
    public String serverHostKey;
    public RemoteServerEntity withServerHostKey(String serverHostKey) {
        this.serverHostKey = serverHostKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server_type")
    public RemoteServerEntityServerTypeEnum serverType;
    public RemoteServerEntity withServerType(RemoteServerEntityServerTypeEnum serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public RemoteServerEntitySslEnum ssl;
    public RemoteServerEntity withSsl(RemoteServerEntitySslEnum ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public RemoteServerEntity withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wasabi_bucket")
    public String wasabiBucket;
    public RemoteServerEntity withWasabiBucket(String wasabiBucket) {
        this.wasabiBucket = wasabiBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wasabi_region")
    public String wasabiRegion;
    public RemoteServerEntity withWasabiRegion(String wasabiRegion) {
        this.wasabiRegion = wasabiRegion;
        return this;
    }
}