/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

/**
 * DescribeBundleTasksResultBundleTasks - Describes a bundle task.
 */
public class DescribeBundleTasksResultBundleTasks {
    
    public String bundleId;

    public DescribeBundleTasksResultBundleTasks withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    
    
    public DescribeBundleTasksResultBundleTasksBundleTaskError bundleTaskError;

    public DescribeBundleTasksResultBundleTasks withBundleTaskError(DescribeBundleTasksResultBundleTasksBundleTaskError bundleTaskError) {
        this.bundleTaskError = bundleTaskError;
        return this;
    }
    
    
    public String instanceId;

    public DescribeBundleTasksResultBundleTasks withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    
    
    public String progress;

    public DescribeBundleTasksResultBundleTasks withProgress(String progress) {
        this.progress = progress;
        return this;
    }
    
    
    public OffsetDateTime startTime;

    public DescribeBundleTasksResultBundleTasks withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    
    public DescribeBundleTasksResultBundleTasksStateEnum state;

    public DescribeBundleTasksResultBundleTasks withState(DescribeBundleTasksResultBundleTasksStateEnum state) {
        this.state = state;
        return this;
    }
    
    
    public DescribeBundleTasksResultBundleTasksStorage storage;

    public DescribeBundleTasksResultBundleTasks withStorage(DescribeBundleTasksResultBundleTasksStorage storage) {
        this.storage = storage;
        return this;
    }
    
    
    public OffsetDateTime updateTime;

    public DescribeBundleTasksResultBundleTasks withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public DescribeBundleTasksResultBundleTasks(){}
}
