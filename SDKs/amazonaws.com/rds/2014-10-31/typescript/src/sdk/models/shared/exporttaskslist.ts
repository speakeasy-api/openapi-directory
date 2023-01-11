import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportTasksList
/** 
 * <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
**/
export class ExportTasksList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exportOnly?: string[];

  @SpeakeasyMetadata()
  exportTaskIdentifier?: string;

  @SpeakeasyMetadata()
  failureCause?: string;

  @SpeakeasyMetadata()
  iamRoleArn?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  percentProgress?: number;

  @SpeakeasyMetadata()
  s3Bucket?: string;

  @SpeakeasyMetadata()
  s3Prefix?: string;

  @SpeakeasyMetadata()
  snapshotTime?: Date;

  @SpeakeasyMetadata()
  sourceArn?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  taskEndTime?: Date;

  @SpeakeasyMetadata()
  taskStartTime?: Date;

  @SpeakeasyMetadata()
  totalExtractedDataInGB?: number;

  @SpeakeasyMetadata()
  warningMessage?: string;
}
