package openapisdk.models.shared;


public enum ConnectorConfigProviderEnum {
    EKS_ANYWHERE("EKS_ANYWHERE"),
    ANTHOS("ANTHOS"),
    GKE("GKE"),
    AKS("AKS"),
    OPENSHIFT("OPENSHIFT"),
    TANZU("TANZU"),
    RANCHER("RANCHER"),
    EC2("EC2"),
    OTHER("OTHER");

    public final String value;

    private ConnectorConfigProviderEnum(String value) {
        this.value = value;
    }
}
