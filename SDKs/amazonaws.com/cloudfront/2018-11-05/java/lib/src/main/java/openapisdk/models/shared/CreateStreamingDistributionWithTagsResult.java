package openapisdk.models.shared;



/**
 * CreateStreamingDistributionWithTagsResult
 * The returned result of the corresponding request. 
**/
public class CreateStreamingDistributionWithTagsResult {
    public StreamingDistribution streamingDistribution;
    public CreateStreamingDistributionWithTagsResult withStreamingDistribution(StreamingDistribution streamingDistribution) {
        this.streamingDistribution = streamingDistribution;
        return this;
    }
}