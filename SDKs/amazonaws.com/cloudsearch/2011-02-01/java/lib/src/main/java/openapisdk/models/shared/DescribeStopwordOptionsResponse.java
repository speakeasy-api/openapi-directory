package openapisdk.models.shared;



/**
 * DescribeStopwordOptionsResponse
 * A response message that contains the stopword options for a search domain.
**/
public class DescribeStopwordOptionsResponse {
    public StopwordOptionsStatus stopwords;
    public DescribeStopwordOptionsResponse withStopwords(StopwordOptionsStatus stopwords) {
        this.stopwords = stopwords;
        return this;
    }
}