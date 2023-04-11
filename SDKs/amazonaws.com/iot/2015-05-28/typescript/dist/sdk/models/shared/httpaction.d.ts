import { SpeakeasyBase } from "../../../internal/utils";
import { HttpActionHeader } from "./httpactionheader";
import { HttpAuthorization } from "./httpauthorization";
/**
 * Send data to an HTTPS endpoint.
 */
export declare class HttpAction extends SpeakeasyBase {
    auth?: HttpAuthorization;
    confirmationUrl?: string;
    headers?: HttpActionHeader[];
    url: string;
}
