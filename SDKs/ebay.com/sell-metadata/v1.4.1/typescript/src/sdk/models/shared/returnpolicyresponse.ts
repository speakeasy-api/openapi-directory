import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
import { ErrorT } from "./error";



export class ReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnPolicies", elemType: ReturnPolicy })
  returnPolicies?: ReturnPolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ErrorT })
  warnings?: ErrorT[];
}
