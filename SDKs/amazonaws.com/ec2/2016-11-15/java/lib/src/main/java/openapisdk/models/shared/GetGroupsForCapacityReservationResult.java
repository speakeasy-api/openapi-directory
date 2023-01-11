package openapisdk.models.shared;



public class GetGroupsForCapacityReservationResult {
    public java.util.Map<String, Object> capacityReservationGroups;
    public GetGroupsForCapacityReservationResult withCapacityReservationGroups(java.util.Map<String, Object> capacityReservationGroups) {
        this.capacityReservationGroups = capacityReservationGroups;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public GetGroupsForCapacityReservationResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}