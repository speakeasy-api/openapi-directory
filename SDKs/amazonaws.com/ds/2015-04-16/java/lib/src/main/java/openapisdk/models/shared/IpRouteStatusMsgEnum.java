package openapisdk.models.shared;


public enum IpRouteStatusMsgEnum {
    ADDING("Adding"),
    ADDED("Added"),
    REMOVING("Removing"),
    REMOVED("Removed"),
    ADD_FAILED("AddFailed"),
    REMOVE_FAILED("RemoveFailed");

    public final String value;

    private IpRouteStatusMsgEnum(String value) {
        this.value = value;
    }
}
