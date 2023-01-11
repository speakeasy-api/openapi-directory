import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RewritingRuleSerializer } from "./rewritingruleserializer";



export class UrlRewritingRulesSerializer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: RewritingRuleSerializer })
  rules: RewritingRuleSerializer[];

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls: string[];
}
