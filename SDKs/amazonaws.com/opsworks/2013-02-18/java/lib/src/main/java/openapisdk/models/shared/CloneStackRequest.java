package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloneStackRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentVersion")
    public String agentVersion;
    public CloneStackRequest withAgentVersion(String agentVersion) {
        this.agentVersion = agentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public CloneStackRequest withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChefConfiguration")
    public ChefConfiguration chefConfiguration;
    public CloneStackRequest withChefConfiguration(ChefConfiguration chefConfiguration) {
        this.chefConfiguration = chefConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloneAppIds")
    public String[] cloneAppIds;
    public CloneStackRequest withCloneAppIds(String[] cloneAppIds) {
        this.cloneAppIds = cloneAppIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClonePermissions")
    public Boolean clonePermissions;
    public CloneStackRequest withClonePermissions(Boolean clonePermissions) {
        this.clonePermissions = clonePermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationManager")
    public StackConfigurationManager configurationManager;
    public CloneStackRequest withConfigurationManager(StackConfigurationManager configurationManager) {
        this.configurationManager = configurationManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomCookbooksSource")
    public Source customCookbooksSource;
    public CloneStackRequest withCustomCookbooksSource(Source customCookbooksSource) {
        this.customCookbooksSource = customCookbooksSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomJson")
    public String customJson;
    public CloneStackRequest withCustomJson(String customJson) {
        this.customJson = customJson;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAvailabilityZone")
    public String defaultAvailabilityZone;
    public CloneStackRequest withDefaultAvailabilityZone(String defaultAvailabilityZone) {
        this.defaultAvailabilityZone = defaultAvailabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultInstanceProfileArn")
    public String defaultInstanceProfileArn;
    public CloneStackRequest withDefaultInstanceProfileArn(String defaultInstanceProfileArn) {
        this.defaultInstanceProfileArn = defaultInstanceProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultOs")
    public String defaultOs;
    public CloneStackRequest withDefaultOs(String defaultOs) {
        this.defaultOs = defaultOs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRootDeviceType")
    public RootDeviceTypeEnum defaultRootDeviceType;
    public CloneStackRequest withDefaultRootDeviceType(RootDeviceTypeEnum defaultRootDeviceType) {
        this.defaultRootDeviceType = defaultRootDeviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSshKeyName")
    public String defaultSshKeyName;
    public CloneStackRequest withDefaultSshKeyName(String defaultSshKeyName) {
        this.defaultSshKeyName = defaultSshKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSubnetId")
    public String defaultSubnetId;
    public CloneStackRequest withDefaultSubnetId(String defaultSubnetId) {
        this.defaultSubnetId = defaultSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostnameTheme")
    public String hostnameTheme;
    public CloneStackRequest withHostnameTheme(String hostnameTheme) {
        this.hostnameTheme = hostnameTheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CloneStackRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;
    public CloneStackRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("ServiceRoleArn")
    public String serviceRoleArn;
    public CloneStackRequest withServiceRoleArn(String serviceRoleArn) {
        this.serviceRoleArn = serviceRoleArn;
        return this;
    }
    @JsonProperty("SourceStackId")
    public String sourceStackId;
    public CloneStackRequest withSourceStackId(String sourceStackId) {
        this.sourceStackId = sourceStackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseCustomCookbooks")
    public Boolean useCustomCookbooks;
    public CloneStackRequest withUseCustomCookbooks(Boolean useCustomCookbooks) {
        this.useCustomCookbooks = useCustomCookbooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseOpsworksSecurityGroups")
    public Boolean useOpsworksSecurityGroups;
    public CloneStackRequest withUseOpsworksSecurityGroups(Boolean useOpsworksSecurityGroups) {
        this.useOpsworksSecurityGroups = useOpsworksSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public CloneStackRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}