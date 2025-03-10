/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RegistryCredential - &lt;p&gt; Information about credentials that provide access to a private Docker registry. When this is set: &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;imagePullCredentialsType&lt;/code&gt; must be set to &lt;code&gt;SERVICE_ROLE&lt;/code&gt;. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; images cannot be curated or an Amazon ECR image.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt; For more information, see &lt;a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html"&gt;Private Registry with Secrets Manager Sample for CodeBuild&lt;/a&gt;. &lt;/p&gt;
 */
public class RegistryCredential {
    @JsonProperty("credential")
    public String credential;

    public RegistryCredential withCredential(String credential) {
        this.credential = credential;
        return this;
    }
    
    @JsonProperty("credentialProvider")
    public CredentialProviderTypeEnum credentialProvider;

    public RegistryCredential withCredentialProvider(CredentialProviderTypeEnum credentialProvider) {
        this.credentialProvider = credentialProvider;
        return this;
    }
    
    public RegistryCredential(@JsonProperty("credential") String credential, @JsonProperty("credentialProvider") CredentialProviderTypeEnum credentialProvider) {
        this.credential = credential;
        this.credentialProvider = credentialProvider;
  }
}
