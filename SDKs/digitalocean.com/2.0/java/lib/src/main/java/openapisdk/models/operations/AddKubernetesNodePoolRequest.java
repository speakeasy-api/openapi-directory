package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddKubernetesNodePoolRequest {
    public AddKubernetesNodePoolPathParams pathParams;
    public AddKubernetesNodePoolRequest withPathParams(AddKubernetesNodePoolPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput request;
    public AddKubernetesNodePoolRequest withRequest(openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput request) {
        this.request = request;
        return this;
    }
}