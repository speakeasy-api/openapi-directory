package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChapterSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_number")
    public Integer chapterNumber;
    public ChapterSchema withChapterNumber(Integer chapterNumber) {
        this.chapterNumber = chapterNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chapter_summary")
    public String chapterSummary;
    public ChapterSchema withChapterSummary(String chapterSummary) {
        this.chapterSummary = chapterSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChapterSchema withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name_meaning")
    public String nameMeaning;
    public ChapterSchema withNameMeaning(String nameMeaning) {
        this.nameMeaning = nameMeaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name_translation")
    public String nameTranslation;
    public ChapterSchema withNameTranslation(String nameTranslation) {
        this.nameTranslation = nameTranslation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name_transliterated")
    public String nameTransliterated;
    public ChapterSchema withNameTransliterated(String nameTransliterated) {
        this.nameTransliterated = nameTransliterated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verses_count")
    public Integer versesCount;
    public ChapterSchema withVersesCount(Integer versesCount) {
        this.versesCount = versesCount;
        return this;
    }
}