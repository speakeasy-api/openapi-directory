package openapisdk.models.shared;



/**
 * CreateInvalidationResult
 * The returned result of the corresponding request.
**/
public class CreateInvalidationResult {
    public Invalidation invalidation;
    public CreateInvalidationResult withInvalidation(Invalidation invalidation) {
        this.invalidation = invalidation;
        return this;
    }
}