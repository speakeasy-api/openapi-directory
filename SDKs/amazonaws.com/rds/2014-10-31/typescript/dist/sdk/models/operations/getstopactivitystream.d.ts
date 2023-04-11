import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStopActivityStreamActionEnum {
    StopActivityStream = "StopActivityStream"
}
export declare enum GETStopActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStopActivityStreamRequest extends SpeakeasyBase {
    action: GETStopActivityStreamActionEnum;
    /**
     * Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database.
     */
    applyImmediately?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
     */
    resourceArn: string;
    version: GETStopActivityStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStopActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
