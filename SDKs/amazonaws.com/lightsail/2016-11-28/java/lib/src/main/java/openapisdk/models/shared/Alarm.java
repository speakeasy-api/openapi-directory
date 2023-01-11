package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Alarm
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
**/
public class Alarm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Alarm withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public Alarm withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactProtocols")
    public ContactProtocolEnum[] contactProtocols;
    public Alarm withContactProtocols(ContactProtocolEnum[] contactProtocols) {
        this.contactProtocols = contactProtocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Alarm withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datapointsToAlarm")
    public Long datapointsToAlarm;
    public Alarm withDatapointsToAlarm(Long datapointsToAlarm) {
        this.datapointsToAlarm = datapointsToAlarm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationPeriods")
    public Long evaluationPeriods;
    public Alarm withEvaluationPeriods(Long evaluationPeriods) {
        this.evaluationPeriods = evaluationPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public Alarm withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricName")
    public MetricNameEnum metricName;
    public Alarm withMetricName(MetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoredResourceInfo")
    public MonitoredResourceInfo monitoredResourceInfo;
    public Alarm withMonitoredResourceInfo(MonitoredResourceInfo monitoredResourceInfo) {
        this.monitoredResourceInfo = monitoredResourceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Alarm withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationEnabled")
    public Boolean notificationEnabled;
    public Alarm withNotificationEnabled(Boolean notificationEnabled) {
        this.notificationEnabled = notificationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTriggers")
    public AlarmStateEnum[] notificationTriggers;
    public Alarm withNotificationTriggers(AlarmStateEnum[] notificationTriggers) {
        this.notificationTriggers = notificationTriggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public Alarm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public Alarm withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AlarmStateEnum state;
    public Alarm withState(AlarmStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistic")
    public MetricStatisticEnum statistic;
    public Alarm withStatistic(MetricStatisticEnum statistic) {
        this.statistic = statistic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public Alarm withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threshold")
    public Double threshold;
    public Alarm withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treatMissingData")
    public TreatMissingDataEnum treatMissingData;
    public Alarm withTreatMissingData(TreatMissingDataEnum treatMissingData) {
        this.treatMissingData = treatMissingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public Alarm withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}