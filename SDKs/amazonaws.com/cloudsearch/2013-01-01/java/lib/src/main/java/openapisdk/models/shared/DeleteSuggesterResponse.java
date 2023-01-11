package openapisdk.models.shared;



/**
 * DeleteSuggesterResponse
 * The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
**/
public class DeleteSuggesterResponse {
    public SuggesterStatus suggester;
    public DeleteSuggesterResponse withSuggester(SuggesterStatus suggester) {
        this.suggester = suggester;
        return this;
    }
}