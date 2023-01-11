package openapisdk.models.shared;



public class DeleteFleetsResult {
    public java.util.Map<String, Object> successfulFleetDeletions;
    public DeleteFleetsResult withSuccessfulFleetDeletions(java.util.Map<String, Object> successfulFleetDeletions) {
        this.successfulFleetDeletions = successfulFleetDeletions;
        return this;
    }
    public java.util.Map<String, Object> unsuccessfulFleetDeletions;
    public DeleteFleetsResult withUnsuccessfulFleetDeletions(java.util.Map<String, Object> unsuccessfulFleetDeletions) {
        this.unsuccessfulFleetDeletions = unsuccessfulFleetDeletions;
        return this;
    }
}