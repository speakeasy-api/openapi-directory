package openapisdk.models.shared;



/**
 * InstanceAttribute
 * Describes an instance attribute.
**/
public class InstanceAttribute {
    public java.util.Map<String, Object> blockDeviceMappings;
    public InstanceAttribute withBlockDeviceMappings(java.util.Map<String, Object> blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    public InstanceAttributeDisableApiTermination disableApiTermination;
    public InstanceAttribute withDisableApiTermination(InstanceAttributeDisableApiTermination disableApiTermination) {
        this.disableApiTermination = disableApiTermination;
        return this;
    }
    public InstanceAttributeEbsOptimized ebsOptimized;
    public InstanceAttribute withEbsOptimized(InstanceAttributeEbsOptimized ebsOptimized) {
        this.ebsOptimized = ebsOptimized;
        return this;
    }
    public InstanceAttributeEnaSupport enaSupport;
    public InstanceAttribute withEnaSupport(InstanceAttributeEnaSupport enaSupport) {
        this.enaSupport = enaSupport;
        return this;
    }
    public InstanceAttributeEnclaveOptions enclaveOptions;
    public InstanceAttribute withEnclaveOptions(InstanceAttributeEnclaveOptions enclaveOptions) {
        this.enclaveOptions = enclaveOptions;
        return this;
    }
    public java.util.Map<String, Object> groups;
    public InstanceAttribute withGroups(java.util.Map<String, Object> groups) {
        this.groups = groups;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public InstanceAttribute withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public InstanceAttributeInstanceInitiatedShutdownBehavior instanceInitiatedShutdownBehavior;
    public InstanceAttribute withInstanceInitiatedShutdownBehavior(InstanceAttributeInstanceInitiatedShutdownBehavior instanceInitiatedShutdownBehavior) {
        this.instanceInitiatedShutdownBehavior = instanceInitiatedShutdownBehavior;
        return this;
    }
    public InstanceAttributeInstanceType instanceType;
    public InstanceAttribute withInstanceType(InstanceAttributeInstanceType instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    public InstanceAttributeKernelId kernelId;
    public InstanceAttribute withKernelId(InstanceAttributeKernelId kernelId) {
        this.kernelId = kernelId;
        return this;
    }
    public java.util.Map<String, Object> productCodes;
    public InstanceAttribute withProductCodes(java.util.Map<String, Object> productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    public InstanceAttributeRamdiskId ramdiskId;
    public InstanceAttribute withRamdiskId(InstanceAttributeRamdiskId ramdiskId) {
        this.ramdiskId = ramdiskId;
        return this;
    }
    public InstanceAttributeRootDeviceName rootDeviceName;
    public InstanceAttribute withRootDeviceName(InstanceAttributeRootDeviceName rootDeviceName) {
        this.rootDeviceName = rootDeviceName;
        return this;
    }
    public InstanceAttributeSourceDestCheck sourceDestCheck;
    public InstanceAttribute withSourceDestCheck(InstanceAttributeSourceDestCheck sourceDestCheck) {
        this.sourceDestCheck = sourceDestCheck;
        return this;
    }
    public InstanceAttributeSriovNetSupport sriovNetSupport;
    public InstanceAttribute withSriovNetSupport(InstanceAttributeSriovNetSupport sriovNetSupport) {
        this.sriovNetSupport = sriovNetSupport;
        return this;
    }
    public InstanceAttributeUserData userData;
    public InstanceAttribute withUserData(InstanceAttributeUserData userData) {
        this.userData = userData;
        return this;
    }
}