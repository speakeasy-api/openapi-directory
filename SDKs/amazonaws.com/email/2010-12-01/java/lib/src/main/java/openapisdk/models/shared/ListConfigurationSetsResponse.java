package openapisdk.models.shared;



/**
 * ListConfigurationSetsResponse
 * A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
public class ListConfigurationSetsResponse {
    public ConfigurationSet[] configurationSets;
    public ListConfigurationSetsResponse withConfigurationSets(ConfigurationSet[] configurationSets) {
        this.configurationSets = configurationSets;
        return this;
    }
    public String nextToken;
    public ListConfigurationSetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}