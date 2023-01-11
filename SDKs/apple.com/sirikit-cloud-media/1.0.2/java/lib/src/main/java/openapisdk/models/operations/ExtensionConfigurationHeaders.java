package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtensionConfigurationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public ExtensionConfigurationHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Cache-Control")
    public String cacheControl;
    public ExtensionConfigurationHeaders withCacheControl(String cacheControl) {
        this.cacheControl = cacheControl;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public ExtensionConfigurationHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Request-Timeout")
    public Double requestTimeout;
    public ExtensionConfigurationHeaders withRequestTimeout(Double requestTimeout) {
        this.requestTimeout = requestTimeout;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=User-Agent")
    public String userAgent;
    public ExtensionConfigurationHeaders withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-applecloudextension-retry-count")
    public Double xApplecloudextensionRetryCount;
    public ExtensionConfigurationHeaders withXApplecloudextensionRetryCount(Double xApplecloudextensionRetryCount) {
        this.xApplecloudextensionRetryCount = xApplecloudextensionRetryCount;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-applecloudextension-session-id")
    public String xApplecloudextensionSessionId;
    public ExtensionConfigurationHeaders withXApplecloudextensionSessionId(String xApplecloudextensionSessionId) {
        this.xApplecloudextensionSessionId = xApplecloudextensionSessionId;
        return this;
    }
}