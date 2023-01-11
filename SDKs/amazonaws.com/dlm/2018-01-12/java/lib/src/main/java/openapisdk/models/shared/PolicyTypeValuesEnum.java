package openapisdk.models.shared;


public enum PolicyTypeValuesEnum {
    EBS_SNAPSHOT_MANAGEMENT("EBS_SNAPSHOT_MANAGEMENT"),
    IMAGE_MANAGEMENT("IMAGE_MANAGEMENT"),
    EVENT_BASED_POLICY("EVENT_BASED_POLICY");

    public final String value;

    private PolicyTypeValuesEnum(String value) {
        this.value = value;
    }
}
