package openapisdk.models.shared;



/**
 * OriginGroupFailoverCriteria
 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
**/
public class OriginGroupFailoverCriteria {
    public StatusCodes statusCodes;
    public OriginGroupFailoverCriteria withStatusCodes(StatusCodes statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
}