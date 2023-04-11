import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { CreateConnectionOAuthClientRequestParameters } from "./createconnectionoauthclientrequestparameters";
/**
 * Contains the OAuth authorization parameters to use for the connection.
 */
export declare class CreateConnectionOAuthRequestParameters extends SpeakeasyBase {
    authorizationEndpoint: string;
    clientParameters: CreateConnectionOAuthClientRequestParameters;
    httpMethod: ConnectionOAuthHttpMethodEnum;
    oAuthHttpParameters?: ConnectionHttpParameters;
}
