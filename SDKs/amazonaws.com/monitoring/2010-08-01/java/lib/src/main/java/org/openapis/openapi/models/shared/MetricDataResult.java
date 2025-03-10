/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

/**
 * MetricDataResult - A &lt;code&gt;GetMetricData&lt;/code&gt; call returns an array of &lt;code&gt;MetricDataResult&lt;/code&gt; structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
 */
public class MetricDataResult {
    
    public String id;

    public MetricDataResult withId(String id) {
        this.id = id;
        return this;
    }
    
    
    public String label;

    public MetricDataResult withLabel(String label) {
        this.label = label;
        return this;
    }
    
    
    public MessageData[] messages;

    public MetricDataResult withMessages(MessageData[] messages) {
        this.messages = messages;
        return this;
    }
    
    
    public StatusCodeEnum statusCode;

    public MetricDataResult withStatusCode(StatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public OffsetDateTime[] timestamps;

    public MetricDataResult withTimestamps(OffsetDateTime[] timestamps) {
        this.timestamps = timestamps;
        return this;
    }
    
    
    public Double[] values;

    public MetricDataResult withValues(Double[] values) {
        this.values = values;
        return this;
    }
    
    public MetricDataResult(){}
}
