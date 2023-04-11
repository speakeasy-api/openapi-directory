import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEnvironmentManagedActionHistoryActionEnum {
    DescribeEnvironmentManagedActionHistory = "DescribeEnvironmentManagedActionHistory"
}
export declare enum GETDescribeEnvironmentManagedActionHistoryVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeEnvironmentManagedActionHistoryRequest extends SpeakeasyBase {
    action: GETDescribeEnvironmentManagedActionHistoryActionEnum;
    /**
     * The environment ID of the target environment.
     */
    environmentId?: string;
    /**
     * The name of the target environment.
     */
    environmentName?: string;
    /**
     * The maximum number of items to return for a single request.
     */
    maxItems?: number;
    /**
     * The pagination token returned by a previous request.
     */
    nextToken?: string;
    version: GETDescribeEnvironmentManagedActionHistoryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEnvironmentManagedActionHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
