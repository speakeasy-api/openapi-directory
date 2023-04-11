import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful POST on Client resource
 */
export declare class Client extends SpeakeasyBase {
    /**
     * customizable config
     */
    config?: string;
    id: number;
    idLogo?: number;
    name: string;
    privateKey?: string;
    /**
     * Should the client display the company manager page.
     */
    pro: boolean;
    publicKey?: string;
    redirectUris: string;
    secret: string;
}
