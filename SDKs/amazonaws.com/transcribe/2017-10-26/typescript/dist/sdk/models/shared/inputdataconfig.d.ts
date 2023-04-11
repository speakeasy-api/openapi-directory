import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the Amazon S3 location of the training data you want to use to create a new custom language model, and permissions to access this location.</p> <p>When using <code>InputDataConfig</code>, you must include these sub-parameters: <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include <code>TuningDataS3Uri</code>.</p>
 */
export declare class InputDataConfig extends SpeakeasyBase {
    dataAccessRoleArn: string;
    s3Uri: string;
    tuningDataS3Uri?: string;
}
