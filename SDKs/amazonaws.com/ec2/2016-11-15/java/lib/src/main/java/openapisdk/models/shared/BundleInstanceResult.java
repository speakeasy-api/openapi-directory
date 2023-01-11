package openapisdk.models.shared;



/**
 * BundleInstanceResult
 * Contains the output of BundleInstance.
**/
public class BundleInstanceResult {
    public BundleInstanceResultBundleTask bundleTask;
    public BundleInstanceResult withBundleTask(BundleInstanceResultBundleTask bundleTask) {
        this.bundleTask = bundleTask;
        return this;
    }
}