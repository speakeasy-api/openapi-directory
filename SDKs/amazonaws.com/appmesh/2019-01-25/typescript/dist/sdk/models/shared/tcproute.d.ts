import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteAction } from "./tcprouteaction";
import { TcpRouteMatch } from "./tcproutematch";
import { TcpTimeout } from "./tcptimeout";
/**
 * An object that represents a TCP route type.
 */
export declare class TcpRoute extends SpeakeasyBase {
    action: TcpRouteAction;
    match?: TcpRouteMatch;
    timeout?: TcpTimeout;
}
