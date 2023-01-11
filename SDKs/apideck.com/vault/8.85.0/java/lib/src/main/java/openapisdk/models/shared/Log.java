package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Log {
    @JsonProperty("api_style")
    public String apiStyle;
    public Log withApiStyle(String apiStyle) {
        this.apiStyle = apiStyle;
        return this;
    }
    @JsonProperty("base_url")
    public String baseUrl;
    public Log withBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    @JsonProperty("child_request")
    public Boolean childRequest;
    public Log withChildRequest(Boolean childRequest) {
        this.childRequest = childRequest;
        return this;
    }
    @JsonProperty("consumer_id")
    public String consumerId;
    public Log withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public Log withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_message")
    public String errorMessage;
    public Log withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("execution")
    public Long execution;
    public Log withExecution(Long execution) {
        this.execution = execution;
        return this;
    }
    @JsonProperty("has_children")
    public Boolean hasChildren;
    public Log withHasChildren(Boolean hasChildren) {
        this.hasChildren = hasChildren;
        return this;
    }
    @JsonProperty("http_method")
    public String httpMethod;
    public Log withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Log withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latency")
    public Double latency;
    public Log withLatency(Double latency) {
        this.latency = latency;
        return this;
    }
    @JsonProperty("operation")
    public LogOperation operation;
    public Log withOperation(LogOperation operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("parent_id")
    public String parentId;
    public Log withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public Log withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("sandbox")
    public Boolean sandbox;
    public Log withSandbox(Boolean sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    @JsonProperty("service")
    public LogService service;
    public Log withService(LogService service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip")
    public String sourceIp;
    public Log withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public Log withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public Log withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public Log withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("unified_api")
    public LogUnifiedApiEnum unifiedApi;
    public Log withUnifiedApi(LogUnifiedApiEnum unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
}