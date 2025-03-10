/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * InstanceEventWindowTimeRangeRequest - The start day and time and the end day and time of the time range, in UTC.
 */
public class InstanceEventWindowTimeRangeRequest {
    
    public Long endHour;

    public InstanceEventWindowTimeRangeRequest withEndHour(Long endHour) {
        this.endHour = endHour;
        return this;
    }
    
    
    public WeekDayEnum endWeekDay;

    public InstanceEventWindowTimeRangeRequest withEndWeekDay(WeekDayEnum endWeekDay) {
        this.endWeekDay = endWeekDay;
        return this;
    }
    
    
    public Long startHour;

    public InstanceEventWindowTimeRangeRequest withStartHour(Long startHour) {
        this.startHour = startHour;
        return this;
    }
    
    
    public WeekDayEnum startWeekDay;

    public InstanceEventWindowTimeRangeRequest withStartWeekDay(WeekDayEnum startWeekDay) {
        this.startWeekDay = startWeekDay;
        return this;
    }
    
    public InstanceEventWindowTimeRangeRequest(){}
}
