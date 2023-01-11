package openapisdk.models.shared;



/**
 * UpdateStemmingOptionsResponse
 * A response message that contains the status of updated stemming options.
**/
public class UpdateStemmingOptionsResponse {
    public StemmingOptionsStatus stems;
    public UpdateStemmingOptionsResponse withStems(StemmingOptionsStatus stems) {
        this.stems = stems;
        return this;
    }
}