import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateAccountAliasActionEnum {
    CreateAccountAlias = "CreateAccountAlias"
}
export declare enum POSTCreateAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateAccountAliasRequest extends SpeakeasyBase {
    action: POSTCreateAccountAliasActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateAccountAliasVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateAccountAliasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
