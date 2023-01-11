package openapisdk.models.shared;



/**
 * CreateSubnetCidrReservationResultSubnetCidrReservation
 * Information about the created subnet CIDR reservation.
**/
public class CreateSubnetCidrReservationResultSubnetCidrReservation {
    public java.util.Map<String, Object> cidr;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withCidr(java.util.Map<String, Object> cidr) {
        this.cidr = cidr;
        return this;
    }
    public java.util.Map<String, Object> description;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> reservationType;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withReservationType(java.util.Map<String, Object> reservationType) {
        this.reservationType = reservationType;
        return this;
    }
    public java.util.Map<String, Object> subnetCidrReservationId;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withSubnetCidrReservationId(java.util.Map<String, Object> subnetCidrReservationId) {
        this.subnetCidrReservationId = subnetCidrReservationId;
        return this;
    }
    public java.util.Map<String, Object> subnetId;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withSubnetId(java.util.Map<String, Object> subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateSubnetCidrReservationResultSubnetCidrReservation withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}