import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerStatusEnum } from "./authorizerstatusenum";
/**
 * The authorizer description.
 */
export declare class AuthorizerDescription extends SpeakeasyBase {
    authorizerArn?: string;
    authorizerFunctionArn?: string;
    authorizerName?: string;
    creationDate?: Date;
    enableCachingForHttp?: boolean;
    lastModifiedDate?: Date;
    signingDisabled?: boolean;
    status?: AuthorizerStatusEnum;
    tokenKeyName?: string;
    tokenSigningPublicKeys?: Record<string, string>;
}
