package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayMediaIntentHandlingHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public PlayMediaIntentHandlingHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Request-Timeout")
    public Double requestTimeout;
    public PlayMediaIntentHandlingHeaders withRequestTimeout(Double requestTimeout) {
        this.requestTimeout = requestTimeout;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=User-Agent")
    public String userAgent;
    public PlayMediaIntentHandlingHeaders withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-applecloudextension-retry-count")
    public Double xApplecloudextensionRetryCount;
    public PlayMediaIntentHandlingHeaders withXApplecloudextensionRetryCount(Double xApplecloudextensionRetryCount) {
        this.xApplecloudextensionRetryCount = xApplecloudextensionRetryCount;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-applecloudextension-session-id")
    public String xApplecloudextensionSessionId;
    public PlayMediaIntentHandlingHeaders withXApplecloudextensionSessionId(String xApplecloudextensionSessionId) {
        this.xApplecloudextensionSessionId = xApplecloudextensionSessionId;
        return this;
    }
}