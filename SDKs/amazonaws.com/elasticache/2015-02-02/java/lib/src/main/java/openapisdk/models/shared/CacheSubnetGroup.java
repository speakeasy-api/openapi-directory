package openapisdk.models.shared;



/**
 * CacheSubnetGroup
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
**/
public class CacheSubnetGroup {
    public String arn;
    public CacheSubnetGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String cacheSubnetGroupDescription;
    public CacheSubnetGroup withCacheSubnetGroupDescription(String cacheSubnetGroupDescription) {
        this.cacheSubnetGroupDescription = cacheSubnetGroupDescription;
        return this;
    }
    public String cacheSubnetGroupName;
    public CacheSubnetGroup withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    public SubnetList[] subnets;
    public CacheSubnetGroup withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    public String vpcId;
    public CacheSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}