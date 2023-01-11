import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseOutputDescription
/** 
 *  For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination. 
**/
export class KinesisFirehoseOutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceARN?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleARN?: string;
}
