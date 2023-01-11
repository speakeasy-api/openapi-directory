package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetCreateConfigurationSetConfigurationSet
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
public class GetCreateConfigurationSetConfigurationSet {
    @SpeakeasyMetadata("queryParam:name=Name")
    public String name;
    public GetCreateConfigurationSetConfigurationSet withName(String name) {
        this.name = name;
        return this;
    }
}