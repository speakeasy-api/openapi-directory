package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLayerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public UpdateLayerRequest withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoAssignElasticIps")
    public Boolean autoAssignElasticIps;
    public UpdateLayerRequest withAutoAssignElasticIps(Boolean autoAssignElasticIps) {
        this.autoAssignElasticIps = autoAssignElasticIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoAssignPublicIps")
    public Boolean autoAssignPublicIps;
    public UpdateLayerRequest withAutoAssignPublicIps(Boolean autoAssignPublicIps) {
        this.autoAssignPublicIps = autoAssignPublicIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsConfiguration")
    public CloudWatchLogsConfiguration cloudWatchLogsConfiguration;
    public UpdateLayerRequest withCloudWatchLogsConfiguration(CloudWatchLogsConfiguration cloudWatchLogsConfiguration) {
        this.cloudWatchLogsConfiguration = cloudWatchLogsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomInstanceProfileArn")
    public String customInstanceProfileArn;
    public UpdateLayerRequest withCustomInstanceProfileArn(String customInstanceProfileArn) {
        this.customInstanceProfileArn = customInstanceProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomJson")
    public String customJson;
    public UpdateLayerRequest withCustomJson(String customJson) {
        this.customJson = customJson;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomRecipes")
    public Recipes customRecipes;
    public UpdateLayerRequest withCustomRecipes(Recipes customRecipes) {
        this.customRecipes = customRecipes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomSecurityGroupIds")
    public String[] customSecurityGroupIds;
    public UpdateLayerRequest withCustomSecurityGroupIds(String[] customSecurityGroupIds) {
        this.customSecurityGroupIds = customSecurityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableAutoHealing")
    public Boolean enableAutoHealing;
    public UpdateLayerRequest withEnableAutoHealing(Boolean enableAutoHealing) {
        this.enableAutoHealing = enableAutoHealing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstallUpdatesOnBoot")
    public Boolean installUpdatesOnBoot;
    public UpdateLayerRequest withInstallUpdatesOnBoot(Boolean installUpdatesOnBoot) {
        this.installUpdatesOnBoot = installUpdatesOnBoot;
        return this;
    }
    @JsonProperty("LayerId")
    public String layerId;
    public UpdateLayerRequest withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LifecycleEventConfiguration")
    public LifecycleEventConfiguration lifecycleEventConfiguration;
    public UpdateLayerRequest withLifecycleEventConfiguration(LifecycleEventConfiguration lifecycleEventConfiguration) {
        this.lifecycleEventConfiguration = lifecycleEventConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateLayerRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Packages")
    public String[] packages;
    public UpdateLayerRequest withPackages(String[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Shortname")
    public String shortname;
    public UpdateLayerRequest withShortname(String shortname) {
        this.shortname = shortname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseEbsOptimizedInstances")
    public Boolean useEbsOptimizedInstances;
    public UpdateLayerRequest withUseEbsOptimizedInstances(Boolean useEbsOptimizedInstances) {
        this.useEbsOptimizedInstances = useEbsOptimizedInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeConfigurations")
    public VolumeConfiguration[] volumeConfigurations;
    public UpdateLayerRequest withVolumeConfigurations(VolumeConfiguration[] volumeConfigurations) {
        this.volumeConfigurations = volumeConfigurations;
        return this;
    }
}