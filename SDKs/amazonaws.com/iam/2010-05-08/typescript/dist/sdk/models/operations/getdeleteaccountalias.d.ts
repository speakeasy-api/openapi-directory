import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteAccountAliasActionEnum {
    DeleteAccountAlias = "DeleteAccountAlias"
}
export declare enum GETDeleteAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteAccountAliasRequest extends SpeakeasyBase {
    /**
     * <p>The name of the account alias to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</p>
     */
    accountAlias: string;
    action: GETDeleteAccountAliasActionEnum;
    version: GETDeleteAccountAliasVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
