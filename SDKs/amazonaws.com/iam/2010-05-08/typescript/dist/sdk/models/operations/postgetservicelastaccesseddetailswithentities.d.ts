import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum {
    GetServiceLastAccessedDetailsWithEntities = "GetServiceLastAccessedDetailsWithEntities"
}
export declare enum POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetServiceLastAccessedDetailsWithEntitiesRequest extends SpeakeasyBase {
    action: POSTGetServiceLastAccessedDetailsWithEntitiesActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
