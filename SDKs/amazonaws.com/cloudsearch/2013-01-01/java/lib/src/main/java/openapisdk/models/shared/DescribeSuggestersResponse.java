package openapisdk.models.shared;



/**
 * DescribeSuggestersResponse
 * The result of a <code>DescribeSuggesters</code> request.
**/
public class DescribeSuggestersResponse {
    public SuggesterStatus[] suggesters;
    public DescribeSuggestersResponse withSuggesters(SuggesterStatus[] suggesters) {
        this.suggesters = suggesters;
        return this;
    }
}