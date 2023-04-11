import { SpeakeasyBase } from "../../../internal/utils";
import { DnsResponseTypeEnum } from "./dnsresponsetypeenum";
import { IpPreferenceEnum } from "./ippreferenceenum";
/**
 * An object that represents the DNS service discovery information for your virtual node.
 */
export declare class DnsServiceDiscovery extends SpeakeasyBase {
    hostname: string;
    ipPreference?: IpPreferenceEnum;
    responseType?: DnsResponseTypeEnum;
}
