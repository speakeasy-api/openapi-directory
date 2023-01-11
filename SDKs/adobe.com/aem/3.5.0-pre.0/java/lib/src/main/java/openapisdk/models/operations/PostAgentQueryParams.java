package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAgentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=:operation")
    public String operation;
    public PostAgentQueryParams withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/cq:distribute")
    public Boolean jcrContentCqDistribute;
    public PostAgentQueryParams withJcrContentCqDistribute(Boolean jcrContentCqDistribute) {
        this.jcrContentCqDistribute = jcrContentCqDistribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/cq:distribute@TypeHint")
    public String jcrContentCqDistributeAtTypeHint;
    public PostAgentQueryParams withJcrContentCqDistributeAtTypeHint(String jcrContentCqDistributeAtTypeHint) {
        this.jcrContentCqDistributeAtTypeHint = jcrContentCqDistributeAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/cq:name")
    public String jcrContentCqName;
    public PostAgentQueryParams withJcrContentCqName(String jcrContentCqName) {
        this.jcrContentCqName = jcrContentCqName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/cq:template")
    public String jcrContentCqTemplate;
    public PostAgentQueryParams withJcrContentCqTemplate(String jcrContentCqTemplate) {
        this.jcrContentCqTemplate = jcrContentCqTemplate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/enabled")
    public Boolean jcrContentEnabled;
    public PostAgentQueryParams withJcrContentEnabled(Boolean jcrContentEnabled) {
        this.jcrContentEnabled = jcrContentEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/jcr:description")
    public String jcrContentJcrDescription;
    public PostAgentQueryParams withJcrContentJcrDescription(String jcrContentJcrDescription) {
        this.jcrContentJcrDescription = jcrContentJcrDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/jcr:lastModified")
    public String jcrContentJcrLastModified;
    public PostAgentQueryParams withJcrContentJcrLastModified(String jcrContentJcrLastModified) {
        this.jcrContentJcrLastModified = jcrContentJcrLastModified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/jcr:lastModifiedBy")
    public String jcrContentJcrLastModifiedBy;
    public PostAgentQueryParams withJcrContentJcrLastModifiedBy(String jcrContentJcrLastModifiedBy) {
        this.jcrContentJcrLastModifiedBy = jcrContentJcrLastModifiedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/jcr:mixinTypes")
    public String jcrContentJcrMixinTypes;
    public PostAgentQueryParams withJcrContentJcrMixinTypes(String jcrContentJcrMixinTypes) {
        this.jcrContentJcrMixinTypes = jcrContentJcrMixinTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/jcr:title")
    public String jcrContentJcrTitle;
    public PostAgentQueryParams withJcrContentJcrTitle(String jcrContentJcrTitle) {
        this.jcrContentJcrTitle = jcrContentJcrTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/logLevel")
    public String jcrContentLogLevel;
    public PostAgentQueryParams withJcrContentLogLevel(String jcrContentLogLevel) {
        this.jcrContentLogLevel = jcrContentLogLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/noStatusUpdate")
    public Boolean jcrContentNoStatusUpdate;
    public PostAgentQueryParams withJcrContentNoStatusUpdate(Boolean jcrContentNoStatusUpdate) {
        this.jcrContentNoStatusUpdate = jcrContentNoStatusUpdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/noVersioning")
    public Boolean jcrContentNoVersioning;
    public PostAgentQueryParams withJcrContentNoVersioning(Boolean jcrContentNoVersioning) {
        this.jcrContentNoVersioning = jcrContentNoVersioning;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolConnectTimeout")
    public Double jcrContentProtocolConnectTimeout;
    public PostAgentQueryParams withJcrContentProtocolConnectTimeout(Double jcrContentProtocolConnectTimeout) {
        this.jcrContentProtocolConnectTimeout = jcrContentProtocolConnectTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPConnectionClosed")
    public Boolean jcrContentProtocolHTTPConnectionClosed;
    public PostAgentQueryParams withJcrContentProtocolHttpConnectionClosed(Boolean jcrContentProtocolHTTPConnectionClosed) {
        this.jcrContentProtocolHTTPConnectionClosed = jcrContentProtocolHTTPConnectionClosed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPExpired")
    public String jcrContentProtocolHTTPExpired;
    public PostAgentQueryParams withJcrContentProtocolHttpExpired(String jcrContentProtocolHTTPExpired) {
        this.jcrContentProtocolHTTPExpired = jcrContentProtocolHTTPExpired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPHeaders")
    public String[] jcrContentProtocolHTTPHeaders;
    public PostAgentQueryParams withJcrContentProtocolHttpHeaders(String[] jcrContentProtocolHTTPHeaders) {
        this.jcrContentProtocolHTTPHeaders = jcrContentProtocolHTTPHeaders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPHeaders@TypeHint")
    public String jcrContentProtocolHTTPHeadersAtTypeHint;
    public PostAgentQueryParams withJcrContentProtocolHttpHeadersAtTypeHint(String jcrContentProtocolHTTPHeadersAtTypeHint) {
        this.jcrContentProtocolHTTPHeadersAtTypeHint = jcrContentProtocolHTTPHeadersAtTypeHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPMethod")
    public String jcrContentProtocolHTTPMethod;
    public PostAgentQueryParams withJcrContentProtocolHttpMethod(String jcrContentProtocolHTTPMethod) {
        this.jcrContentProtocolHTTPMethod = jcrContentProtocolHTTPMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolHTTPSRelaxed")
    public Boolean jcrContentProtocolHTTPSRelaxed;
    public PostAgentQueryParams withJcrContentProtocolHttpsRelaxed(Boolean jcrContentProtocolHTTPSRelaxed) {
        this.jcrContentProtocolHTTPSRelaxed = jcrContentProtocolHTTPSRelaxed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolInterface")
    public String jcrContentProtocolInterface;
    public PostAgentQueryParams withJcrContentProtocolInterface(String jcrContentProtocolInterface) {
        this.jcrContentProtocolInterface = jcrContentProtocolInterface;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolSocketTimeout")
    public Double jcrContentProtocolSocketTimeout;
    public PostAgentQueryParams withJcrContentProtocolSocketTimeout(Double jcrContentProtocolSocketTimeout) {
        this.jcrContentProtocolSocketTimeout = jcrContentProtocolSocketTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/protocolVersion")
    public String jcrContentProtocolVersion;
    public PostAgentQueryParams withJcrContentProtocolVersion(String jcrContentProtocolVersion) {
        this.jcrContentProtocolVersion = jcrContentProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyHost")
    public String jcrContentProxyHost;
    public PostAgentQueryParams withJcrContentProxyHost(String jcrContentProxyHost) {
        this.jcrContentProxyHost = jcrContentProxyHost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyNTLMDomain")
    public String jcrContentProxyNTLMDomain;
    public PostAgentQueryParams withJcrContentProxyNtlmDomain(String jcrContentProxyNTLMDomain) {
        this.jcrContentProxyNTLMDomain = jcrContentProxyNTLMDomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyNTLMHost")
    public String jcrContentProxyNTLMHost;
    public PostAgentQueryParams withJcrContentProxyNtlmHost(String jcrContentProxyNTLMHost) {
        this.jcrContentProxyNTLMHost = jcrContentProxyNTLMHost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyPassword")
    public String jcrContentProxyPassword;
    public PostAgentQueryParams withJcrContentProxyPassword(String jcrContentProxyPassword) {
        this.jcrContentProxyPassword = jcrContentProxyPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyPort")
    public Double jcrContentProxyPort;
    public PostAgentQueryParams withJcrContentProxyPort(Double jcrContentProxyPort) {
        this.jcrContentProxyPort = jcrContentProxyPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/proxyUser")
    public String jcrContentProxyUser;
    public PostAgentQueryParams withJcrContentProxyUser(String jcrContentProxyUser) {
        this.jcrContentProxyUser = jcrContentProxyUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/queueBatchMaxSize")
    public Double jcrContentQueueBatchMaxSize;
    public PostAgentQueryParams withJcrContentQueueBatchMaxSize(Double jcrContentQueueBatchMaxSize) {
        this.jcrContentQueueBatchMaxSize = jcrContentQueueBatchMaxSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/queueBatchMode")
    public String jcrContentQueueBatchMode;
    public PostAgentQueryParams withJcrContentQueueBatchMode(String jcrContentQueueBatchMode) {
        this.jcrContentQueueBatchMode = jcrContentQueueBatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/queueBatchWaitTime")
    public Double jcrContentQueueBatchWaitTime;
    public PostAgentQueryParams withJcrContentQueueBatchWaitTime(Double jcrContentQueueBatchWaitTime) {
        this.jcrContentQueueBatchWaitTime = jcrContentQueueBatchWaitTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/retryDelay")
    public String jcrContentRetryDelay;
    public PostAgentQueryParams withJcrContentRetryDelay(String jcrContentRetryDelay) {
        this.jcrContentRetryDelay = jcrContentRetryDelay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/reverseReplication")
    public Boolean jcrContentReverseReplication;
    public PostAgentQueryParams withJcrContentReverseReplication(Boolean jcrContentReverseReplication) {
        this.jcrContentReverseReplication = jcrContentReverseReplication;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/serializationType")
    public String jcrContentSerializationType;
    public PostAgentQueryParams withJcrContentSerializationType(String jcrContentSerializationType) {
        this.jcrContentSerializationType = jcrContentSerializationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/sling:resourceType")
    public String jcrContentSlingResourceType;
    public PostAgentQueryParams withJcrContentSlingResourceType(String jcrContentSlingResourceType) {
        this.jcrContentSlingResourceType = jcrContentSlingResourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/ssl")
    public String jcrContentSsl;
    public PostAgentQueryParams withJcrContentSsl(String jcrContentSsl) {
        this.jcrContentSsl = jcrContentSsl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/transportNTLMDomain")
    public String jcrContentTransportNTLMDomain;
    public PostAgentQueryParams withJcrContentTransportNtlmDomain(String jcrContentTransportNTLMDomain) {
        this.jcrContentTransportNTLMDomain = jcrContentTransportNTLMDomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/transportNTLMHost")
    public String jcrContentTransportNTLMHost;
    public PostAgentQueryParams withJcrContentTransportNtlmHost(String jcrContentTransportNTLMHost) {
        this.jcrContentTransportNTLMHost = jcrContentTransportNTLMHost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/transportPassword")
    public String jcrContentTransportPassword;
    public PostAgentQueryParams withJcrContentTransportPassword(String jcrContentTransportPassword) {
        this.jcrContentTransportPassword = jcrContentTransportPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/transportUri")
    public String jcrContentTransportUri;
    public PostAgentQueryParams withJcrContentTransportUri(String jcrContentTransportUri) {
        this.jcrContentTransportUri = jcrContentTransportUri;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/transportUser")
    public String jcrContentTransportUser;
    public PostAgentQueryParams withJcrContentTransportUser(String jcrContentTransportUser) {
        this.jcrContentTransportUser = jcrContentTransportUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/triggerDistribute")
    public Boolean jcrContentTriggerDistribute;
    public PostAgentQueryParams withJcrContentTriggerDistribute(Boolean jcrContentTriggerDistribute) {
        this.jcrContentTriggerDistribute = jcrContentTriggerDistribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/triggerModified")
    public Boolean jcrContentTriggerModified;
    public PostAgentQueryParams withJcrContentTriggerModified(Boolean jcrContentTriggerModified) {
        this.jcrContentTriggerModified = jcrContentTriggerModified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/triggerOnOffTime")
    public Boolean jcrContentTriggerOnOffTime;
    public PostAgentQueryParams withJcrContentTriggerOnOffTime(Boolean jcrContentTriggerOnOffTime) {
        this.jcrContentTriggerOnOffTime = jcrContentTriggerOnOffTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/triggerReceive")
    public Boolean jcrContentTriggerReceive;
    public PostAgentQueryParams withJcrContentTriggerReceive(Boolean jcrContentTriggerReceive) {
        this.jcrContentTriggerReceive = jcrContentTriggerReceive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/triggerSpecific")
    public Boolean jcrContentTriggerSpecific;
    public PostAgentQueryParams withJcrContentTriggerSpecific(Boolean jcrContentTriggerSpecific) {
        this.jcrContentTriggerSpecific = jcrContentTriggerSpecific;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:content/userId")
    public String jcrContentUserId;
    public PostAgentQueryParams withJcrContentUserId(String jcrContentUserId) {
        this.jcrContentUserId = jcrContentUserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:primaryType")
    public String jcrPrimaryType;
    public PostAgentQueryParams withJcrPrimaryType(String jcrPrimaryType) {
        this.jcrPrimaryType = jcrPrimaryType;
        return this;
    }
}