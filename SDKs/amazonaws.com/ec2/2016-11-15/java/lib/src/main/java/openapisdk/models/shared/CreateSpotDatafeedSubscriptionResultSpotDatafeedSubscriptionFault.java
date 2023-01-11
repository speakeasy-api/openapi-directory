package openapisdk.models.shared;



/**
 * CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
 * The fault codes for the Spot Instance request, if any.
**/
public class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault {
    public java.util.Map<String, Object> code;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault withCode(java.util.Map<String, Object> code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, Object> message;
    public CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
}