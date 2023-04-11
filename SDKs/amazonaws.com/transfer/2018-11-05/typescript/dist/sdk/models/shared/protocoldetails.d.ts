import { SpeakeasyBase } from "../../../internal/utils";
import { As2TransportEnum } from "./as2transportenum";
import { SetStatOptionEnum } from "./setstatoptionenum";
import { TlsSessionResumptionModeEnum } from "./tlssessionresumptionmodeenum";
/**
 *  The protocol settings that are configured for your server.
 */
export declare class ProtocolDetails extends SpeakeasyBase {
    as2Transports?: As2TransportEnum[];
    passiveIp?: string;
    setStatOption?: SetStatOptionEnum;
    tlsSessionResumptionMode?: TlsSessionResumptionModeEnum;
}
