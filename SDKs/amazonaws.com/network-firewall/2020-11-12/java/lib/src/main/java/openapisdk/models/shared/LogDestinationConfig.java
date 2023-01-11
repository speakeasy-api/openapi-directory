package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LogDestinationConfig
 * <p>Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>
**/
public class LogDestinationConfig {
    @JsonProperty("LogDestination")
    public java.util.Map<String, String> logDestination;
    public LogDestinationConfig withLogDestination(java.util.Map<String, String> logDestination) {
        this.logDestination = logDestination;
        return this;
    }
    @JsonProperty("LogDestinationType")
    public LogDestinationTypeEnum logDestinationType;
    public LogDestinationConfig withLogDestinationType(LogDestinationTypeEnum logDestinationType) {
        this.logDestinationType = logDestinationType;
        return this;
    }
    @JsonProperty("LogType")
    public LogTypeEnum logType;
    public LogDestinationConfig withLogType(LogTypeEnum logType) {
        this.logType = logType;
        return this;
    }
}