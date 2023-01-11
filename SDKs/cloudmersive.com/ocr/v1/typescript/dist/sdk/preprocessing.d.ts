import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Preprocessing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * preprocessingBinarize - Convert an image of text into a binarized (light and dark) view
     *
     * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
    **/
    preprocessingBinarize(req: operations.PreprocessingBinarizeRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeResponse>;
    /**
     * preprocessingBinarizeAdvanced - Convert an image of text into a binary (light and dark) view with ML
     *
     * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
    **/
    preprocessingBinarizeAdvanced(req: operations.PreprocessingBinarizeAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeAdvancedResponse>;
    /**
     * preprocessingGetPageAngle - Get the angle of the page / document / receipt
     *
     * Analyzes a photo or image of a document and identifies the rotation angle of the page.
    **/
    preprocessingGetPageAngle(req: operations.PreprocessingGetPageAngleRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingGetPageAngleResponse>;
    /**
     * preprocessingUnrotate - Detect and unrotate a document image
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnrotate(req: operations.PreprocessingUnrotateRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateResponse>;
    /**
     * preprocessingUnrotateAdvanced - Detect and unrotate a document image (advanced)
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnrotateAdvanced(req: operations.PreprocessingUnrotateAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateAdvancedResponse>;
    /**
     * preprocessingUnskew - Detect and unskew a photo of a document
     *
     * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnskew(req: operations.PreprocessingUnskewRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnskewResponse>;
}
