import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels.
 */
export declare class S3Destination extends SpeakeasyBase {
    bucket?: string;
    keyPrefix?: string;
}
