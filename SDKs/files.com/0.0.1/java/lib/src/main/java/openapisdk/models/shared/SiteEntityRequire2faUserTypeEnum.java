package openapisdk.models.shared;


public enum SiteEntityRequire2faUserTypeEnum {
    ALL("all"),
    FOLDER_AND_SITE_ADMINS("folder_and_site_admins"),
    SITE_ADMINS("site_admins");

    public final String value;

    private SiteEntityRequire2faUserTypeEnum(String value) {
        this.value = value;
    }
}
