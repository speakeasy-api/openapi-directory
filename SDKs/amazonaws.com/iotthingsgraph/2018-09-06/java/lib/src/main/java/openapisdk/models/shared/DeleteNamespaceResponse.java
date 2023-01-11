package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteNamespaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceArn")
    public String namespaceArn;
    public DeleteNamespaceResponse withNamespaceArn(String namespaceArn) {
        this.namespaceArn = namespaceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceName")
    public String namespaceName;
    public DeleteNamespaceResponse withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
}