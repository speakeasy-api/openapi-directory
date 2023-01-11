package openapisdk.models.shared;



/**
 * UpdateStopwordOptionsResponse
 * A response message that contains the status of updated stopword options.
**/
public class UpdateStopwordOptionsResponse {
    public StopwordOptionsStatus stopwords;
    public UpdateStopwordOptionsResponse withStopwords(StopwordOptionsStatus stopwords) {
        this.stopwords = stopwords;
        return this;
    }
}