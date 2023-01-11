import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSecurityGroupRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  securityGroupRules?: Record<string, any>;
}
