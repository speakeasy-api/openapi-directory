package openapisdk.models.shared;



/**
 * DefineSuggesterResponse
 * The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
**/
public class DefineSuggesterResponse {
    public SuggesterStatus suggester;
    public DefineSuggesterResponse withSuggester(SuggesterStatus suggester) {
        this.suggester = suggester;
        return this;
    }
}