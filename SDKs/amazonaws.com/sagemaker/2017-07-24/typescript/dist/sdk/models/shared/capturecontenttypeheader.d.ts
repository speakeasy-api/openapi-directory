import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
 */
export declare class CaptureContentTypeHeader extends SpeakeasyBase {
    csvContentTypes?: string[];
    jsonContentTypes?: string[];
}
