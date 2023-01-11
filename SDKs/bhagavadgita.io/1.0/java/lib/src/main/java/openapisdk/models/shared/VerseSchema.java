package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerseSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meaning")
    public String meaning;
    public VerseSchema withMeaning(String meaning) {
        this.meaning = meaning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public VerseSchema withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transliteration")
    public String transliteration;
    public VerseSchema withTransliteration(String transliteration) {
        this.transliteration = transliteration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verse_number")
    public String verseNumber;
    public VerseSchema withVerseNumber(String verseNumber) {
        this.verseNumber = verseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word_meanings")
    public String wordMeanings;
    public VerseSchema withWordMeanings(String wordMeanings) {
        this.wordMeanings = wordMeanings;
        return this;
    }
}