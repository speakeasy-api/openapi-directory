import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PdfOcr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pdfOcrPdfToLinesWithLocation - Convert a PDF into text lines with location
     *
     * Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    pdfOcrPdfToLinesWithLocation(req: operations.PdfOcrPdfToLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToLinesWithLocationResponse>;
    /**
     * pdfOcrPdfToWordsWithLocation - Convert a PDF into words with location
     *
     * Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    pdfOcrPdfToWordsWithLocation(req: operations.PdfOcrPdfToWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToWordsWithLocationResponse>;
    /**
     * pdfOcrPost - Converts an uploaded PDF file into text via Optical Character Recognition.
    **/
    pdfOcrPost(req: operations.PdfOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPostResponse>;
}
