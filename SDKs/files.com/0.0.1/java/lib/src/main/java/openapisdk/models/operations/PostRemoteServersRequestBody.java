package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoteServersRequestBody {
    @SpeakeasyMetadata("multipartForm:name=aws_access_key")
    public String awsAccessKey;
    public PostRemoteServersRequestBody withAwsAccessKey(String awsAccessKey) {
        this.awsAccessKey = awsAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=aws_secret_key")
    public String awsSecretKey;
    public PostRemoteServersRequestBody withAwsSecretKey(String awsSecretKey) {
        this.awsSecretKey = awsSecretKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_access_key")
    public String azureBlobStorageAccessKey;
    public PostRemoteServersRequestBody withAzureBlobStorageAccessKey(String azureBlobStorageAccessKey) {
        this.azureBlobStorageAccessKey = azureBlobStorageAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_account")
    public String azureBlobStorageAccount;
    public PostRemoteServersRequestBody withAzureBlobStorageAccount(String azureBlobStorageAccount) {
        this.azureBlobStorageAccount = azureBlobStorageAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_container")
    public String azureBlobStorageContainer;
    public PostRemoteServersRequestBody withAzureBlobStorageContainer(String azureBlobStorageContainer) {
        this.azureBlobStorageContainer = azureBlobStorageContainer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_application_key")
    public String backblazeB2ApplicationKey;
    public PostRemoteServersRequestBody withBackblazeB2ApplicationKey(String backblazeB2ApplicationKey) {
        this.backblazeB2ApplicationKey = backblazeB2ApplicationKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_bucket")
    public String backblazeB2Bucket;
    public PostRemoteServersRequestBody withBackblazeB2Bucket(String backblazeB2Bucket) {
        this.backblazeB2Bucket = backblazeB2Bucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_key_id")
    public String backblazeB2KeyId;
    public PostRemoteServersRequestBody withBackblazeB2KeyId(String backblazeB2KeyId) {
        this.backblazeB2KeyId = backblazeB2KeyId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_s3_endpoint")
    public String backblazeB2S3Endpoint;
    public PostRemoteServersRequestBody withBackblazeB2S3Endpoint(String backblazeB2S3Endpoint) {
        this.backblazeB2S3Endpoint = backblazeB2S3Endpoint;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=enable_dedicated_ips")
    public Boolean enableDedicatedIps;
    public PostRemoteServersRequestBody withEnableDedicatedIps(Boolean enableDedicatedIps) {
        this.enableDedicatedIps = enableDedicatedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_bucket")
    public String googleCloudStorageBucket;
    public PostRemoteServersRequestBody withGoogleCloudStorageBucket(String googleCloudStorageBucket) {
        this.googleCloudStorageBucket = googleCloudStorageBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_credentials_json")
    public String googleCloudStorageCredentialsJson;
    public PostRemoteServersRequestBody withGoogleCloudStorageCredentialsJson(String googleCloudStorageCredentialsJson) {
        this.googleCloudStorageCredentialsJson = googleCloudStorageCredentialsJson;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_project_id")
    public String googleCloudStorageProjectId;
    public PostRemoteServersRequestBody withGoogleCloudStorageProjectId(String googleCloudStorageProjectId) {
        this.googleCloudStorageProjectId = googleCloudStorageProjectId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=hostname")
    public String hostname;
    public PostRemoteServersRequestBody withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=max_connections")
    public Integer maxConnections;
    public PostRemoteServersRequestBody withMaxConnections(Integer maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostRemoteServersRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=one_drive_account_type")
    public PostRemoteServersRequestBodyOneDriveAccountTypeEnum oneDriveAccountType;
    public PostRemoteServersRequestBody withOneDriveAccountType(PostRemoteServersRequestBodyOneDriveAccountTypeEnum oneDriveAccountType) {
        this.oneDriveAccountType = oneDriveAccountType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PostRemoteServersRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=port")
    public Integer port;
    public PostRemoteServersRequestBody withPort(Integer port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=private_key")
    public String privateKey;
    public PostRemoteServersRequestBody withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_api_key")
    public String rackspaceApiKey;
    public PostRemoteServersRequestBody withRackspaceApiKey(String rackspaceApiKey) {
        this.rackspaceApiKey = rackspaceApiKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_container")
    public String rackspaceContainer;
    public PostRemoteServersRequestBody withRackspaceContainer(String rackspaceContainer) {
        this.rackspaceContainer = rackspaceContainer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_region")
    public String rackspaceRegion;
    public PostRemoteServersRequestBody withRackspaceRegion(String rackspaceRegion) {
        this.rackspaceRegion = rackspaceRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_username")
    public String rackspaceUsername;
    public PostRemoteServersRequestBody withRackspaceUsername(String rackspaceUsername) {
        this.rackspaceUsername = rackspaceUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=reset_authentication")
    public Boolean resetAuthentication;
    public PostRemoteServersRequestBody withResetAuthentication(Boolean resetAuthentication) {
        this.resetAuthentication = resetAuthentication;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_bucket")
    public String s3Bucket;
    public PostRemoteServersRequestBody withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_access_key")
    public String s3CompatibleAccessKey;
    public PostRemoteServersRequestBody withS3CompatibleAccessKey(String s3CompatibleAccessKey) {
        this.s3CompatibleAccessKey = s3CompatibleAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_bucket")
    public String s3CompatibleBucket;
    public PostRemoteServersRequestBody withS3CompatibleBucket(String s3CompatibleBucket) {
        this.s3CompatibleBucket = s3CompatibleBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_endpoint")
    public String s3CompatibleEndpoint;
    public PostRemoteServersRequestBody withS3CompatibleEndpoint(String s3CompatibleEndpoint) {
        this.s3CompatibleEndpoint = s3CompatibleEndpoint;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_region")
    public String s3CompatibleRegion;
    public PostRemoteServersRequestBody withS3CompatibleRegion(String s3CompatibleRegion) {
        this.s3CompatibleRegion = s3CompatibleRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_secret_key")
    public String s3CompatibleSecretKey;
    public PostRemoteServersRequestBody withS3CompatibleSecretKey(String s3CompatibleSecretKey) {
        this.s3CompatibleSecretKey = s3CompatibleSecretKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_region")
    public String s3Region;
    public PostRemoteServersRequestBody withS3Region(String s3Region) {
        this.s3Region = s3Region;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_certificate")
    public PostRemoteServersRequestBodyServerCertificateEnum serverCertificate;
    public PostRemoteServersRequestBody withServerCertificate(PostRemoteServersRequestBodyServerCertificateEnum serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_host_key")
    public String serverHostKey;
    public PostRemoteServersRequestBody withServerHostKey(String serverHostKey) {
        this.serverHostKey = serverHostKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_type")
    public PostRemoteServersRequestBodyServerTypeEnum serverType;
    public PostRemoteServersRequestBody withServerType(PostRemoteServersRequestBodyServerTypeEnum serverType) {
        this.serverType = serverType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl")
    public PostRemoteServersRequestBodySslEnum ssl;
    public PostRemoteServersRequestBody withSsl(PostRemoteServersRequestBodySslEnum ssl) {
        this.ssl = ssl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl_certificate")
    public String sslCertificate;
    public PostRemoteServersRequestBody withSslCertificate(String sslCertificate) {
        this.sslCertificate = sslCertificate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PostRemoteServersRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_access_key")
    public String wasabiAccessKey;
    public PostRemoteServersRequestBody withWasabiAccessKey(String wasabiAccessKey) {
        this.wasabiAccessKey = wasabiAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_bucket")
    public String wasabiBucket;
    public PostRemoteServersRequestBody withWasabiBucket(String wasabiBucket) {
        this.wasabiBucket = wasabiBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_region")
    public String wasabiRegion;
    public PostRemoteServersRequestBody withWasabiRegion(String wasabiRegion) {
        this.wasabiRegion = wasabiRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_secret_key")
    public String wasabiSecretKey;
    public PostRemoteServersRequestBody withWasabiSecretKey(String wasabiSecretKey) {
        this.wasabiSecretKey = wasabiSecretKey;
        return this;
    }
}