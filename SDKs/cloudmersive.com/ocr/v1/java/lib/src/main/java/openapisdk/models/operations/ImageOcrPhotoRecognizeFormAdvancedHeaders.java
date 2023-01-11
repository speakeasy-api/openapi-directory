package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeFormAdvancedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=bucketID")
    public String bucketID;
    public ImageOcrPhotoRecognizeFormAdvancedHeaders withBucketId(String bucketID) {
        this.bucketID = bucketID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=bucketSecretKey")
    public String bucketSecretKey;
    public ImageOcrPhotoRecognizeFormAdvancedHeaders withBucketSecretKey(String bucketSecretKey) {
        this.bucketSecretKey = bucketSecretKey;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=diagnostics")
    public String diagnostics;
    public ImageOcrPhotoRecognizeFormAdvancedHeaders withDiagnostics(String diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=preprocessing")
    public String preprocessing;
    public ImageOcrPhotoRecognizeFormAdvancedHeaders withPreprocessing(String preprocessing) {
        this.preprocessing = preprocessing;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=recognitionMode")
    public String recognitionMode;
    public ImageOcrPhotoRecognizeFormAdvancedHeaders withRecognitionMode(String recognitionMode) {
        this.recognitionMode = recognitionMode;
        return this;
    }
}