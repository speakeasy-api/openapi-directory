package openapisdk.models.shared;



/**
 * IpRangeList
 * Describes an IP range used in a security group.
**/
public class IpRangeList {
    public String cidrip;
    public IpRangeList withCidrip(String cidrip) {
        this.cidrip = cidrip;
        return this;
    }
    public String status;
    public IpRangeList withStatus(String status) {
        this.status = status;
        return this;
    }
    public TagList[] tags;
    public IpRangeList withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}