package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
 * Information about the target Capacity Reservation or Capacity Reservation group.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget {
    public java.util.Map<String, Object> capacityReservationId;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget withCapacityReservationId(java.util.Map<String, Object> capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    public java.util.Map<String, Object> capacityReservationResourceGroupArn;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget withCapacityReservationResourceGroupArn(java.util.Map<String, Object> capacityReservationResourceGroupArn) {
        this.capacityReservationResourceGroupArn = capacityReservationResourceGroupArn;
        return this;
    }
}