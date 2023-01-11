import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
import { ErrorT } from "./error";
export declare class ReturnPolicyResponse extends SpeakeasyBase {
    returnPolicies?: ReturnPolicy[];
    warnings?: ErrorT[];
}
