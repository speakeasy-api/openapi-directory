/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteIntentRequest {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;

    public DeleteIntentRequest withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;

    public DeleteIntentRequest withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;

    public DeleteIntentRequest withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;

    public DeleteIntentRequest withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;

    public DeleteIntentRequest withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;

    public DeleteIntentRequest withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;

    public DeleteIntentRequest withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    
    /**
     * The identifier of the bot associated with the intent.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botId")
    public String botId;

    public DeleteIntentRequest withBotId(String botId) {
        this.botId = botId;
        return this;
    }
    
    /**
     * The version of the bot associated with the intent.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=botVersion")
    public String botVersion;

    public DeleteIntentRequest withBotVersion(String botVersion) {
        this.botVersion = botVersion;
        return this;
    }
    
    /**
     * The unique identifier of the intent to delete.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intentId")
    public String intentId;

    public DeleteIntentRequest withIntentId(String intentId) {
        this.intentId = intentId;
        return this;
    }
    
    /**
     * The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see &lt;a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"&gt;Supported languages&lt;/a&gt;.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;

    public DeleteIntentRequest withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    
    public DeleteIntentRequest(@JsonProperty("botId") String botId, @JsonProperty("botVersion") String botVersion, @JsonProperty("intentId") String intentId, @JsonProperty("localeId") String localeId) {
        this.botId = botId;
        this.botVersion = botVersion;
        this.intentId = intentId;
        this.localeId = localeId;
  }
}
