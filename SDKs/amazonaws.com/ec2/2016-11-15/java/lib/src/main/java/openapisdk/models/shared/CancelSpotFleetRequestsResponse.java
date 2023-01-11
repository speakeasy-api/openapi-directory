package openapisdk.models.shared;



/**
 * CancelSpotFleetRequestsResponse
 * Contains the output of CancelSpotFleetRequests.
**/
public class CancelSpotFleetRequestsResponse {
    public java.util.Map<String, Object> successfulFleetRequests;
    public CancelSpotFleetRequestsResponse withSuccessfulFleetRequests(java.util.Map<String, Object> successfulFleetRequests) {
        this.successfulFleetRequests = successfulFleetRequests;
        return this;
    }
    public java.util.Map<String, Object> unsuccessfulFleetRequests;
    public CancelSpotFleetRequestsResponse withUnsuccessfulFleetRequests(java.util.Map<String, Object> unsuccessfulFleetRequests) {
        this.unsuccessfulFleetRequests = unsuccessfulFleetRequests;
        return this;
    }
}