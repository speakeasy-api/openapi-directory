import { SpeakeasyBase } from "../../../internal/utils";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { DocumentClassifierDataFormatEnum } from "./documentclassifierdataformatenum";
/**
 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>
 */
export declare class DocumentClassifierInputDataConfig extends SpeakeasyBase {
    augmentedManifests?: AugmentedManifestsListItem[];
    dataFormat?: DocumentClassifierDataFormatEnum;
    labelDelimiter?: string;
    s3Uri?: string;
    testS3Uri?: string;
}
