package openapisdk.models.shared;


public enum ContainerServiceStateEnum {
    PENDING("PENDING"),
    READY("READY"),
    RUNNING("RUNNING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    DISABLED("DISABLED"),
    DEPLOYING("DEPLOYING");

    public final String value;

    private ContainerServiceStateEnum(String value) {
        this.value = value;
    }
}
