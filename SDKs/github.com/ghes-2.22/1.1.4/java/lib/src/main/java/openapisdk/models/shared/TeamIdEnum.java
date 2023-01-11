package openapisdk.models.shared;


public enum TeamIdEnum {
    MEMBER("member"),
    MAINTAINER("maintainer"),
    ALL("all");

    public final String value;

    private TeamIdEnum(String value) {
        this.value = value;
    }
}
