package openapisdk.models.shared;



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