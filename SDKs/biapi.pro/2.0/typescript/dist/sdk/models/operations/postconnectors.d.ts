import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostConnectorsRequestBody extends SpeakeasyBase {
    /**
     * Optionnal comment
     */
    comment?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Users login
     */
    login: string;
    /**
     * Name of the bank or provider
     */
    name: string;
    /**
     * Users password
     */
    password: string;
    /**
     * if set, send an email to user
     */
    sendmail?: boolean;
    /**
     * Type of connector, eg. banks or providers
     */
    types?: string;
    /**
     * Url of the bank
     */
    url?: string;
}
export declare class PostConnectorsRequest extends SpeakeasyBase {
    requestBody: PostConnectorsRequestBody;
    expand?: string;
}
export declare class PostConnectorsResponse extends SpeakeasyBase {
    /**
     * Successful POST on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
