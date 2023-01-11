package openapisdk.models.shared;



/**
 * BundleInstanceResultBundleTask
 * Information about the bundle task.
**/
public class BundleInstanceResultBundleTask {
    public java.util.Map<String, Object> bundleId;
    public BundleInstanceResultBundleTask withBundleId(java.util.Map<String, Object> bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    public BundleInstanceResultBundleTaskBundleTaskError bundleTaskError;
    public BundleInstanceResultBundleTask withBundleTaskError(BundleInstanceResultBundleTaskBundleTaskError bundleTaskError) {
        this.bundleTaskError = bundleTaskError;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public BundleInstanceResultBundleTask withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> progress;
    public BundleInstanceResultBundleTask withProgress(java.util.Map<String, Object> progress) {
        this.progress = progress;
        return this;
    }
    public java.util.Map<String, Object> startTime;
    public BundleInstanceResultBundleTask withStartTime(java.util.Map<String, Object> startTime) {
        this.startTime = startTime;
        return this;
    }
    public java.util.Map<String, Object> state;
    public BundleInstanceResultBundleTask withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public BundleInstanceResultBundleTaskStorage storage;
    public BundleInstanceResultBundleTask withStorage(BundleInstanceResultBundleTaskStorage storage) {
        this.storage = storage;
        return this;
    }
    public java.util.Map<String, Object> updateTime;
    public BundleInstanceResultBundleTask withUpdateTime(java.util.Map<String, Object> updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}