package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV1VerificationSendQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_code")
    public String countryCode;
    public PostV1VerificationSendQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public PostV1VerificationSendFormatEnum format;
    public PostV1VerificationSendQueryParams withFormat(PostV1VerificationSendFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PostV1VerificationSendQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mesg")
    public String mesg;
    public PostV1VerificationSendQueryParams withMesg(String mesg) {
        this.mesg = mesg;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tel")
    public String tel;
    public PostV1VerificationSendQueryParams withTel(String tel) {
        this.tel = tel;
        return this;
    }
}