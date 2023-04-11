import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The object that contains a path format that will be applied when Amazon Lex reads the transcript file in the bucket you provide. Specify this object if you only want Lex to read a subset of files in your Amazon S3 bucket.
 */
export declare class PathFormat extends SpeakeasyBase {
    objectPrefixes?: string[];
}
