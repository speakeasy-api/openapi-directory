import { Attempt } from "./attempt";
import { Connection } from "./connection";
import { Destination } from "./destination";
import { DestinationDefinition } from "./destinationdefinition";
import { DestinationDefinitionSpecification } from "./destinationdefinitionspecification";
import { DestinationOauth } from "./destinationoauth";
import { Health } from "./health";
import { Internal } from "./internal";
import { Jobs } from "./jobs";
import { Logs } from "./logs";
import { Notifications } from "./notifications";
import { Openapi } from "./openapi";
import { Operation } from "./operation";
import { Scheduler } from "./scheduler";
import { Source } from "./source";
import { SourceDefinition } from "./sourcedefinition";
import { SourceDefinitionSpecification } from "./sourcedefinitionspecification";
import { SourceOauth } from "./sourceoauth";
import { State } from "./state";
import { WebBackend } from "./webbackend";
import { Workspace } from "./workspace";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://airbyte.local", "http://localhost:8000/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * Airbyte Configuration API
 *
 * @remarks
 * [https://airbyte.io](https://airbyte.io).
 *
 * This API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.
 *
 * Here are some conventions that this API follows:
 * * All endpoints are http POST methods.
 * * All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params.
 * * The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`.
 * * For all `update` methods, the whole object must be passed in, even the fields that did not change.
 *
 * Authentication (OSS):
 * * When authenticating to the Configuration API, you must use Basic Authentication by setting the Authentication Header to Basic and base64 encoding the username and password (which are `airbyte` and `password` by default - so base64 encoding `airbyte:password` results in `YWlyYnl0ZTpwYXNzd29yZA==`). So the full header reads `'Authorization': "Basic YWlyYnl0ZTpwYXNzd29yZA=="`
 *
 *
 * @see {@link https://airbyte.io} - Find out more about Airbyte
 */
export declare class SDK {
    /**
     * Interactions with attempt related resources.
     */
    attempt: Attempt;
    /**
     * Connection between sources and destinations.
     */
    connection: Connection;
    /**
     * Destination related resources.
     */
    destination: Destination;
    /**
     * DestinationDefinition related resources.
     */
    destinationDefinition: DestinationDefinition;
    /**
     * DestinationDefinitionSpecification related resources.
     */
    destinationDefinitionSpecification: DestinationDefinitionSpecification;
    /**
     * Source OAuth related resources to delegate access from user.
     */
    destinationOauth: DestinationOauth;
    /**
     * Healthchecks
     */
    health: Health;
    internal: Internal;
    jobs: Jobs;
    logs: Logs;
    notifications: Notifications;
    openapi: Openapi;
    operation: Operation;
    scheduler: Scheduler;
    /**
     * Source related resources.
     */
    source: Source;
    /**
     * SourceDefinition related resources.
     */
    sourceDefinition: SourceDefinition;
    /**
     * SourceDefinition specification related resources.
     */
    sourceDefinitionSpecification: SourceDefinitionSpecification;
    /**
     * Source OAuth related resources to delegate access from user.
     */
    sourceOauth: SourceOauth;
    /**
     * Interactions with state related resources.
     */
    state: State;
    /**
     * Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
     *
     * @remarks
     * guaranteeing any backwards compatibility.
     *
     */
    webBackend: WebBackend;
    /**
     * Workspace related resources.
     */
    workspace: Workspace;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
