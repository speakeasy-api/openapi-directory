package openapisdk.models.operations;



public class DescribeDeviceRequest {
    public DescribeDevicePathParams pathParams;
    public DescribeDeviceRequest withPathParams(DescribeDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeDeviceHeaders headers;
    public DescribeDeviceRequest withHeaders(DescribeDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
}