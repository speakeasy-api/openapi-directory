package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification
 * Information about the Capacity Reservation targeting option.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification {
    public java.util.Map<String, Object> capacityReservationPreference;
    public GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification withCapacityReservationPreference(java.util.Map<String, Object> capacityReservationPreference) {
        this.capacityReservationPreference = capacityReservationPreference;
        return this;
    }
    public GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget capacityReservationTarget;
    public GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecification withCapacityReservationTarget(GetLaunchTemplateDataResultLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget capacityReservationTarget) {
        this.capacityReservationTarget = capacityReservationTarget;
        return this;
    }
}