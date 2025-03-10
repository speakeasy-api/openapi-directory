/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DataQuery - A query used for retrieving network health data. 
 */
public class DataQuery {
    
    public String destination;

    public DataQuery withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    
    
    public String id;

    public DataQuery withId(String id) {
        this.id = id;
        return this;
    }
    
    
    public MetricTypeEnum metric;

    public DataQuery withMetric(MetricTypeEnum metric) {
        this.metric = metric;
        return this;
    }
    
    
    public PeriodTypeEnum period;

    public DataQuery withPeriod(PeriodTypeEnum period) {
        this.period = period;
        return this;
    }
    
    
    public String source;

    public DataQuery withSource(String source) {
        this.source = source;
        return this;
    }
    
    
    public StatisticTypeEnum statistic;

    public DataQuery withStatistic(StatisticTypeEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    
    public DataQuery(){}
}
