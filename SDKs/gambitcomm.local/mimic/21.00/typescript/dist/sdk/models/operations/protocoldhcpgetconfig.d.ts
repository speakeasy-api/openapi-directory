import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolDhcpGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpGetConfigPathParams;
}
export declare class ProtocolDhcpGetConfigResponse extends SpeakeasyBase {
    configDHCP?: shared.ConfigDhcp;
    contentType: string;
    statusCode: number;
}
