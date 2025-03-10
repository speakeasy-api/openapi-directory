import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionHttpParameters } from "./connectionhttpparameters";
import { CreateConnectionApiKeyAuthRequestParameters } from "./createconnectionapikeyauthrequestparameters";
import { CreateConnectionBasicAuthRequestParameters } from "./createconnectionbasicauthrequestparameters";
import { CreateConnectionOAuthRequestParameters } from "./createconnectionoauthrequestparameters";
/**
 * Contains the authorization parameters for the connection.
 */
export declare class CreateConnectionAuthRequestParameters extends SpeakeasyBase {
    apiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;
    basicAuthParameters?: CreateConnectionBasicAuthRequestParameters;
    invocationHttpParameters?: ConnectionHttpParameters;
    oAuthParameters?: CreateConnectionOAuthRequestParameters;
}
