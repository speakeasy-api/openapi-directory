package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterContainerInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public RegisterContainerInstanceRequest withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public RegisterContainerInstanceRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerInstanceArn")
    public String containerInstanceArn;
    public RegisterContainerInstanceRequest withContainerInstanceArn(String containerInstanceArn) {
        this.containerInstanceArn = containerInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceIdentityDocument")
    public String instanceIdentityDocument;
    public RegisterContainerInstanceRequest withInstanceIdentityDocument(String instanceIdentityDocument) {
        this.instanceIdentityDocument = instanceIdentityDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceIdentityDocumentSignature")
    public String instanceIdentityDocumentSignature;
    public RegisterContainerInstanceRequest withInstanceIdentityDocumentSignature(String instanceIdentityDocumentSignature) {
        this.instanceIdentityDocumentSignature = instanceIdentityDocumentSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformDevices")
    public PlatformDevice[] platformDevices;
    public RegisterContainerInstanceRequest withPlatformDevices(PlatformDevice[] platformDevices) {
        this.platformDevices = platformDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public RegisterContainerInstanceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResources")
    public Resource[] totalResources;
    public RegisterContainerInstanceRequest withTotalResources(Resource[] totalResources) {
        this.totalResources = totalResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public VersionInfo versionInfo;
    public RegisterContainerInstanceRequest withVersionInfo(VersionInfo versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}