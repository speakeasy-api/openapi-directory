package openapisdk.models.shared;


public enum TeamSlugEnum {
    MEMBER("member"),
    MAINTAINER("maintainer"),
    ALL("all");

    public final String value;

    private TeamSlugEnum(String value) {
        this.value = value;
    }
}
