package openapisdk.models.shared;


public enum SectionGradeEnum {
    ONE("1"),
    TWO("2"),
    THREE("3"),
    FOUR("4"),
    FIVE("5"),
    SIX("6"),
    SEVEN("7"),
    EIGHT("8"),
    NINE("9"),
    TEN("10"),
    ELEVEN("11"),
    TWELVE("12"),
    PRE_KINDERGARTEN("PreKindergarten"),
    KINDERGARTEN("Kindergarten"),
    POST_GRADUATE("PostGraduate"),
    OTHER("Other");

    public final String value;

    private SectionGradeEnum(String value) {
        this.value = value;
    }
}
