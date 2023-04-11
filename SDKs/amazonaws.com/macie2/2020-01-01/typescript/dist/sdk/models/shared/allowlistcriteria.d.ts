import { SpeakeasyBase } from "../../../internal/utils";
import { S3WordsList } from "./s3wordslist";
/**
 * Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
 */
export declare class AllowListCriteria extends SpeakeasyBase {
    regex?: string;
    s3WordsList?: S3WordsList;
}
