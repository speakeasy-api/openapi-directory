import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1NonprofitsListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetApiV1NonprofitsListRequest extends SpeakeasyBase {
    /**
     * A string to search.
     */
    name?: string;
    /**
     * The page to return. This endpoint is paginated, and returns up to 30 nonprofits at a time.
     */
    page?: number;
}
export declare class GetApiV1NonprofitsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
