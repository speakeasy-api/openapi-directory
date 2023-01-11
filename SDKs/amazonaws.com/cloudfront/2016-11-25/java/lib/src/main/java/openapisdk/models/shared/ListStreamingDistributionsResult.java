package openapisdk.models.shared;



/**
 * ListStreamingDistributionsResult
 * The returned result of the corresponding request. 
**/
public class ListStreamingDistributionsResult {
    public StreamingDistributionList streamingDistributionList;
    public ListStreamingDistributionsResult withStreamingDistributionList(StreamingDistributionList streamingDistributionList) {
        this.streamingDistributionList = streamingDistributionList;
        return this;
    }
}