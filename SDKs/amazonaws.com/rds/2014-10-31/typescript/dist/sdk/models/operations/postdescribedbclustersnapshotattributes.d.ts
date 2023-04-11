import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBClusterSnapshotAttributesActionEnum {
    DescribeDBClusterSnapshotAttributes = "DescribeDBClusterSnapshotAttributes"
}
export declare enum POSTDescribeDBClusterSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeDBClusterSnapshotAttributesRequest extends SpeakeasyBase {
    action: POSTDescribeDBClusterSnapshotAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBClusterSnapshotAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBClusterSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
