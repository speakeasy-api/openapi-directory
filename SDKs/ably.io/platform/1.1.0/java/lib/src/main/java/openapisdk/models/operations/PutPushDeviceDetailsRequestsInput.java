package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPushDeviceDetailsRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public PutPushDeviceDetailsRequestsInput withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceDetailsInput deviceDetails;
    public PutPushDeviceDetailsRequestsInput withDeviceDetails(openapisdk.models.shared.DeviceDetailsInput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.DeviceDetailsInput deviceDetails1;
    public PutPushDeviceDetailsRequestsInput withDeviceDetails1(openapisdk.models.shared.DeviceDetailsInput deviceDetails1) {
        this.deviceDetails1 = deviceDetails1;
        return this;
    }
}