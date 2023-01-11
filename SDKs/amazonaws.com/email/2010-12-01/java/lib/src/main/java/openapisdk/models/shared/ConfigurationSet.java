package openapisdk.models.shared;



/**
 * ConfigurationSet
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
public class ConfigurationSet {
    public String name;
    public ConfigurationSet withName(String name) {
        this.name = name;
        return this;
    }
}