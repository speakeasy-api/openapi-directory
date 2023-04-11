import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetRoomS3TagsRequest extends SpeakeasyBase {
    s3TagIds: shared.S3TagIds;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Room ID
     */
    roomId: number;
}
export declare class SetRoomS3TagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    s3TagList?: shared.S3TagList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
