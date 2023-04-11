import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationTypeUpdate } from "./classificationtypeupdate";
/**
 * (Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action.
 */
export declare class S3ResourceClassificationUpdate extends SpeakeasyBase {
    bucketName: string;
    classificationTypeUpdate: ClassificationTypeUpdate;
    prefix?: string;
}
