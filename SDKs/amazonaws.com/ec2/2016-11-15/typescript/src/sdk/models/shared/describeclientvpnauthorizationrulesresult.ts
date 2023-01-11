import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClientVpnAuthorizationRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizationRules?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
