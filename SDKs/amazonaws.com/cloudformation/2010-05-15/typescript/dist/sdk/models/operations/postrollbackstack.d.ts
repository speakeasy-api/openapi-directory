import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRollbackStackActionEnum {
    RollbackStack = "RollbackStack"
}
export declare enum POSTRollbackStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTRollbackStackRequest extends SpeakeasyBase {
    action: POSTRollbackStackActionEnum;
    requestBody?: Uint8Array;
    version: POSTRollbackStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRollbackStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
