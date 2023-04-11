import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information regarding predicted values returned by Amazon Textract operations, including the predicted value and the confidence in the predicted value.
 */
export declare class Prediction extends SpeakeasyBase {
    confidence?: number;
    value?: string;
}
