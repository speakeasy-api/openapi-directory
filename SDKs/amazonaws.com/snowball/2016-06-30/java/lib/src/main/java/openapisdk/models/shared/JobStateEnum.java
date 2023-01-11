package openapisdk.models.shared;


public enum JobStateEnum {
    NEW_("New"),
    PREPARING_APPLIANCE("PreparingAppliance"),
    PREPARING_SHIPMENT("PreparingShipment"),
    IN_TRANSIT_TO_CUSTOMER("InTransitToCustomer"),
    WITH_CUSTOMER("WithCustomer"),
    IN_TRANSIT_TO_AWS("InTransitToAWS"),
    WITH_AWS_SORTING_FACILITY("WithAWSSortingFacility"),
    WITH_AWS("WithAWS"),
    IN_PROGRESS("InProgress"),
    COMPLETE("Complete"),
    CANCELLED("Cancelled"),
    LISTING("Listing"),
    PENDING("Pending");

    public final String value;

    private JobStateEnum(String value) {
        this.value = value;
    }
}
