package openapisdk.models.operations;


public enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum {
    RUNNING("running"),
    PROVISIONING("provisioning"),
    DEGRADED("degraded"),
    ERROR("error"),
    DELETED("deleted"),
    UPGRADING("upgrading"),
    DELETING("deleting");

    public final String value;

    private ListAllKubernetesClusters200ApplicationJsonKubernetesClustersStatusStateEnum(String value) {
        this.value = value;
    }
}
