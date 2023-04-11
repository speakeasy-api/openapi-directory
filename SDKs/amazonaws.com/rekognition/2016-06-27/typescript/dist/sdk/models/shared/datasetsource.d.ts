import { SpeakeasyBase } from "../../../internal/utils";
import { GroundTruthManifest } from "./groundtruthmanifest";
/**
 * <p> The source that Amazon Rekognition Custom Labels uses to create a dataset. To use an Amazon Sagemaker format manifest file, specify the S3 bucket location in the <code>GroundTruthManifest</code> field. The S3 bucket must be in your AWS account. To create a copy of an existing dataset, specify the Amazon Resource Name (ARN) of an existing dataset in <code>DatasetArn</code>.</p> <p>You need to specify a value for <code>DatasetArn</code> or <code>GroundTruthManifest</code>, but not both. if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs. </p> <p>For more information, see <a>CreateDataset</a>.</p>
 */
export declare class DatasetSource extends SpeakeasyBase {
    datasetArn?: string;
    /**
     * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
     */
    groundTruthManifest?: GroundTruthManifest;
}
