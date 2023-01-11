package openapisdk.models.shared;



/**
 * IpRangeList
 *  This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
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
}