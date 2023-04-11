import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRetryPolicy } from "./grpcretrypolicy";
import { GrpcRouteAction } from "./grpcrouteaction";
import { GrpcRouteMatch } from "./grpcroutematch";
import { GrpcTimeout } from "./grpctimeout";
/**
 * An object that represents a gRPC route type.
 */
export declare class GrpcRoute extends SpeakeasyBase {
    action: GrpcRouteAction;
    match: GrpcRouteMatch;
    retryPolicy?: GrpcRetryPolicy;
    timeout?: GrpcTimeout;
}
