package openapisdk.models.shared;



public class AppD {
    public String appDId;
    public AppD withAppDId(String appDId) {
        this.appDId = appDId;
        return this;
    }
    public DnsRuleDescriptor[] appDNSRule;
    public AppD withAppDnsRule(DnsRuleDescriptor[] appDNSRule) {
        this.appDNSRule = appDNSRule;
        return this;
    }
    public String appDVersion;
    public AppD withAppDVersion(String appDVersion) {
        this.appDVersion = appDVersion;
        return this;
    }
    public String appDescription;
    public AppD withAppDescription(String appDescription) {
        this.appDescription = appDescription;
        return this;
    }
    public AppExternalCpd[] appExtCpd;
    public AppD withAppExtCpd(AppExternalCpd[] appExtCpd) {
        this.appExtCpd = appExtCpd;
        return this;
    }
    public FeatureDependency[] appFeatureOptional;
    public AppD withAppFeatureOptional(FeatureDependency[] appFeatureOptional) {
        this.appFeatureOptional = appFeatureOptional;
        return this;
    }
    public FeatureDependency[] appFeatureRequired;
    public AppD withAppFeatureRequired(FeatureDependency[] appFeatureRequired) {
        this.appFeatureRequired = appFeatureRequired;
        return this;
    }
    public String appInfoName;
    public AppD withAppInfoName(String appInfoName) {
        this.appInfoName = appInfoName;
        return this;
    }
    public LatencyDescriptor appLatency;
    public AppD withAppLatency(LatencyDescriptor appLatency) {
        this.appLatency = appLatency;
        return this;
    }
    public String appName;
    public AppD withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    public String appProvider;
    public AppD withAppProvider(String appProvider) {
        this.appProvider = appProvider;
        return this;
    }
    public ServiceDependency[] appServiceOptional;
    public AppD withAppServiceOptional(ServiceDependency[] appServiceOptional) {
        this.appServiceOptional = appServiceOptional;
        return this;
    }
    public ServiceDescriptor[] appServiceProduced;
    public AppD withAppServiceProduced(ServiceDescriptor[] appServiceProduced) {
        this.appServiceProduced = appServiceProduced;
        return this;
    }
    public ServiceDependency[] appServiceRequired;
    public AppD withAppServiceRequired(ServiceDependency[] appServiceRequired) {
        this.appServiceRequired = appServiceRequired;
        return this;
    }
    public String appSoftVersion;
    public AppD withAppSoftVersion(String appSoftVersion) {
        this.appSoftVersion = appSoftVersion;
        return this;
    }
    public TrafficRuleDescriptor[] appTrafficRule;
    public AppD withAppTrafficRule(TrafficRuleDescriptor[] appTrafficRule) {
        this.appTrafficRule = appTrafficRule;
        return this;
    }
    public String changeAppInstanceStateOpConfig;
    public AppD withChangeAppInstanceStateOpConfig(String changeAppInstanceStateOpConfig) {
        this.changeAppInstanceStateOpConfig = changeAppInstanceStateOpConfig;
        return this;
    }
    public String[] mecVersion;
    public AppD withMecVersion(String[] mecVersion) {
        this.mecVersion = mecVersion;
        return this;
    }
    public String swImageDescriptor;
    public AppD withSwImageDescriptor(String swImageDescriptor) {
        this.swImageDescriptor = swImageDescriptor;
        return this;
    }
    public String terminateAppInstanceOpConfig;
    public AppD withTerminateAppInstanceOpConfig(String terminateAppInstanceOpConfig) {
        this.terminateAppInstanceOpConfig = terminateAppInstanceOpConfig;
        return this;
    }
    public TransportDependency[] transportDependencies;
    public AppD withTransportDependencies(TransportDependency[] transportDependencies) {
        this.transportDependencies = transportDependencies;
        return this;
    }
    public String virtualComputeDescriptor;
    public AppD withVirtualComputeDescriptor(String virtualComputeDescriptor) {
        this.virtualComputeDescriptor = virtualComputeDescriptor;
        return this;
    }
    public String[] virtualStorageDescriptor;
    public AppD withVirtualStorageDescriptor(String[] virtualStorageDescriptor) {
        this.virtualStorageDescriptor = virtualStorageDescriptor;
        return this;
    }
}