import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCompleteMigrationActionEnum {
    CompleteMigration = "CompleteMigration"
}
export declare enum POSTCompleteMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCompleteMigrationRequest extends SpeakeasyBase {
    action: POSTCompleteMigrationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCompleteMigrationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCompleteMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
