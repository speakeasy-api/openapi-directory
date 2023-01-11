package openapisdk.models.shared;



/**
 * TextArrayOptions
 * Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
**/
public class TextArrayOptions {
    public String analysisScheme;
    public TextArrayOptions withAnalysisScheme(String analysisScheme) {
        this.analysisScheme = analysisScheme;
        return this;
    }
    public String defaultValue;
    public TextArrayOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean highlightEnabled;
    public TextArrayOptions withHighlightEnabled(Boolean highlightEnabled) {
        this.highlightEnabled = highlightEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public TextArrayOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public String sourceFields;
    public TextArrayOptions withSourceFields(String sourceFields) {
        this.sourceFields = sourceFields;
        return this;
    }
}