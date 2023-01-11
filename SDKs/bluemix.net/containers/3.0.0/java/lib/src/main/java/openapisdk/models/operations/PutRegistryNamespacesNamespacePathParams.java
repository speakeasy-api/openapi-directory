package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRegistryNamespacesNamespacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=namespace")
    public String namespace;
    public PutRegistryNamespacesNamespacePathParams withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}