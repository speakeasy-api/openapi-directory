package openapisdk.models.shared;



/**
 * DescribeStemmingOptionsResponse
 * A response message that contains the stemming options for a search domain.
**/
public class DescribeStemmingOptionsResponse {
    public StemmingOptionsStatus stems;
    public DescribeStemmingOptionsResponse withStems(StemmingOptionsStatus stems) {
        this.stems = stems;
        return this;
    }
}