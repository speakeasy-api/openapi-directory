/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



public class DescribeBundleTasksRequest {
    
    public String[] bundleIds;

    public DescribeBundleTasksRequest withBundleIds(String[] bundleIds) {
        this.bundleIds = bundleIds;
        return this;
    }
    
    
    public Boolean dryRun;

    public DescribeBundleTasksRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public DescribeBundleTasksRequestFilters[] filters;

    public DescribeBundleTasksRequest withFilters(DescribeBundleTasksRequestFilters[] filters) {
        this.filters = filters;
        return this;
    }
    
    public DescribeBundleTasksRequest(){}
}
