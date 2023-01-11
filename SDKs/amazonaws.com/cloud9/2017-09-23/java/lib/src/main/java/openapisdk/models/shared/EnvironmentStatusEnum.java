package openapisdk.models.shared;


public enum EnvironmentStatusEnum {
    ERROR("error"),
    CREATING("creating"),
    CONNECTING("connecting"),
    READY("ready"),
    STOPPING("stopping"),
    STOPPED("stopped"),
    DELETING("deleting");

    public final String value;

    private EnvironmentStatusEnum(String value) {
        this.value = value;
    }
}
