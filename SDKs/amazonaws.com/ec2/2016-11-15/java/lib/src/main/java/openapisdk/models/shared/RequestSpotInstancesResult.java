package openapisdk.models.shared;



/**
 * RequestSpotInstancesResult
 * Contains the output of RequestSpotInstances.
**/
public class RequestSpotInstancesResult {
    public java.util.Map<String, Object> spotInstanceRequests;
    public RequestSpotInstancesResult withSpotInstanceRequests(java.util.Map<String, Object> spotInstanceRequests) {
        this.spotInstanceRequests = spotInstanceRequests;
        return this;
    }
}