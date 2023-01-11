package openapisdk.models.shared;


public enum ClassDetailsCleverSubjectEnum {
    ENGLISH_LANGUAGE_ARTS("english/language arts"),
    MATH("math"),
    SCIENCE("science"),
    SOCIAL_STUDIES("social studies"),
    LANGUAGE("language"),
    HOMEROOM_ADVISORY("homeroom/advisory"),
    INTERVENTIONS_ONLINE_LEARNING("interventions/online learning"),
    TECHNOLOGY_AND_ENGINEERING("technology and engineering"),
    PE_AND_HEALTH("PE and health"),
    ARTS_AND_MUSIC("arts and music"),
    OTHER("other");

    public final String value;

    private ClassDetailsCleverSubjectEnum(String value) {
        this.value = value;
    }
}
