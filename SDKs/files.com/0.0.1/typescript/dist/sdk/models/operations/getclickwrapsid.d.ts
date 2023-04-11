import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClickwrapsIdRequest extends SpeakeasyBase {
    /**
     * Clickwrap ID.
     */
    id: number;
}
export declare class GetClickwrapsIdResponse extends SpeakeasyBase {
    /**
     * The Clickwraps object.
     */
    clickwrapEntity?: shared.ClickwrapEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
