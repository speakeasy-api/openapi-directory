package openapisdk.models.shared;


public enum ProductTypeResponseEnum {
    EASYACCESS("easyaccess"),
    EDITORIALSUBSCRIPTION("editorialsubscription"),
    IMAGEPACK("imagepack"),
    PREMIUMACCESS("premiumaccess"),
    ROYALTYFREESUBSCRIPTION("royaltyfreesubscription"),
    CREDITPACK("creditpack");

    public final String value;

    private ProductTypeResponseEnum(String value) {
        this.value = value;
    }
}
