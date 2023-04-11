import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Preprocessing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Convert an image of text into a binarized (light and dark) view
     *
     * @remarks
     * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
     */
    preprocessingBinarize(req: operations.PreprocessingBinarizeRequestBody, security: operations.PreprocessingBinarizeSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeResponse>;
    /**
     * Convert an image of text into a binary (light and dark) view with ML
     *
     * @remarks
     * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
     */
    preprocessingBinarizeAdvanced(req: operations.PreprocessingBinarizeAdvancedRequestBody, security: operations.PreprocessingBinarizeAdvancedSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeAdvancedResponse>;
    /**
     * Get the angle of the page / document / receipt
     *
     * @remarks
     * Analyzes a photo or image of a document and identifies the rotation angle of the page.
     */
    preprocessingGetPageAngle(req: operations.PreprocessingGetPageAngleRequestBody, security: operations.PreprocessingGetPageAngleSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingGetPageAngleResponse>;
    /**
     * Detect and unrotate a document image
     *
     * @remarks
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
     */
    preprocessingUnrotate(req: operations.PreprocessingUnrotateRequestBody, security: operations.PreprocessingUnrotateSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateResponse>;
    /**
     * Detect and unrotate a document image (advanced)
     *
     * @remarks
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
     */
    preprocessingUnrotateAdvanced(req: operations.PreprocessingUnrotateAdvancedRequestBody, security: operations.PreprocessingUnrotateAdvancedSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateAdvancedResponse>;
    /**
     * Detect and unskew a photo of a document
     *
     * @remarks
     * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
     */
    preprocessingUnskew(req: operations.PreprocessingUnskewRequestBody, security: operations.PreprocessingUnskewSecurity, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnskewResponse>;
}
