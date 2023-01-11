import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeIamInstanceProfileAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
