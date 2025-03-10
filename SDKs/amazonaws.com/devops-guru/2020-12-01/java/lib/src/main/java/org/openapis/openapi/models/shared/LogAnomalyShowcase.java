/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LogAnomalyShowcase -  A cluster of similar anomalous log events found within a log group. 
 */
public class LogAnomalyShowcase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogAnomalyClasses")
    public LogAnomalyClass[] logAnomalyClasses;

    public LogAnomalyShowcase withLogAnomalyClasses(LogAnomalyClass[] logAnomalyClasses) {
        this.logAnomalyClasses = logAnomalyClasses;
        return this;
    }
    
    public LogAnomalyShowcase(){}
}
