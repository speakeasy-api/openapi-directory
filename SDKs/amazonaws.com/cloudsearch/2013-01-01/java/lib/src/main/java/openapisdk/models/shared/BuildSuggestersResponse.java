package openapisdk.models.shared;



/**
 * BuildSuggestersResponse
 * The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
**/
public class BuildSuggestersResponse {
    public String[] fieldNames;
    public BuildSuggestersResponse withFieldNames(String[] fieldNames) {
        this.fieldNames = fieldNames;
        return this;
    }
}