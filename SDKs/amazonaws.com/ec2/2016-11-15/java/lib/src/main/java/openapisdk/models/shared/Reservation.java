package openapisdk.models.shared;



/**
 * Reservation
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
**/
public class Reservation {
    public java.util.Map<String, Object> groups;
    public Reservation withGroups(java.util.Map<String, Object> groups) {
        this.groups = groups;
        return this;
    }
    public java.util.Map<String, Object> instances;
    public Reservation withInstances(java.util.Map<String, Object> instances) {
        this.instances = instances;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public Reservation withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> requesterId;
    public Reservation withRequesterId(java.util.Map<String, Object> requesterId) {
        this.requesterId = requesterId;
        return this;
    }
    public java.util.Map<String, Object> reservationId;
    public Reservation withReservationId(java.util.Map<String, Object> reservationId) {
        this.reservationId = reservationId;
        return this;
    }
}