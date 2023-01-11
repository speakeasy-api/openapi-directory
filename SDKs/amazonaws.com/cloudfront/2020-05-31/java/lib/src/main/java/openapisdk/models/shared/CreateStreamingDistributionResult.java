package openapisdk.models.shared;



/**
 * CreateStreamingDistributionResult
 * The returned result of the corresponding request.
**/
public class CreateStreamingDistributionResult {
    public StreamingDistribution streamingDistribution;
    public CreateStreamingDistributionResult withStreamingDistribution(StreamingDistribution streamingDistribution) {
        this.streamingDistribution = streamingDistribution;
        return this;
    }
}