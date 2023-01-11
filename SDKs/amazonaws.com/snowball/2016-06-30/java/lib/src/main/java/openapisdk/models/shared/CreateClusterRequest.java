package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClusterRequest {
    @JsonProperty("AddressId")
    public String addressId;
    public CreateClusterRequest withAddressId(String addressId) {
        this.addressId = addressId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateClusterRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForwardingAddressId")
    public String forwardingAddressId;
    public CreateClusterRequest withForwardingAddressId(String forwardingAddressId) {
        this.forwardingAddressId = forwardingAddressId;
        return this;
    }
    @JsonProperty("JobType")
    public JobTypeEnum jobType;
    public CreateClusterRequest withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyARN")
    public String kmsKeyARN;
    public CreateClusterRequest withKmsKeyArn(String kmsKeyARN) {
        this.kmsKeyARN = kmsKeyARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notification")
    public Notification notification;
    public CreateClusterRequest withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnDeviceServiceConfiguration")
    public OnDeviceServiceConfiguration onDeviceServiceConfiguration;
    public CreateClusterRequest withOnDeviceServiceConfiguration(OnDeviceServiceConfiguration onDeviceServiceConfiguration) {
        this.onDeviceServiceConfiguration = onDeviceServiceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteManagement")
    public RemoteManagementEnum remoteManagement;
    public CreateClusterRequest withRemoteManagement(RemoteManagementEnum remoteManagement) {
        this.remoteManagement = remoteManagement;
        return this;
    }
    @JsonProperty("Resources")
    public JobResource resources;
    public CreateClusterRequest withResources(JobResource resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CreateClusterRequest withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonProperty("ShippingOption")
    public ShippingOptionEnum shippingOption;
    public CreateClusterRequest withShippingOption(ShippingOptionEnum shippingOption) {
        this.shippingOption = shippingOption;
        return this;
    }
    @JsonProperty("SnowballType")
    public SnowballTypeEnum snowballType;
    public CreateClusterRequest withSnowballType(SnowballTypeEnum snowballType) {
        this.snowballType = snowballType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxDocuments")
    public TaxDocuments taxDocuments;
    public CreateClusterRequest withTaxDocuments(TaxDocuments taxDocuments) {
        this.taxDocuments = taxDocuments;
        return this;
    }
}