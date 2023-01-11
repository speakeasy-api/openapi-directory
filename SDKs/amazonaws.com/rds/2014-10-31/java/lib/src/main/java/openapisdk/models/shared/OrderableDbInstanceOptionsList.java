package openapisdk.models.shared;



/**
 * OrderableDbInstanceOptionsList
 * <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
**/
public class OrderableDbInstanceOptionsList {
    public String availabilityZoneGroup;
    public OrderableDbInstanceOptionsList withAvailabilityZoneGroup(String availabilityZoneGroup) {
        this.availabilityZoneGroup = availabilityZoneGroup;
        return this;
    }
    public AvailabilityZoneList[] availabilityZones;
    public OrderableDbInstanceOptionsList withAvailabilityZones(AvailabilityZoneList[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public AvailableProcessorFeatureList[] availableProcessorFeatures;
    public OrderableDbInstanceOptionsList withAvailableProcessorFeatures(AvailableProcessorFeatureList[] availableProcessorFeatures) {
        this.availableProcessorFeatures = availableProcessorFeatures;
        return this;
    }
    public String dbInstanceClass;
    public OrderableDbInstanceOptionsList withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String engine;
    public OrderableDbInstanceOptionsList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public OrderableDbInstanceOptionsList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String licenseModel;
    public OrderableDbInstanceOptionsList withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public Long maxIopsPerDbInstance;
    public OrderableDbInstanceOptionsList withMaxIopsPerDbInstance(Long maxIopsPerDbInstance) {
        this.maxIopsPerDbInstance = maxIopsPerDbInstance;
        return this;
    }
    public Double maxIopsPerGib;
    public OrderableDbInstanceOptionsList withMaxIopsPerGib(Double maxIopsPerGib) {
        this.maxIopsPerGib = maxIopsPerGib;
        return this;
    }
    public Long maxStorageSize;
    public OrderableDbInstanceOptionsList withMaxStorageSize(Long maxStorageSize) {
        this.maxStorageSize = maxStorageSize;
        return this;
    }
    public Long minIopsPerDbInstance;
    public OrderableDbInstanceOptionsList withMinIopsPerDbInstance(Long minIopsPerDbInstance) {
        this.minIopsPerDbInstance = minIopsPerDbInstance;
        return this;
    }
    public Double minIopsPerGib;
    public OrderableDbInstanceOptionsList withMinIopsPerGib(Double minIopsPerGib) {
        this.minIopsPerGib = minIopsPerGib;
        return this;
    }
    public Long minStorageSize;
    public OrderableDbInstanceOptionsList withMinStorageSize(Long minStorageSize) {
        this.minStorageSize = minStorageSize;
        return this;
    }
    public Boolean multiAZCapable;
    public OrderableDbInstanceOptionsList withMultiAzCapable(Boolean multiAZCapable) {
        this.multiAZCapable = multiAZCapable;
        return this;
    }
    public Boolean outpostCapable;
    public OrderableDbInstanceOptionsList withOutpostCapable(Boolean outpostCapable) {
        this.outpostCapable = outpostCapable;
        return this;
    }
    public Boolean readReplicaCapable;
    public OrderableDbInstanceOptionsList withReadReplicaCapable(Boolean readReplicaCapable) {
        this.readReplicaCapable = readReplicaCapable;
        return this;
    }
    public String storageType;
    public OrderableDbInstanceOptionsList withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
    public String[] supportedActivityStreamModes;
    public OrderableDbInstanceOptionsList withSupportedActivityStreamModes(String[] supportedActivityStreamModes) {
        this.supportedActivityStreamModes = supportedActivityStreamModes;
        return this;
    }
    public String[] supportedEngineModes;
    public OrderableDbInstanceOptionsList withSupportedEngineModes(String[] supportedEngineModes) {
        this.supportedEngineModes = supportedEngineModes;
        return this;
    }
    public Boolean supportsEnhancedMonitoring;
    public OrderableDbInstanceOptionsList withSupportsEnhancedMonitoring(Boolean supportsEnhancedMonitoring) {
        this.supportsEnhancedMonitoring = supportsEnhancedMonitoring;
        return this;
    }
    public Boolean supportsGlobalDatabases;
    public OrderableDbInstanceOptionsList withSupportsGlobalDatabases(Boolean supportsGlobalDatabases) {
        this.supportsGlobalDatabases = supportsGlobalDatabases;
        return this;
    }
    public Boolean supportsIAMDatabaseAuthentication;
    public OrderableDbInstanceOptionsList withSupportsIamDatabaseAuthentication(Boolean supportsIAMDatabaseAuthentication) {
        this.supportsIAMDatabaseAuthentication = supportsIAMDatabaseAuthentication;
        return this;
    }
    public Boolean supportsIops;
    public OrderableDbInstanceOptionsList withSupportsIops(Boolean supportsIops) {
        this.supportsIops = supportsIops;
        return this;
    }
    public Boolean supportsKerberosAuthentication;
    public OrderableDbInstanceOptionsList withSupportsKerberosAuthentication(Boolean supportsKerberosAuthentication) {
        this.supportsKerberosAuthentication = supportsKerberosAuthentication;
        return this;
    }
    public Boolean supportsPerformanceInsights;
    public OrderableDbInstanceOptionsList withSupportsPerformanceInsights(Boolean supportsPerformanceInsights) {
        this.supportsPerformanceInsights = supportsPerformanceInsights;
        return this;
    }
    public Boolean supportsStorageAutoscaling;
    public OrderableDbInstanceOptionsList withSupportsStorageAutoscaling(Boolean supportsStorageAutoscaling) {
        this.supportsStorageAutoscaling = supportsStorageAutoscaling;
        return this;
    }
    public Boolean supportsStorageEncryption;
    public OrderableDbInstanceOptionsList withSupportsStorageEncryption(Boolean supportsStorageEncryption) {
        this.supportsStorageEncryption = supportsStorageEncryption;
        return this;
    }
    public Boolean vpc;
    public OrderableDbInstanceOptionsList withVpc(Boolean vpc) {
        this.vpc = vpc;
        return this;
    }
}