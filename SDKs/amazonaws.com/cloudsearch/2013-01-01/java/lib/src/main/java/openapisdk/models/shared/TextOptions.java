package openapisdk.models.shared;



/**
 * TextOptions
 * Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
**/
public class TextOptions {
    public String analysisScheme;
    public TextOptions withAnalysisScheme(String analysisScheme) {
        this.analysisScheme = analysisScheme;
        return this;
    }
    public String defaultValue;
    public TextOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean highlightEnabled;
    public TextOptions withHighlightEnabled(Boolean highlightEnabled) {
        this.highlightEnabled = highlightEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public TextOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean sortEnabled;
    public TextOptions withSortEnabled(Boolean sortEnabled) {
        this.sortEnabled = sortEnabled;
        return this;
    }
    public String sourceField;
    public TextOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}