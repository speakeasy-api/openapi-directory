package openapisdk.models.shared;



/**
 * SourceDataTrimTitle
 * Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
**/
public class SourceDataTrimTitle {
    public String defaultValue;
    public SourceDataTrimTitle withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public String language;
    public SourceDataTrimTitle withLanguage(String language) {
        this.language = language;
        return this;
    }
    public String separator;
    public SourceDataTrimTitle withSeparator(String separator) {
        this.separator = separator;
        return this;
    }
    public String sourceName;
    public SourceDataTrimTitle withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
}