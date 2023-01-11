package openapisdk.models.shared;



/**
 * OrderableDbInstanceOptionsList
 * The options that are available for an instance.
**/
public class OrderableDbInstanceOptionsList {
    public AvailabilityZoneList[] availabilityZones;
    public OrderableDbInstanceOptionsList withAvailabilityZones(AvailabilityZoneList[] availabilityZones) {
        this.availabilityZones = availabilityZones;
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
    public Boolean vpc;
    public OrderableDbInstanceOptionsList withVpc(Boolean vpc) {
        this.vpc = vpc;
        return this;
    }
}