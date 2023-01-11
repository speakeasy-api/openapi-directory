package openapisdk.models.shared;


public enum ScoreLicenseEnum {
    COPYRIGHT("copyright"),
    CC0("cc0"),
    CC_BY("cc-by"),
    CC_BY_SA("cc-by-sa"),
    CC_BY_ND("cc-by-nd"),
    CC_BY_NC("cc-by-nc"),
    CC_BY_NC_SA("cc-by-nc-sa"),
    CC_BY_NC_ND("cc-by-nc-nd");

    public final String value;

    private ScoreLicenseEnum(String value) {
        this.value = value;
    }
}
