package openapisdk.models.operations;


public enum ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum {
    OK("ok"),
    NOT_FOUND("not_found"),
    ASSIGNED("assigned"),
    ALREADY_ASSIGNED("already_assigned"),
    SERVICE_DOWN("service_down");

    public final String value;

    private ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum(String value) {
        this.value = value;
    }
}
