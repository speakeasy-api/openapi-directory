package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterPushDeviceRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public RegisterPushDeviceRequestsInput withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceDetailsInput deviceDetails;
    public RegisterPushDeviceRequestsInput withDeviceDetails(openapisdk.models.shared.DeviceDetailsInput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
}