package openapisdk.models.shared;



/**
 * InvalidationBatch
 * An invalidation batch.
**/
public class InvalidationBatch {
    public String callerReference;
    public InvalidationBatch withCallerReference(String callerReference) {
        this.callerReference = callerReference;
        return this;
    }
    public Paths paths;
    public InvalidationBatch withPaths(Paths paths) {
        this.paths = paths;
        return this;
    }
}