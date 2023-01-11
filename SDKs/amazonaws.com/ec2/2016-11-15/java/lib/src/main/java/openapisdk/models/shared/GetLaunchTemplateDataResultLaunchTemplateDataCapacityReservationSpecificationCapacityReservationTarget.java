package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget {
    public java.util.Map<String, Object> capacityReservationId;
    public GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget withCapacityReservationId(java.util.Map<String, Object> capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    public java.util.Map<String, Object> capacityReservationResourceGroupArn;
    public GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget withCapacityReservationResourceGroupArn(java.util.Map<String, Object> capacityReservationResourceGroupArn) {
        this.capacityReservationResourceGroupArn = capacityReservationResourceGroupArn;
        return this;
    }
}