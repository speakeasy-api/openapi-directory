import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum GETDescribeEventsSourceTypeEnum {
    DbInstance = "db-instance",
    DbParameterGroup = "db-parameter-group",
    DbSecurityGroup = "db-security-group",
    DbSnapshot = "db-snapshot"
}
export declare enum GETDescribeEventsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeEventsRequest extends SpeakeasyBase {
    action: GETDescribeEventsActionEnum;
    duration?: number;
    endTime?: Date;
    eventCategories?: string[];
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: GETDescribeEventsSourceTypeEnum;
    startTime?: Date;
    version: GETDescribeEventsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
