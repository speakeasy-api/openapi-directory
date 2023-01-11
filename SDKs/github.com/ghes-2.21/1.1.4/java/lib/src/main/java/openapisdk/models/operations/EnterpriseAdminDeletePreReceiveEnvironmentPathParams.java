package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeletePreReceiveEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pre_receive_environment_id")
    public Long preReceiveEnvironmentId;
    public EnterpriseAdminDeletePreReceiveEnvironmentPathParams withPreReceiveEnvironmentId(Long preReceiveEnvironmentId) {
        this.preReceiveEnvironmentId = preReceiveEnvironmentId;
        return this;
    }
}