package openapisdk.models.shared;


public enum CapacityProviderUpdateStatusEnum {
    DELETE_IN_PROGRESS("DELETE_IN_PROGRESS"),
    DELETE_COMPLETE("DELETE_COMPLETE"),
    DELETE_FAILED("DELETE_FAILED"),
    UPDATE_IN_PROGRESS("UPDATE_IN_PROGRESS"),
    UPDATE_COMPLETE("UPDATE_COMPLETE"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private CapacityProviderUpdateStatusEnum(String value) {
        this.value = value;
    }
}
