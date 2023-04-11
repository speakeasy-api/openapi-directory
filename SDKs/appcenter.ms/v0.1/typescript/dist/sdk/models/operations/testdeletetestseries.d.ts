import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestDeleteTestSeriesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestDeleteTestSeriesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The slug of the test series
     */
    testSeriesSlug: string;
}
export declare class TestDeleteTestSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
