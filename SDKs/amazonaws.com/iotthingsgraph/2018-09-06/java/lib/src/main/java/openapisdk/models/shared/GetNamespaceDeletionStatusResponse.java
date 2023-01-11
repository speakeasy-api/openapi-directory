package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNamespaceDeletionStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public NamespaceDeletionStatusErrorCodesEnum errorCode;
    public GetNamespaceDeletionStatusResponse withErrorCode(NamespaceDeletionStatusErrorCodesEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public GetNamespaceDeletionStatusResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceArn")
    public String namespaceArn;
    public GetNamespaceDeletionStatusResponse withNamespaceArn(String namespaceArn) {
        this.namespaceArn = namespaceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceName")
    public String namespaceName;
    public GetNamespaceDeletionStatusResponse withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public NamespaceDeletionStatusEnum status;
    public GetNamespaceDeletionStatusResponse withStatus(NamespaceDeletionStatusEnum status) {
        this.status = status;
        return this;
    }
}