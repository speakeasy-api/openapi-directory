package openapisdk.models.shared;



/**
 * AliasIcpRecordals
 * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
**/
public class AliasIcpRecordals {
    public String cname;
    public AliasIcpRecordals withCname(String cname) {
        this.cname = cname;
        return this;
    }
    public IcpRecordalStatusEnum icpRecordalStatus;
    public AliasIcpRecordals withIcpRecordalStatus(IcpRecordalStatusEnum icpRecordalStatus) {
        this.icpRecordalStatus = icpRecordalStatus;
        return this;
    }
}