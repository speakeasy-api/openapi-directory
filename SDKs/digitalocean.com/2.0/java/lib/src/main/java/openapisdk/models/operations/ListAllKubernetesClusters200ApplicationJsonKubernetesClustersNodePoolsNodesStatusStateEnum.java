package openapisdk.models.operations;


public enum ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum {
    PROVISIONING("provisioning"),
    RUNNING("running"),
    DRAINING("draining"),
    DELETING("deleting");

    public final String value;

    private ListAllKubernetesClusters200ApplicationJsonKubernetesClustersNodePoolsNodesStatusStateEnum(String value) {
        this.value = value;
    }
}
