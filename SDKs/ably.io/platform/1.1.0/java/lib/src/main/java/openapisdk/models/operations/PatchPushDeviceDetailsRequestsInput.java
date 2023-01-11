package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPushDeviceDetailsRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public PatchPushDeviceDetailsRequestsInput withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceDetailsInput deviceDetails;
    public PatchPushDeviceDetailsRequestsInput withDeviceDetails(openapisdk.models.shared.DeviceDetailsInput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.DeviceDetailsInput deviceDetails1;
    public PatchPushDeviceDetailsRequestsInput withDeviceDetails1(openapisdk.models.shared.DeviceDetailsInput deviceDetails1) {
        this.deviceDetails1 = deviceDetails1;
        return this;
    }
}