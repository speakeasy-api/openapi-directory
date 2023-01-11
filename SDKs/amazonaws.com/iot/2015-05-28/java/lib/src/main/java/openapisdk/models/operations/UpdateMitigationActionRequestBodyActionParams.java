package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMitigationActionRequestBodyActionParams
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
public class UpdateMitigationActionRequestBodyActionParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addThingsToThingGroupParams")
    public openapisdk.models.shared.AddThingsToThingGroupParams addThingsToThingGroupParams;
    public UpdateMitigationActionRequestBodyActionParams withAddThingsToThingGroupParams(openapisdk.models.shared.AddThingsToThingGroupParams addThingsToThingGroupParams) {
        this.addThingsToThingGroupParams = addThingsToThingGroupParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIoTLoggingParams")
    public openapisdk.models.shared.EnableIoTLoggingParams enableIoTLoggingParams;
    public UpdateMitigationActionRequestBodyActionParams withEnableIoTLoggingParams(openapisdk.models.shared.EnableIoTLoggingParams enableIoTLoggingParams) {
        this.enableIoTLoggingParams = enableIoTLoggingParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishFindingToSnsParams")
    public openapisdk.models.shared.PublishFindingToSnsParams publishFindingToSnsParams;
    public UpdateMitigationActionRequestBodyActionParams withPublishFindingToSnsParams(openapisdk.models.shared.PublishFindingToSnsParams publishFindingToSnsParams) {
        this.publishFindingToSnsParams = publishFindingToSnsParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceDefaultPolicyVersionParams")
    public openapisdk.models.shared.ReplaceDefaultPolicyVersionParams replaceDefaultPolicyVersionParams;
    public UpdateMitigationActionRequestBodyActionParams withReplaceDefaultPolicyVersionParams(openapisdk.models.shared.ReplaceDefaultPolicyVersionParams replaceDefaultPolicyVersionParams) {
        this.replaceDefaultPolicyVersionParams = replaceDefaultPolicyVersionParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateCACertificateParams")
    public openapisdk.models.shared.UpdateCaCertificateParams updateCACertificateParams;
    public UpdateMitigationActionRequestBodyActionParams withUpdateCaCertificateParams(openapisdk.models.shared.UpdateCaCertificateParams updateCACertificateParams) {
        this.updateCACertificateParams = updateCACertificateParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateDeviceCertificateParams")
    public openapisdk.models.shared.UpdateDeviceCertificateParams updateDeviceCertificateParams;
    public UpdateMitigationActionRequestBodyActionParams withUpdateDeviceCertificateParams(openapisdk.models.shared.UpdateDeviceCertificateParams updateDeviceCertificateParams) {
        this.updateDeviceCertificateParams = updateDeviceCertificateParams;
        return this;
    }
}