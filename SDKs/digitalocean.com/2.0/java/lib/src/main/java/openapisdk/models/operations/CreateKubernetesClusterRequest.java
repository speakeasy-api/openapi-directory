package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateKubernetesClusterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput request;
    public CreateKubernetesClusterRequest withRequest(openapisdk.models.shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput request) {
        this.request = request;
        return this;
    }
}