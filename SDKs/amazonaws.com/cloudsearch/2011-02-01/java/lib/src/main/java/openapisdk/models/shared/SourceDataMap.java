package openapisdk.models.shared;



/**
 * SourceDataMap
 * Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
**/
public class SourceDataMap {
    public java.util.Map<String, String> cases;
    public SourceDataMap withCases(java.util.Map<String, String> cases) {
        this.cases = cases;
        return this;
    }
    public String defaultValue;
    public SourceDataMap withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public String sourceName;
    public SourceDataMap withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
}