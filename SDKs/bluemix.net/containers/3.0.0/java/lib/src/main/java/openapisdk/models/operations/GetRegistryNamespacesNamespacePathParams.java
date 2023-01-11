package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegistryNamespacesNamespacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=namespace")
    public String namespace;
    public GetRegistryNamespacesNamespacePathParams withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}