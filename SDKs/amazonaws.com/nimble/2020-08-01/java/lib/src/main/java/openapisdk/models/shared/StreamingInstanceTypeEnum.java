package openapisdk.models.shared;


public enum StreamingInstanceTypeEnum {
    G4DN_XLARGE("g4dn.xlarge"),
    G4DN2XLARGE("g4dn.2xlarge"),
    G4DN4XLARGE("g4dn.4xlarge"),
    G4DN8XLARGE("g4dn.8xlarge"),
    G4DN12XLARGE("g4dn.12xlarge"),
    G4DN16XLARGE("g4dn.16xlarge");

    public final String value;

    private StreamingInstanceTypeEnum(String value) {
        this.value = value;
    }
}
