import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartMigrationActionEnum {
    StartMigration = "StartMigration"
}
export declare enum POSTStartMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTStartMigrationRequest extends SpeakeasyBase {
    action: POSTStartMigrationActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartMigrationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
