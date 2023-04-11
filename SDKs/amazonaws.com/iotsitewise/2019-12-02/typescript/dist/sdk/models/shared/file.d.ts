import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file in Amazon S3 where your data is saved.
 */
export declare class File extends SpeakeasyBase {
    bucket: string;
    key: string;
    versionId?: string;
}
