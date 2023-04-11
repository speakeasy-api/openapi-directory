import { Access } from "./access";
import { Agent } from "./agent";
import { Coap } from "./coap";
import { Daemon } from "./daemon";
import { Dhcp } from "./dhcp";
import { Ipmi } from "./ipmi";
import * as shared from "./models/shared";
import { Mqtt } from "./mqtt";
import { Netflow } from "./netflow";
import { Proxy } from "./proxy";
import { Sflow } from "./sflow";
import { Snmptcp } from "./snmptcp";
import { SNMPv3 } from "./snmpv3";
import { Ssh } from "./ssh";
import { Syslog } from "./syslog";
import { Telnet } from "./telnet";
import { Tftp } from "./tftp";
import { Tod } from "./tod";
import { Valuespace } from "./valuespace";
import { Web } from "./web";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://gambitcomm.local", "http://127.0.0.1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the API for MIMIC client to connect to MIMIC daemon.
 *
 * @see {@link https://www.gambitcomm.com/site/about.php} - Find out more about Gambit
 */
export declare class SDK {
    access: Access;
    agent: Agent;
    coap: Coap;
    dhcp: Dhcp;
    daemon: Daemon;
    ipmi: Ipmi;
    mqtt: Mqtt;
    netflow: Netflow;
    proxy: Proxy;
    sflow: Sflow;
    snmptcp: Snmptcp;
    snmPv3: SNMPv3;
    ssh: Ssh;
    syslog: Syslog;
    telnet: Telnet;
    tftp: Tftp;
    tod: Tod;
    valuespace: Valuespace;
    web: Web;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
