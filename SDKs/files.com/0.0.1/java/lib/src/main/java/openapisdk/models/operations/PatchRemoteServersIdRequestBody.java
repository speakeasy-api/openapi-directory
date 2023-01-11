package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchRemoteServersIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=aws_access_key")
    public String awsAccessKey;
    public PatchRemoteServersIdRequestBody withAwsAccessKey(String awsAccessKey) {
        this.awsAccessKey = awsAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=aws_secret_key")
    public String awsSecretKey;
    public PatchRemoteServersIdRequestBody withAwsSecretKey(String awsSecretKey) {
        this.awsSecretKey = awsSecretKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_access_key")
    public String azureBlobStorageAccessKey;
    public PatchRemoteServersIdRequestBody withAzureBlobStorageAccessKey(String azureBlobStorageAccessKey) {
        this.azureBlobStorageAccessKey = azureBlobStorageAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_account")
    public String azureBlobStorageAccount;
    public PatchRemoteServersIdRequestBody withAzureBlobStorageAccount(String azureBlobStorageAccount) {
        this.azureBlobStorageAccount = azureBlobStorageAccount;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=azure_blob_storage_container")
    public String azureBlobStorageContainer;
    public PatchRemoteServersIdRequestBody withAzureBlobStorageContainer(String azureBlobStorageContainer) {
        this.azureBlobStorageContainer = azureBlobStorageContainer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_application_key")
    public String backblazeB2ApplicationKey;
    public PatchRemoteServersIdRequestBody withBackblazeB2ApplicationKey(String backblazeB2ApplicationKey) {
        this.backblazeB2ApplicationKey = backblazeB2ApplicationKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_bucket")
    public String backblazeB2Bucket;
    public PatchRemoteServersIdRequestBody withBackblazeB2Bucket(String backblazeB2Bucket) {
        this.backblazeB2Bucket = backblazeB2Bucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_key_id")
    public String backblazeB2KeyId;
    public PatchRemoteServersIdRequestBody withBackblazeB2KeyId(String backblazeB2KeyId) {
        this.backblazeB2KeyId = backblazeB2KeyId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=backblaze_b2_s3_endpoint")
    public String backblazeB2S3Endpoint;
    public PatchRemoteServersIdRequestBody withBackblazeB2S3Endpoint(String backblazeB2S3Endpoint) {
        this.backblazeB2S3Endpoint = backblazeB2S3Endpoint;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=enable_dedicated_ips")
    public Boolean enableDedicatedIps;
    public PatchRemoteServersIdRequestBody withEnableDedicatedIps(Boolean enableDedicatedIps) {
        this.enableDedicatedIps = enableDedicatedIps;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_bucket")
    public String googleCloudStorageBucket;
    public PatchRemoteServersIdRequestBody withGoogleCloudStorageBucket(String googleCloudStorageBucket) {
        this.googleCloudStorageBucket = googleCloudStorageBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_credentials_json")
    public String googleCloudStorageCredentialsJson;
    public PatchRemoteServersIdRequestBody withGoogleCloudStorageCredentialsJson(String googleCloudStorageCredentialsJson) {
        this.googleCloudStorageCredentialsJson = googleCloudStorageCredentialsJson;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=google_cloud_storage_project_id")
    public String googleCloudStorageProjectId;
    public PatchRemoteServersIdRequestBody withGoogleCloudStorageProjectId(String googleCloudStorageProjectId) {
        this.googleCloudStorageProjectId = googleCloudStorageProjectId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=hostname")
    public String hostname;
    public PatchRemoteServersIdRequestBody withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=max_connections")
    public Integer maxConnections;
    public PatchRemoteServersIdRequestBody withMaxConnections(Integer maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchRemoteServersIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=one_drive_account_type")
    public PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum oneDriveAccountType;
    public PatchRemoteServersIdRequestBody withOneDriveAccountType(PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum oneDriveAccountType) {
        this.oneDriveAccountType = oneDriveAccountType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PatchRemoteServersIdRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=port")
    public Integer port;
    public PatchRemoteServersIdRequestBody withPort(Integer port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=private_key")
    public String privateKey;
    public PatchRemoteServersIdRequestBody withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_api_key")
    public String rackspaceApiKey;
    public PatchRemoteServersIdRequestBody withRackspaceApiKey(String rackspaceApiKey) {
        this.rackspaceApiKey = rackspaceApiKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_container")
    public String rackspaceContainer;
    public PatchRemoteServersIdRequestBody withRackspaceContainer(String rackspaceContainer) {
        this.rackspaceContainer = rackspaceContainer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_region")
    public String rackspaceRegion;
    public PatchRemoteServersIdRequestBody withRackspaceRegion(String rackspaceRegion) {
        this.rackspaceRegion = rackspaceRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=rackspace_username")
    public String rackspaceUsername;
    public PatchRemoteServersIdRequestBody withRackspaceUsername(String rackspaceUsername) {
        this.rackspaceUsername = rackspaceUsername;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=reset_authentication")
    public Boolean resetAuthentication;
    public PatchRemoteServersIdRequestBody withResetAuthentication(Boolean resetAuthentication) {
        this.resetAuthentication = resetAuthentication;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_bucket")
    public String s3Bucket;
    public PatchRemoteServersIdRequestBody withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_access_key")
    public String s3CompatibleAccessKey;
    public PatchRemoteServersIdRequestBody withS3CompatibleAccessKey(String s3CompatibleAccessKey) {
        this.s3CompatibleAccessKey = s3CompatibleAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_bucket")
    public String s3CompatibleBucket;
    public PatchRemoteServersIdRequestBody withS3CompatibleBucket(String s3CompatibleBucket) {
        this.s3CompatibleBucket = s3CompatibleBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_endpoint")
    public String s3CompatibleEndpoint;
    public PatchRemoteServersIdRequestBody withS3CompatibleEndpoint(String s3CompatibleEndpoint) {
        this.s3CompatibleEndpoint = s3CompatibleEndpoint;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_region")
    public String s3CompatibleRegion;
    public PatchRemoteServersIdRequestBody withS3CompatibleRegion(String s3CompatibleRegion) {
        this.s3CompatibleRegion = s3CompatibleRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_compatible_secret_key")
    public String s3CompatibleSecretKey;
    public PatchRemoteServersIdRequestBody withS3CompatibleSecretKey(String s3CompatibleSecretKey) {
        this.s3CompatibleSecretKey = s3CompatibleSecretKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=s3_region")
    public String s3Region;
    public PatchRemoteServersIdRequestBody withS3Region(String s3Region) {
        this.s3Region = s3Region;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_certificate")
    public PatchRemoteServersIdRequestBodyServerCertificateEnum serverCertificate;
    public PatchRemoteServersIdRequestBody withServerCertificate(PatchRemoteServersIdRequestBodyServerCertificateEnum serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_host_key")
    public String serverHostKey;
    public PatchRemoteServersIdRequestBody withServerHostKey(String serverHostKey) {
        this.serverHostKey = serverHostKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=server_type")
    public PatchRemoteServersIdRequestBodyServerTypeEnum serverType;
    public PatchRemoteServersIdRequestBody withServerType(PatchRemoteServersIdRequestBodyServerTypeEnum serverType) {
        this.serverType = serverType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl")
    public PatchRemoteServersIdRequestBodySslEnum ssl;
    public PatchRemoteServersIdRequestBody withSsl(PatchRemoteServersIdRequestBodySslEnum ssl) {
        this.ssl = ssl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=ssl_certificate")
    public String sslCertificate;
    public PatchRemoteServersIdRequestBody withSslCertificate(String sslCertificate) {
        this.sslCertificate = sslCertificate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=username")
    public String username;
    public PatchRemoteServersIdRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_access_key")
    public String wasabiAccessKey;
    public PatchRemoteServersIdRequestBody withWasabiAccessKey(String wasabiAccessKey) {
        this.wasabiAccessKey = wasabiAccessKey;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_bucket")
    public String wasabiBucket;
    public PatchRemoteServersIdRequestBody withWasabiBucket(String wasabiBucket) {
        this.wasabiBucket = wasabiBucket;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_region")
    public String wasabiRegion;
    public PatchRemoteServersIdRequestBody withWasabiRegion(String wasabiRegion) {
        this.wasabiRegion = wasabiRegion;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=wasabi_secret_key")
    public String wasabiSecretKey;
    public PatchRemoteServersIdRequestBody withWasabiSecretKey(String wasabiSecretKey) {
        this.wasabiSecretKey = wasabiSecretKey;
        return this;
    }
}