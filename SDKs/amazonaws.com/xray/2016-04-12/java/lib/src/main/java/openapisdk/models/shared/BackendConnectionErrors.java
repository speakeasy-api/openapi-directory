package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackendConnectionErrors
 * <p/>
**/
public class BackendConnectionErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionRefusedCount")
    public Long connectionRefusedCount;
    public BackendConnectionErrors withConnectionRefusedCount(Long connectionRefusedCount) {
        this.connectionRefusedCount = connectionRefusedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HTTPCode4XXCount")
    public Long httpCode4XXCount;
    public BackendConnectionErrors withHttpCode4XxCount(Long httpCode4XXCount) {
        this.httpCode4XXCount = httpCode4XXCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HTTPCode5XXCount")
    public Long httpCode5XXCount;
    public BackendConnectionErrors withHttpCode5XxCount(Long httpCode5XXCount) {
        this.httpCode5XXCount = httpCode5XXCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherCount")
    public Long otherCount;
    public BackendConnectionErrors withOtherCount(Long otherCount) {
        this.otherCount = otherCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeoutCount")
    public Long timeoutCount;
    public BackendConnectionErrors withTimeoutCount(Long timeoutCount) {
        this.timeoutCount = timeoutCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnknownHostCount")
    public Long unknownHostCount;
    public BackendConnectionErrors withUnknownHostCount(Long unknownHostCount) {
        this.unknownHostCount = unknownHostCount;
        return this;
    }
}