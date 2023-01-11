import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImageOcr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * imageOcrImageLinesWithLocation - Convert a scanned image into words with location
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrImageLinesWithLocation(req: operations.ImageOcrImageLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageLinesWithLocationResponse>;
    /**
     * imageOcrImageWordsWithLocation - Convert a scanned image into words with location
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrImageWordsWithLocation(req: operations.ImageOcrImageWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageWordsWithLocationResponse>;
    /**
     * imageOcrPhotoRecognizeBusinessCard - Recognize a photo of a business card, extract key business information
     *
     * Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeBusinessCard(req: operations.ImageOcrPhotoRecognizeBusinessCardRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeBusinessCardResponse>;
    /**
     * imageOcrPhotoRecognizeFormAdvanced - Recognize a photo of a form, extract key fields using stored templates
     *
     * Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeFormAdvanced(req: operations.ImageOcrPhotoRecognizeFormAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeFormAdvancedResponse>;
    /**
     * imageOcrPhotoRecognizeReceipt - Recognize a photo of a receipt, extract key business information
     *
     * Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeReceipt(req: operations.ImageOcrPhotoRecognizeReceiptRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeReceiptResponse>;
    /**
     * imageOcrPhotoToText - Convert a photo of a document into text
     *
     * Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoToText(req: operations.ImageOcrPhotoToTextRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoToTextResponse>;
    /**
     * imageOcrPhotoWordsWithLocation - Convert a photo of a document or receipt into words with location
     *
     * Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoWordsWithLocation(req: operations.ImageOcrPhotoWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoWordsWithLocationResponse>;
    /**
     * imageOcrPost - Convert a scanned image into text
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPost(req: operations.ImageOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPostResponse>;
}
