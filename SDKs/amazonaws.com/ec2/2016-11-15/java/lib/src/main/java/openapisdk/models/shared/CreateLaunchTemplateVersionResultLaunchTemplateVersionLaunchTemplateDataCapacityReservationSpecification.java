package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
 * Information about the Capacity Reservation targeting option.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification {
    public java.util.Map<String, Object> capacityReservationPreference;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification withCapacityReservationPreference(java.util.Map<String, Object> capacityReservationPreference) {
        this.capacityReservationPreference = capacityReservationPreference;
        return this;
    }
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget capacityReservationTarget;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification withCapacityReservationTarget(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget capacityReservationTarget) {
        this.capacityReservationTarget = capacityReservationTarget;
        return this;
    }
}