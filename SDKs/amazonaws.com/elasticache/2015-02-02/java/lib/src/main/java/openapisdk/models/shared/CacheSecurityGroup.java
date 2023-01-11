package openapisdk.models.shared;



/**
 * CacheSecurityGroup
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
**/
public class CacheSecurityGroup {
    public String arn;
    public CacheSecurityGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String cacheSecurityGroupName;
    public CacheSecurityGroup withCacheSecurityGroupName(String cacheSecurityGroupName) {
        this.cacheSecurityGroupName = cacheSecurityGroupName;
        return this;
    }
    public String description;
    public CacheSecurityGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public Ec2SecurityGroupList[] ec2SecurityGroups;
    public CacheSecurityGroup withEc2SecurityGroups(Ec2SecurityGroupList[] ec2SecurityGroups) {
        this.ec2SecurityGroups = ec2SecurityGroups;
        return this;
    }
    public String ownerId;
    public CacheSecurityGroup withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
}