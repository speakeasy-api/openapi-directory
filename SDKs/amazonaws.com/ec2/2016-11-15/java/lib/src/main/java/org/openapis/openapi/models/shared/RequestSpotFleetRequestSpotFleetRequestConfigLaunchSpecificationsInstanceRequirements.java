/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements - &lt;p&gt;The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.&lt;/p&gt; &lt;note&gt; &lt;p&gt;If you specify &lt;code&gt;InstanceRequirements&lt;/code&gt;, you can't specify &lt;code&gt;InstanceType&lt;/code&gt;.&lt;/p&gt; &lt;/note&gt;
 */
public class RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements {
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorCount acceleratorCount;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAcceleratorCount(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorCount acceleratorCount) {
        this.acceleratorCount = acceleratorCount;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorManufacturersEnum[] acceleratorManufacturers;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAcceleratorManufacturers(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorManufacturersEnum[] acceleratorManufacturers) {
        this.acceleratorManufacturers = acceleratorManufacturers;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorNamesEnum[] acceleratorNames;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAcceleratorNames(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorNamesEnum[] acceleratorNames) {
        this.acceleratorNames = acceleratorNames;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB acceleratorTotalMemoryMiB;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAcceleratorTotalMemoryMiB(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorTotalMemoryMiB acceleratorTotalMemoryMiB) {
        this.acceleratorTotalMemoryMiB = acceleratorTotalMemoryMiB;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorTypesEnum[] acceleratorTypes;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAcceleratorTypes(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsAcceleratorTypesEnum[] acceleratorTypes) {
        this.acceleratorTypes = acceleratorTypes;
        return this;
    }
    
    
    public String[] allowedInstanceTypes;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withAllowedInstanceTypes(String[] allowedInstanceTypes) {
        this.allowedInstanceTypes = allowedInstanceTypes;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBareMetalEnum bareMetal;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withBareMetal(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBareMetalEnum bareMetal) {
        this.bareMetal = bareMetal;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps baselineEbsBandwidthMbps;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withBaselineEbsBandwidthMbps(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBaselineEbsBandwidthMbps baselineEbsBandwidthMbps) {
        this.baselineEbsBandwidthMbps = baselineEbsBandwidthMbps;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBurstablePerformanceEnum burstablePerformance;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withBurstablePerformance(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsBurstablePerformanceEnum burstablePerformance) {
        this.burstablePerformance = burstablePerformance;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsCpuManufacturersEnum[] cpuManufacturers;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withCpuManufacturers(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsCpuManufacturersEnum[] cpuManufacturers) {
        this.cpuManufacturers = cpuManufacturers;
        return this;
    }
    
    
    public String[] excludedInstanceTypes;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withExcludedInstanceTypes(String[] excludedInstanceTypes) {
        this.excludedInstanceTypes = excludedInstanceTypes;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsInstanceGenerationsEnum[] instanceGenerations;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withInstanceGenerations(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsInstanceGenerationsEnum[] instanceGenerations) {
        this.instanceGenerations = instanceGenerations;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsLocalStorageEnum localStorage;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withLocalStorage(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsLocalStorageEnum localStorage) {
        this.localStorage = localStorage;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsLocalStorageTypesEnum[] localStorageTypes;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withLocalStorageTypes(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsLocalStorageTypesEnum[] localStorageTypes) {
        this.localStorageTypes = localStorageTypes;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu memoryGiBPerVCpu;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withMemoryGiBPerVCpu(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsMemoryGiBPerVCpu memoryGiBPerVCpu) {
        this.memoryGiBPerVCpu = memoryGiBPerVCpu;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsMemoryMiB memoryMiB;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withMemoryMiB(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsMemoryMiB memoryMiB) {
        this.memoryMiB = memoryMiB;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps networkBandwidthGbps;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withNetworkBandwidthGbps(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsNetworkBandwidthGbps networkBandwidthGbps) {
        this.networkBandwidthGbps = networkBandwidthGbps;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount networkInterfaceCount;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withNetworkInterfaceCount(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsNetworkInterfaceCount networkInterfaceCount) {
        this.networkInterfaceCount = networkInterfaceCount;
        return this;
    }
    
    
    public Long onDemandMaxPricePercentageOverLowestPrice;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withOnDemandMaxPricePercentageOverLowestPrice(Long onDemandMaxPricePercentageOverLowestPrice) {
        this.onDemandMaxPricePercentageOverLowestPrice = onDemandMaxPricePercentageOverLowestPrice;
        return this;
    }
    
    
    public Boolean requireHibernateSupport;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withRequireHibernateSupport(Boolean requireHibernateSupport) {
        this.requireHibernateSupport = requireHibernateSupport;
        return this;
    }
    
    
    public Long spotMaxPricePercentageOverLowestPrice;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withSpotMaxPricePercentageOverLowestPrice(Long spotMaxPricePercentageOverLowestPrice) {
        this.spotMaxPricePercentageOverLowestPrice = spotMaxPricePercentageOverLowestPrice;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsTotalLocalStorageGB totalLocalStorageGB;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withTotalLocalStorageGB(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsTotalLocalStorageGB totalLocalStorageGB) {
        this.totalLocalStorageGB = totalLocalStorageGB;
        return this;
    }
    
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsVCpuCount vCpuCount;

    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements withVCpuCount(RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirementsVCpuCount vCpuCount) {
        this.vCpuCount = vCpuCount;
        return this;
    }
    
    public RequestSpotFleetRequestSpotFleetRequestConfigLaunchSpecificationsInstanceRequirements(){}
}
