import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { ConnectionOAuthHttpMethodEnum } from "./connectionoauthhttpmethodenum";
import { UpdateConnectionOAuthClientRequestParameters } from "./updateconnectionoauthclientrequestparameters";
/**
 * Contains the OAuth request parameters to use for the connection.
 */
export declare class UpdateConnectionOAuthRequestParameters extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientParameters?: UpdateConnectionOAuthClientRequestParameters;
    httpMethod?: ConnectionOAuthHttpMethodEnum;
    oAuthHttpParameters?: ConnectionHttpParameters;
}
