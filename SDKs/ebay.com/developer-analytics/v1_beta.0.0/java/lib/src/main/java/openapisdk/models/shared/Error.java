package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * This type defines the fields that can be returned in an error.
**/
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Error withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Error withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorId")
    public Integer errorId;
    public Error withErrorId(Integer errorId) {
        this.errorId = errorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputRefIds")
    public String[] inputRefIds;
    public Error withInputRefIds(String[] inputRefIds) {
        this.inputRefIds = inputRefIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longMessage")
    public String longMessage;
    public Error withLongMessage(String longMessage) {
        this.longMessage = longMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputRefIds")
    public String[] outputRefIds;
    public Error withOutputRefIds(String[] outputRefIds) {
        this.outputRefIds = outputRefIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public ErrorParameter[] parameters;
    public Error withParameters(ErrorParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdomain")
    public String subdomain;
    public Error withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
}