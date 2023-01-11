package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileToLockerIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public UploadFileToLockerIdRequests withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/jpeg")
    public byte[] imageJpeg;
    public UploadFileToLockerIdRequests withImageJpeg(byte[] imageJpeg) {
        this.imageJpeg = imageJpeg;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/jpg")
    public byte[] imageJpg;
    public UploadFileToLockerIdRequests withImageJpg(byte[] imageJpg) {
        this.imageJpg = imageJpg;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/pdf")
    public byte[] imagePdf;
    public UploadFileToLockerIdRequests withImagePdf(byte[] imagePdf) {
        this.imagePdf = imagePdf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/png")
    public byte[] imagePng;
    public UploadFileToLockerIdRequests withImagePng(byte[] imagePng) {
        this.imagePng = imagePng;
        return this;
    }
}