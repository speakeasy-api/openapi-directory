/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ShutdownEventConfiguration - The Shutdown event configuration.
 */
public class ShutdownEventConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DelayUntilElbConnectionsDrained")
    public Boolean delayUntilElbConnectionsDrained;

    public ShutdownEventConfiguration withDelayUntilElbConnectionsDrained(Boolean delayUntilElbConnectionsDrained) {
        this.delayUntilElbConnectionsDrained = delayUntilElbConnectionsDrained;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionTimeout")
    public Long executionTimeout;

    public ShutdownEventConfiguration withExecutionTimeout(Long executionTimeout) {
        this.executionTimeout = executionTimeout;
        return this;
    }
    
    public ShutdownEventConfiguration(){}
}
