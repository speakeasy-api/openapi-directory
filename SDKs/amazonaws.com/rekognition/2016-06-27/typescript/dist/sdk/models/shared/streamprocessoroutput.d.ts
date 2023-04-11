import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisDataStream } from "./kinesisdatastream";
import { S3Destination } from "./s3destination";
/**
 * Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
 */
export declare class StreamProcessorOutput extends SpeakeasyBase {
    kinesisDataStream?: KinesisDataStream;
    s3Destination?: S3Destination;
}
