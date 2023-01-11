package openapisdk.models.shared;


public enum RecordCategoryEnum {
    NEWSPAPERS("Newspapers"),
    IMAGES("Images"),
    BOOKS("Books"),
    ARTICLES("Articles"),
    JOURNALS("Journals"),
    ARCHIVES("Archives"),
    AUDIO("Audio"),
    OTHER("Other"),
    MANUSCRIPTS("Manuscripts"),
    REFERENCE_SOURCES("Reference sources"),
    RESEARCH_PAPERS("Research papers"),
    VIDEOS("Videos"),
    MUSIC_SCORE("Music Score"),
    GROUPS("Groups"),
    DATA("Data"),
    WEBSITES("Websites"),
    SETS("Sets");

    public final String value;

    private RecordCategoryEnum(String value) {
        this.value = value;
    }
}
