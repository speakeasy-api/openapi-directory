import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestRoomS3TagsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Room ID
     */
    roomId: number;
}
export declare class RequestRoomS3TagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    s3TagList?: shared.S3TagList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
