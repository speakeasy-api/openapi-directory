import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryForecastRequest extends SpeakeasyBase {
    endDate?: string;
    filters: Record<string, string>;
    forecastArn: string;
    nextToken?: string;
    startDate?: string;
}
