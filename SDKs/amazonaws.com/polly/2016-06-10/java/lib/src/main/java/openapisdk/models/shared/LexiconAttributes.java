package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LexiconAttributes
 * Contains metadata describing the lexicon such as the number of lexemes, language code, and so on. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
**/
public class LexiconAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alphabet")
    public String alphabet;
    public LexiconAttributes withAlphabet(String alphabet) {
        this.alphabet = alphabet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public LexiconAttributes withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModified")
    public OffsetDateTime lastModified;
    public LexiconAttributes withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LexemesCount")
    public Long lexemesCount;
    public LexiconAttributes withLexemesCount(Long lexemesCount) {
        this.lexemesCount = lexemesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LexiconArn")
    public String lexiconArn;
    public LexiconAttributes withLexiconArn(String lexiconArn) {
        this.lexiconArn = lexiconArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Long size;
    public LexiconAttributes withSize(Long size) {
        this.size = size;
        return this;
    }
}