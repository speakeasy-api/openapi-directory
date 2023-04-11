import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduleTemplatesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetScheduleTemplatesRequest extends SpeakeasyBase {
    /**
     * The feed type of the schedule templates to retrieve.
     */
    feedType: string;
    /**
     * The maximum number of schedule templates that can be returned on each page of the paginated response. Use this parameter in conjunction with the <strong>offset</strong> parameter to control the pagination of the output. <p> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span></p><p>For example, if <strong>offset</strong> is set to 10 and <strong>limit</strong> is set to 10, the call retrieves schedule templates 11 thru 20 from the result set.</p><p>If this parameter is omitted, the default value is used. <br /><br /><b>Default: </b> 10 <br /><br /><b>Maximum: </b>500
     */
    limit?: string;
    /**
     * The number of schedule templates to skip in the result set before returning the first template in the paginated response. <p>Combine <strong>offset</strong> with the <strong>limit</strong> query parameter to control the items returned in the response. For example, if you supply an <strong>offset</strong> of <code>0</code> and a <strong>limit</strong> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <strong>offset</strong> is <code>10</code> and <strong>limit</strong> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set. If this query parameter is not set, the default value is used and the first page of records is returned.<br /><br /><b>Default: </b>0
     */
    offset?: string;
}
export declare class GetScheduleTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleTemplateCollection?: shared.ScheduleTemplateCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
