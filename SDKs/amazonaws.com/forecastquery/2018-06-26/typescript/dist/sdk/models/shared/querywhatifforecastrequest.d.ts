import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryWhatIfForecastRequest extends SpeakeasyBase {
    endDate?: string;
    filters: Record<string, string>;
    nextToken?: string;
    startDate?: string;
    whatIfForecastArn: string;
}
