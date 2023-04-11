import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
/**
 *  Information to define the hierarchy for which documents users should have access to.
 */
export declare class HierarchicalPrincipal extends SpeakeasyBase {
    principalList: Principal[];
}
