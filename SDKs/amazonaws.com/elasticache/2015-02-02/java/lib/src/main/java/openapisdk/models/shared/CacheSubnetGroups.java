package openapisdk.models.shared;



/**
 * CacheSubnetGroups
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
**/
public class CacheSubnetGroups {
    public String arn;
    public CacheSubnetGroups withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String cacheSubnetGroupDescription;
    public CacheSubnetGroups withCacheSubnetGroupDescription(String cacheSubnetGroupDescription) {
        this.cacheSubnetGroupDescription = cacheSubnetGroupDescription;
        return this;
    }
    public String cacheSubnetGroupName;
    public CacheSubnetGroups withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    public SubnetList[] subnets;
    public CacheSubnetGroups withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    public String vpcId;
    public CacheSubnetGroups withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}