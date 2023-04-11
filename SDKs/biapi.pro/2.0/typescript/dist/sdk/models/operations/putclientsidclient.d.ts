import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutClientsIdClientRequestBody extends SpeakeasyBase {
    /**
     * custom config about the client
     */
    config?: string;
    /**
     * text to display as a default description
     */
    description?: string;
    /**
     * text to display as a description for banks
     */
    descriptionBanks?: string;
    /**
     * text to display as a description for providers
     */
    descriptionProviders?: string;
    /**
     * set a rsa key pair for the client, which make it possible to generate a jwt user token using this client. No effect if the client already has a set of keys(default: False)
     */
    generateKeys?: boolean;
    /**
     * name of client
     */
    name?: string;
    /**
     * hexadecimal code of the client primary color (e.g F45B9A)
     */
    primaryColor?: string;
    /**
     * Wether the client should display the company manager page
     */
    pro?: boolean;
    /**
     * list of allowed redirect uris
     */
    redirectUris?: string;
    /**
     * hexadecimal code of the client secondary color (e.g F45B9A)
     */
    secondaryColor?: string;
    /**
     * reset the secret
     */
    secret?: boolean;
    /**
     * update the custom information about the client instead of replacing the existing one (default: True)
     */
    updateConfig?: boolean;
}
export declare class PutClientsIdClientRequest extends SpeakeasyBase {
    requestBody?: PutClientsIdClientRequestBody;
    expand?: string;
    idClient: number;
}
export declare class PutClientsIdClientResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Client resource
     */
    client?: shared.Client;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
