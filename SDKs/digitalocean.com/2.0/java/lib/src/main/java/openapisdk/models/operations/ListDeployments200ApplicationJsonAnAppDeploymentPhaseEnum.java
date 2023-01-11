package openapisdk.models.operations;


public enum ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum {
    UNKNOWN("UNKNOWN"),
    PENDING_BUILD("PENDING_BUILD"),
    BUILDING("BUILDING"),
    PENDING_DEPLOY("PENDING_DEPLOY"),
    DEPLOYING("DEPLOYING"),
    ACTIVE("ACTIVE"),
    SUPERSEDED("SUPERSEDED"),
    ERROR("ERROR"),
    CANCELED("CANCELED");

    public final String value;

    private ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum(String value) {
        this.value = value;
    }
}
