import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBClusterSnapshotAttributesActionEnum {
    DescribeDBClusterSnapshotAttributes = "DescribeDBClusterSnapshotAttributes"
}
export declare enum GETDescribeDBClusterSnapshotAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDescribeDBClusterSnapshotAttributesRequest extends SpeakeasyBase {
    action: GETDescribeDBClusterSnapshotAttributesActionEnum;
    /**
     * The identifier for the DB cluster snapshot to describe the attributes for.
     */
    dbClusterSnapshotIdentifier: string;
    version: GETDescribeDBClusterSnapshotAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBClusterSnapshotAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
