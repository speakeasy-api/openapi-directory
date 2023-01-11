package openapisdk.models.shared;


public enum ProvisioningArtifactTypeEnum {
    CLOUD_FORMATION_TEMPLATE("CLOUD_FORMATION_TEMPLATE"),
    MARKETPLACE_AMI("MARKETPLACE_AMI"),
    MARKETPLACE_CAR("MARKETPLACE_CAR");

    public final String value;

    private ProvisioningArtifactTypeEnum(String value) {
        this.value = value;
    }
}
