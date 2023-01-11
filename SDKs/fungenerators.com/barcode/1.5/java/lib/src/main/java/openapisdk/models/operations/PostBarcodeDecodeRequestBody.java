package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBarcodeDecodeRequestBody {
    @SpeakeasyMetadata("form:name=barimage")
    public byte[] barimage;
    public PostBarcodeDecodeRequestBody withBarimage(byte[] barimage) {
        this.barimage = barimage;
        return this;
    }
}