import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Access } from "./access";
import { Agent } from "./agent";
import { Coap } from "./coap";
import { Dhcp } from "./dhcp";
import { Daemon } from "./daemon";
import { Ipmi } from "./ipmi";
import { Mqtt } from "./mqtt";
import { Netflow } from "./netflow";
import { Proxy } from "./proxy";
import { Sflow } from "./sflow";
import { Snmptcp } from "./snmptcp";
import { SnmPv3 } from "./snmpv3";
import { Ssh } from "./ssh";
import { Syslog } from "./syslog";
import { Telnet } from "./telnet";
import { Tftp } from "./tftp";
import { Tod } from "./tod";
import { Valuespace } from "./valuespace";
import { Web } from "./web";


export const ServerList = [
	"http://gambitcomm.local",
	"http://127.0.0.1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit*/
export class SDK {
  public access: Access;
  public agent: Agent;
  public coap: Coap;
  public dhcp: Dhcp;
  public daemon: Daemon;
  public ipmi: Ipmi;
  public mqtt: Mqtt;
  public netflow: Netflow;
  public proxy: Proxy;
  public sflow: Sflow;
  public snmptcp: Snmptcp;
  public snmPv3: SnmPv3;
  public ssh: Ssh;
  public syslog: Syslog;
  public telnet: Telnet;
  public tftp: Tftp;
  public tod: Tod;
  public valuespace: Valuespace;
  public web: Web;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.access = new Access(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.agent = new Agent(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.coap = new Coap(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dhcp = new Dhcp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.daemon = new Daemon(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ipmi = new Ipmi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mqtt = new Mqtt(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.netflow = new Netflow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.proxy = new Proxy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sflow = new Sflow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snmptcp = new Snmptcp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snmPv3 = new SnmPv3(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ssh = new Ssh(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.syslog = new Syslog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.telnet = new Telnet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tftp = new Tftp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tod = new Tod(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.valuespace = new Valuespace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.web = new Web(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}