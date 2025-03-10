/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AnalyticsOperatingSystemCountsDefaultApplicationJSON - Error
 */
public class AnalyticsOperatingSystemCountsDefaultApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public AnalyticsOperatingSystemCountsDefaultApplicationJSONError error;

    public AnalyticsOperatingSystemCountsDefaultApplicationJSON withError(AnalyticsOperatingSystemCountsDefaultApplicationJSONError error) {
        this.error = error;
        return this;
    }
    
    public AnalyticsOperatingSystemCountsDefaultApplicationJSON(){}
}
