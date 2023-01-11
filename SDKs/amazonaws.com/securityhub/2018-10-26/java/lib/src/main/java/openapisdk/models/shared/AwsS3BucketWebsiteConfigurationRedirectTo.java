package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketWebsiteConfigurationRedirectTo
 * The redirect behavior for requests to the website.
**/
public class AwsS3BucketWebsiteConfigurationRedirectTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hostname")
    public String hostname;
    public AwsS3BucketWebsiteConfigurationRedirectTo withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public String protocol;
    public AwsS3BucketWebsiteConfigurationRedirectTo withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
}