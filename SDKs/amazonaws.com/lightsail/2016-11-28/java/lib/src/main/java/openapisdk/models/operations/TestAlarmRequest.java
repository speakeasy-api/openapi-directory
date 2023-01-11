package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestAlarmRequest {
    public TestAlarmHeaders headers;
    public TestAlarmRequest withHeaders(TestAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestAlarmRequest request;
    public TestAlarmRequest withRequest(openapisdk.models.shared.TestAlarmRequest request) {
        this.request = request;
        return this;
    }
}