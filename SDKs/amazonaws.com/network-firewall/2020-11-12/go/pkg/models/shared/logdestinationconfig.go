// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LogDestinationConfig - <p>Defines where Network Firewall sends logs for the firewall for one log type. This is used in <a>LoggingConfiguration</a>. You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.</p> <p>Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to <code>DROP</code> or <code>ALERT</code>. </p>
type LogDestinationConfig struct {
	LogDestination     map[string]string      `json:"LogDestination"`
	LogDestinationType LogDestinationTypeEnum `json:"LogDestinationType"`
	LogType            LogTypeEnum            `json:"LogType"`
}
