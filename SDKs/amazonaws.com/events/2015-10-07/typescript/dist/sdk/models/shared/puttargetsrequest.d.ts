import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
export declare class PutTargetsRequest extends SpeakeasyBase {
    eventBusName?: string;
    rule: string;
    targets: Target[];
}
