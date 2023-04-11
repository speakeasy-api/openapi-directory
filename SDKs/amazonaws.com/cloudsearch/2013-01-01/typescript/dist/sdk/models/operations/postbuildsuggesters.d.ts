import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBuildSuggestersActionEnum {
    BuildSuggesters = "BuildSuggesters"
}
export declare enum POSTBuildSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTBuildSuggestersRequest extends SpeakeasyBase {
    action: POSTBuildSuggestersActionEnum;
    requestBody?: Uint8Array;
    version: POSTBuildSuggestersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBuildSuggestersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
