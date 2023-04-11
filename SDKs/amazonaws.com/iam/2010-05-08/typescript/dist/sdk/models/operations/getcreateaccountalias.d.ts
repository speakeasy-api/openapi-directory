import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateAccountAliasActionEnum {
    CreateAccountAlias = "CreateAccountAlias"
}
export declare enum GETCreateAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETCreateAccountAliasRequest extends SpeakeasyBase {
    /**
     * <p>The account alias to create.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</p>
     */
    accountAlias: string;
    action: GETCreateAccountAliasActionEnum;
    version: GETCreateAccountAliasVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
