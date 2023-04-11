import { SpeakeasyBase } from "../../../internal/utils";
import { DataSetTypeEnum } from "./datasettypeenum";
/**
 * Container for the parameters to the GenerateDataSet operation.
 */
export declare class GenerateDataSetRequest extends SpeakeasyBase {
    customerDefinedValues?: Record<string, string>;
    dataSetPublicationDate: Date;
    dataSetType: DataSetTypeEnum;
    destinationS3BucketName: string;
    destinationS3Prefix?: string;
    roleNameArn: string;
    snsTopicArn: string;
}
