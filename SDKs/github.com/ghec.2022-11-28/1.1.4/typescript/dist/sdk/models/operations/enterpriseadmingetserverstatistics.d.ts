import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetServerStatisticsRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
     */
    dateEnd?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
     */
    dateStart?: string;
    /**
     * The slug version of the enterprise name or the login of an organization.
     */
    enterpriseOrOrg: string;
}
export declare class EnterpriseAdminGetServerStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    serverStatistics?: shared.ServerStatistics[];
}
