import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CanvasDataAnalyticsSummaryRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Canvas API identifier
     */
    canvasId?: string;
    /**
     * (Required) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Date on which the data export should end - defaults to time of the request
     */
    endingAt?: string;
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * Whether or not to include step stats for deleted steps (defaults to false)
     */
    includeDeletedStepData?: string;
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * Whether or not to include step stats (defaults to false)
     */
    includeStepBreakdown?: string;
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * Whether or not to include variant stats (defaults to false)
     */
    includeVariantBreakdown?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)
     */
    length?: string;
    /**
     * (Optional) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Date on which the data export should begin (either length or starting_at required)
     */
    startingAt?: string;
}
export declare class CanvasDataAnalyticsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
