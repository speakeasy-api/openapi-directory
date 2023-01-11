import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstanceCreditSpecificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceCreditSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
