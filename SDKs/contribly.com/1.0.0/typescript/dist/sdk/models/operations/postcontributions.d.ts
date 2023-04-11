import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContributionsSecurity extends SpeakeasyBase {
    oauth: string;
}
export declare class PostContributionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Contribution created
     */
    contribution?: shared.Contribution;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
