package openapisdk.models.shared;


public enum RadiusAuthenticationProtocolEnum {
    PAP("PAP"),
    CHAP("CHAP"),
    MS_CHA_PV1("MS-CHAPv1"),
    MS_CHA_PV2("MS-CHAPv2");

    public final String value;

    private RadiusAuthenticationProtocolEnum(String value) {
        this.value = value;
    }
}
