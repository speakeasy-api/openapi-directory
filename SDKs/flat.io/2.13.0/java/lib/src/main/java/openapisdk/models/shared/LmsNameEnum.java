package openapisdk.models.shared;


public enum LmsNameEnum {
    CANVAS("canvas"),
    MOODLE("moodle"),
    SCHOOLOGY("schoology"),
    BLACKBOARD("blackboard"),
    DESIRE2LEARN("desire2learn"),
    SAKAI("sakai"),
    SCHOOLBOX("schoolbox"),
    OTHER("other");

    public final String value;

    private LmsNameEnum(String value) {
        this.value = value;
    }
}
