import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetScheduleTemplateSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetScheduleTemplateRequest extends SpeakeasyBase {
    /**
     * The ID of the template to retrieve. If you do not know the <strong>schedule_template_id</strong>, refer to the documentation or use the <strong>getScheduleTemplates</strong> method to find the available schedule templates.
     */
    scheduleTemplateId: string;
}
export declare class GetScheduleTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    scheduleTemplateResponse?: shared.ScheduleTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
