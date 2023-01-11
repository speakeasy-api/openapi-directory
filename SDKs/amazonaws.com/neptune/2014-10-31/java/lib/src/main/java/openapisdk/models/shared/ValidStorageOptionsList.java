package openapisdk.models.shared;



/**
 * ValidStorageOptionsList
 * <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
**/
public class ValidStorageOptionsList {
    public DoubleRangeList[] iopsToStorageRatio;
    public ValidStorageOptionsList withIopsToStorageRatio(DoubleRangeList[] iopsToStorageRatio) {
        this.iopsToStorageRatio = iopsToStorageRatio;
        return this;
    }
    public RangeList[] provisionedIops;
    public ValidStorageOptionsList withProvisionedIops(RangeList[] provisionedIops) {
        this.provisionedIops = provisionedIops;
        return this;
    }
    public RangeList[] storageSize;
    public ValidStorageOptionsList withStorageSize(RangeList[] storageSize) {
        this.storageSize = storageSize;
        return this;
    }
    public String storageType;
    public ValidStorageOptionsList withStorageType(String storageType) {
        this.storageType = storageType;
        return this;
    }
}