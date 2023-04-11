import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExternalEventsIdRequest extends SpeakeasyBase {
    /**
     * External Event ID.
     */
    id: number;
}
export declare class GetExternalEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The ExternalEvents object.
     */
    externalEventEntity?: shared.ExternalEventEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
