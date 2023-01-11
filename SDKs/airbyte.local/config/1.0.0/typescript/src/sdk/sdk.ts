import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Connection } from "./connection";
import { Deployment } from "./deployment";
import { Destination } from "./destination";
import { DestinationDefinition } from "./destinationdefinition";
import { DestinationDefinitionSpecification } from "./destinationdefinitionspecification";
import { Health } from "./health";
import { Jobs } from "./jobs";
import { Logs } from "./logs";
import { Notifications } from "./notifications";
import { Openapi } from "./openapi";
import { Operation } from "./operation";
import { Scheduler } from "./scheduler";
import { Source } from "./source";
import { SourceDefinition } from "./sourcedefinition";
import { SourceDefinitionSpecification } from "./sourcedefinitionspecification";
import { WebBackend } from "./webbackend";
import { Workspace } from "./workspace";


export const ServerList = [
	"http://airbyte.local",
	"http://localhost:8000/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://airbyte.io - Find out more about Airbyte*/
export class SDK {
  public connection: Connection;
  public deployment: Deployment;
  public destination: Destination;
  public destinationDefinition: DestinationDefinition;
  public destinationDefinitionSpecification: DestinationDefinitionSpecification;
  public health: Health;
  public jobs: Jobs;
  public logs: Logs;
  public notifications: Notifications;
  public openapi: Openapi;
  public operation: Operation;
  public scheduler: Scheduler;
  public source: Source;
  public sourceDefinition: SourceDefinition;
  public sourceDefinitionSpecification: SourceDefinitionSpecification;
  public webBackend: WebBackend;
  public workspace: Workspace;

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
    
    this.connection = new Connection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deployment = new Deployment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.destination = new Destination(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.destinationDefinition = new DestinationDefinition(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.destinationDefinitionSpecification = new DestinationDefinitionSpecification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.health = new Health(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jobs = new Jobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.logs = new Logs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.notifications = new Notifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.openapi = new Openapi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.operation = new Operation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scheduler = new Scheduler(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.source = new Source(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sourceDefinition = new SourceDefinition(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sourceDefinitionSpecification = new SourceDefinitionSpecification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webBackend = new WebBackend(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workspace = new Workspace(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}