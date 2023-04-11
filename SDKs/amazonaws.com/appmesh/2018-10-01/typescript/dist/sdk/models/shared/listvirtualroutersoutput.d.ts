import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualRouterRef } from "./virtualrouterref";
/**
 * Success
 */
export declare class ListVirtualRoutersOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualRouters: VirtualRouterRef[];
}
