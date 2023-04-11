import { SpeakeasyBase } from "../../../internal/utils";
import { S3ContinuousClassificationTypeEnum } from "./s3continuousclassificationtypeenum";
import { S3OneTimeClassificationTypeEnum } from "./s3onetimeclassificationtypeenum";
/**
 * (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified.
 */
export declare class ClassificationTypeUpdate extends SpeakeasyBase {
    continuous?: S3ContinuousClassificationTypeEnum;
    oneTime?: S3OneTimeClassificationTypeEnum;
}
