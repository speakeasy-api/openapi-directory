import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the dataset input data configuration for a document classifier model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p>
 */
export declare class DatasetDocumentClassifierInputDataConfig extends SpeakeasyBase {
    labelDelimiter?: string;
    s3Uri: string;
}
