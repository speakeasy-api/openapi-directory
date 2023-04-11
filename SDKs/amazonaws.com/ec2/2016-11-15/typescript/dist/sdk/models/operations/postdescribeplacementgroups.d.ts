import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribePlacementGroupsActionEnum {
    DescribePlacementGroups = "DescribePlacementGroups"
}
export declare enum POSTDescribePlacementGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribePlacementGroupsRequest extends SpeakeasyBase {
    action: POSTDescribePlacementGroupsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribePlacementGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribePlacementGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
