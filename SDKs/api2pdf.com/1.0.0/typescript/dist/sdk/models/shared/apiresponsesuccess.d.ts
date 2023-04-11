import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing the url to the PDF and other meta data
 */
export declare class ApiResponseSuccess extends SpeakeasyBase {
    /**
     * Cost of the operation (mbIn + mbOut) * $.001
     */
    cost?: number;
    /**
     * The amount of megabytes of bandwidth used to process the pdf
     */
    mbIn?: number;
    /**
     * The amount of megabytes of bandwidth generated from the resulting pdf
     */
    mbOut?: number;
    /**
     * A url to the PDF that will exist only for 24 hours
     */
    pdf?: string;
    /**
     * Will be true if the operation suceeded
     */
    success?: boolean;
}
