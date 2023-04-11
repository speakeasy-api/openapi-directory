import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Site object.
     */
    siteEntity?: shared.SiteEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
