package openapisdk.models.shared;



/**
 * CancelBundleTaskResultBundleTask
 * Information about the bundle task.
**/
public class CancelBundleTaskResultBundleTask {
    public java.util.Map<String, Object> bundleId;
    public CancelBundleTaskResultBundleTask withBundleId(java.util.Map<String, Object> bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    public CancelBundleTaskResultBundleTaskBundleTaskError bundleTaskError;
    public CancelBundleTaskResultBundleTask withBundleTaskError(CancelBundleTaskResultBundleTaskBundleTaskError bundleTaskError) {
        this.bundleTaskError = bundleTaskError;
        return this;
    }
    public java.util.Map<String, Object> instanceId;
    public CancelBundleTaskResultBundleTask withInstanceId(java.util.Map<String, Object> instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public java.util.Map<String, Object> progress;
    public CancelBundleTaskResultBundleTask withProgress(java.util.Map<String, Object> progress) {
        this.progress = progress;
        return this;
    }
    public java.util.Map<String, Object> startTime;
    public CancelBundleTaskResultBundleTask withStartTime(java.util.Map<String, Object> startTime) {
        this.startTime = startTime;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CancelBundleTaskResultBundleTask withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public CancelBundleTaskResultBundleTaskStorage storage;
    public CancelBundleTaskResultBundleTask withStorage(CancelBundleTaskResultBundleTaskStorage storage) {
        this.storage = storage;
        return this;
    }
    public java.util.Map<String, Object> updateTime;
    public CancelBundleTaskResultBundleTask withUpdateTime(java.util.Map<String, Object> updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}