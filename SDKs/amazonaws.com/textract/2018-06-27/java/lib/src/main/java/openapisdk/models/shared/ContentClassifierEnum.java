package openapisdk.models.shared;


public enum ContentClassifierEnum {
    FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION("FreeOfPersonallyIdentifiableInformation"),
    FREE_OF_ADULT_CONTENT("FreeOfAdultContent");

    public final String value;

    private ContentClassifierEnum(String value) {
        this.value = value;
    }
}
