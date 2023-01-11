package openapisdk.models.shared;


public enum PartyTypeEnum {
    INDIVIDUAL("INDIVIDUAL"),
    BUSINESS("BUSINESS"),
    OTHER("OTHER");

    public final String value;

    private PartyTypeEnum(String value) {
        this.value = value;
    }
}
