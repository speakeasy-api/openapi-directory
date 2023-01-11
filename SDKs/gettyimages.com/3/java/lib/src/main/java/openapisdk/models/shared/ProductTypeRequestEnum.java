package openapisdk.models.shared;


public enum ProductTypeRequestEnum {
    EASYACCESS("easyaccess"),
    EDITORIALSUBSCRIPTION("editorialsubscription"),
    IMAGEPACK("imagepack"),
    PREMIUMACCESS("premiumaccess"),
    ROYALTYFREESUBSCRIPTION("royaltyfreesubscription");

    public final String value;

    private ProductTypeRequestEnum(String value) {
        this.value = value;
    }
}
