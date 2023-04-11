import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute extends SpeakeasyBase {
    comparison?: string;
    customAttributeName?: string;
    value?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudienceAND extends SpeakeasyBase {
    customAttribute?: ScheduleApiTriggeredCanvasesRequestBodyAudienceANDCustomAttribute;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudience extends SpeakeasyBase {
    and?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAND[];
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyRecipients extends SpeakeasyBase {
    canvasEntryProperties?: Record<string, any>;
    externalUserId?: string;
    triggerProperties?: string;
    userAlias?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodySchedule extends SpeakeasyBase {
    atOptimalTime?: boolean;
    inLocalTime?: boolean;
    time?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBody extends SpeakeasyBase {
    audience?: ScheduleApiTriggeredCanvasesRequestBodyAudience;
    broadcast?: boolean;
    canvasEntryProperties?: Record<string, any>;
    canvasId?: string;
    recipients?: ScheduleApiTriggeredCanvasesRequestBodyRecipients[];
    schedule?: ScheduleApiTriggeredCanvasesRequestBodySchedule;
}
export declare class ScheduleApiTriggeredCanvasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
