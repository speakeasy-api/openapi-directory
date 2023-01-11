package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1VerificationResultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetV1VerificationResultFormatEnum format;
    public GetV1VerificationResultQueryParams withFormat(GetV1VerificationResultFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetV1VerificationResultQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=otp")
    public String otp;
    public GetV1VerificationResultQueryParams withOtp(String otp) {
        this.otp = otp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tran_id")
    public String tranId;
    public GetV1VerificationResultQueryParams withTranId(String tranId) {
        this.tranId = tranId;
        return this;
    }
}