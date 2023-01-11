package openapisdk.models.shared;



/**
 * ConfigurationOptionSetting
 * A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. 
**/
public class ConfigurationOptionSetting {
    public String namespace;
    public ConfigurationOptionSetting withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
    public String optionName;
    public ConfigurationOptionSetting withOptionName(String optionName) {
        this.optionName = optionName;
        return this;
    }
    public String resourceName;
    public ConfigurationOptionSetting withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    public String value;
    public ConfigurationOptionSetting withValue(String value) {
        this.value = value;
        return this;
    }
}