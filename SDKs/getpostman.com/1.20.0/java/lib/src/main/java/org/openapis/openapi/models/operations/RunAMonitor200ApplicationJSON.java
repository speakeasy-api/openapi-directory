/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RunAMonitor200ApplicationJSON - Monitor Run with Errors
 */
public class RunAMonitor200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public RunAMonitor200ApplicationJSONRun run;

    public RunAMonitor200ApplicationJSON withRun(RunAMonitor200ApplicationJSONRun run) {
        this.run = run;
        return this;
    }
    
    public RunAMonitor200ApplicationJSON(){}
}
