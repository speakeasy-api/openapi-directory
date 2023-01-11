import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGlobalRuleConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rule" })
  rule: shared.RuleTypeEnum;
}


export class GetGlobalRuleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGlobalRuleConfigPathParams;
}


export class GetGlobalRuleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  rule?: shared.Rule;

  @SpeakeasyMetadata()
  statusCode: number;
}
