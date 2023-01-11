package openapisdk.models.shared;



/**
 * DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
 * The fault codes for the Spot Instance request, if any.
**/
public class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault {
    public java.util.Map<String, Object> code;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault withCode(java.util.Map<String, Object> code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, Object> message;
    public DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
}