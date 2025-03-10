/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimeAlignmentBoundary - &lt;p&gt;The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don't provide a time boundary, Forecast uses a set of &lt;a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries"&gt;Default Time Boundaries&lt;/a&gt;. &lt;/p&gt; &lt;p&gt;For more information about aggregation, see &lt;a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html"&gt;Data Aggregation for Different Forecast Frequencies&lt;/a&gt;. For more information setting a custom time boundary, see &lt;a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary"&gt;Specifying a Time Boundary&lt;/a&gt;. &lt;/p&gt;
 */
public class TimeAlignmentBoundary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayOfMonth")
    public Long dayOfMonth;

    public TimeAlignmentBoundary withDayOfMonth(Long dayOfMonth) {
        this.dayOfMonth = dayOfMonth;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DayOfWeek")
    public DayOfWeekEnum dayOfWeek;

    public TimeAlignmentBoundary withDayOfWeek(DayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hour")
    public Long hour;

    public TimeAlignmentBoundary withHour(Long hour) {
        this.hour = hour;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Month")
    public MonthEnum month;

    public TimeAlignmentBoundary withMonth(MonthEnum month) {
        this.month = month;
        return this;
    }
    
    public TimeAlignmentBoundary(){}
}
