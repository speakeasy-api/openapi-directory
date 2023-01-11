package openapisdk.models.shared;


public enum PublicationTypeEnum {
    PUBLISH_PRODUCTS("PublishProducts"),
    PUBLISH_OFFERS("PublishOffers"),
    UNPUBLISH("Unpublish");

    public final String value;

    private PublicationTypeEnum(String value) {
        this.value = value;
    }
}
